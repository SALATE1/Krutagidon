import assert from "node:assert/strict";
import test from "node:test";

import { applyAction, initializeGame, listLegalActions } from "../src/index.js";

const rootDir = process.cwd();

test("active player can play a card from hand through the action loop", () => {
  const state = initializeGame({ rootDir, seed: 60615 });
  const activePlayer = state.players.find((player) => player.playerId === state.activePlayerId);
  assert.ok(activePlayer);

  const playableCard = activePlayer.hand.find((card) => card.definitionId === "esw2_dbg__ocr_022");
  assert.ok(playableCard);

  const legalActions = listLegalActions(state);
  assert.ok(
    legalActions.some((action) => action.type === "playCard" && action.cardInstanceId === playableCard.instanceId),
  );

  const result = applyAction(state, {
    type: "playCard",
    cardInstanceId: playableCard.instanceId,
  });

  assert.equal(result.ok, true);
  assert.equal(activePlayer.hand.includes(playableCard), false);
  assert.equal(activePlayer.playedThisTurn.includes(playableCard), true);
  assert.equal(state.turn.power, 1);
  assert.equal(state.eventLog.at(-1)?.type, "cardPlayed");
});

test("illegal actions are rejected without changing game state", () => {
  const state = initializeGame({ rootDir, seed: 60615 });
  const before = snapshotActionState(state);

  const result = applyAction(state, {
    type: "playCard",
    cardInstanceId: "missing-card-instance",
  });

  assert.equal(result.ok, false);
  assert.deepEqual(snapshotActionState(state), before);
});

test("active player can buy an affordable market card into discard", () => {
  const state = initializeGame({ rootDir, seed: 60615 });
  const activePlayer = state.players.find((player) => player.playerId === state.activePlayerId);
  assert.ok(activePlayer);

  for (const card of [...activePlayer.hand]) {
    applyAction(state, {
      type: "playCard",
      cardInstanceId: card.instanceId,
    });
  }

  const buyAction = listLegalActions(state).find((action) => action.type === "buyMarketCard");
  assert.ok(buyAction);

  const marketCard = state.common.market.find((card) => card.instanceId === buyAction.cardInstanceId);
  assert.ok(marketCard);
  const powerBeforeBuy = state.turn.power;
  const cost = state.cardDefinitions.get(marketCard.definitionId)?.engine.cost;
  assert.equal(typeof cost, "number");
  assert.ok(cost !== undefined);

  const result = applyAction(state, buyAction);

  assert.equal(result.ok, true);
  assert.equal(state.common.market.includes(marketCard), false);
  assert.equal(activePlayer.discard.includes(marketCard), true);
  assert.equal(marketCard.ownerId, activePlayer.playerId);
  assert.equal(state.turn.power, powerBeforeBuy - cost);
  assert.equal(state.eventLog.at(-1)?.type, "cardBought");
});

test("active player can buy wild magic from its stack into discard", () => {
  const state = initializeGame({ rootDir, seed: 60615 });
  const activePlayer = state.players.find((player) => player.playerId === state.activePlayerId);
  assert.ok(activePlayer);

  for (const card of [...activePlayer.hand]) {
    applyAction(state, {
      type: "playCard",
      cardInstanceId: card.instanceId,
    });
  }

  const wildMagicAction = listLegalActions(state).find((action) => {
    return action.type === "buyMarketCard" && action.source === "wildMagicStack";
  });
  assert.ok(wildMagicAction);

  const wildMagicCard = state.common.wildMagicStack.at(0);
  assert.ok(wildMagicCard);
  const result = applyAction(state, wildMagicAction);

  assert.equal(result.ok, true);
  assert.equal(activePlayer.discard.includes(wildMagicCard), true);
  assert.equal(wildMagicCard.ownerId, activePlayer.playerId);
});

test("ending a turn cleans up non-permanents, draws a new hand, and advances active player", () => {
  const state = initializeGame({ rootDir, seed: 60615 });
  const startingActivePlayerId = state.activePlayerId;
  const activePlayer = state.players.find((player) => player.playerId === startingActivePlayerId);
  assert.ok(activePlayer);

  const playedCard = activePlayer.hand.find((card) => card.definitionId === "esw2_dbg__ocr_022");
  assert.ok(playedCard);
  const unplayedCardIds = activePlayer.hand
    .filter((card) => card.instanceId !== playedCard.instanceId)
    .map((card) => card.instanceId);

  applyAction(state, {
    type: "playCard",
    cardInstanceId: playedCard.instanceId,
  });

  const result = applyAction(state, {
    type: "endTurn",
  });

  assert.equal(result.ok, true);
  assert.equal(activePlayer.hand.length, 5);
  assert.equal(activePlayer.playedThisTurn.length, 0);
  assert.equal(activePlayer.discard.some((card) => card.instanceId === playedCard.instanceId), true);
  for (const cardId of unplayedCardIds) {
    assert.equal(activePlayer.discard.some((card) => card.instanceId === cardId), true);
  }
  assert.equal(state.turn.power, 0);
  assert.equal(state.turn.number, 2);
  assert.notEqual(state.activePlayerId, startingActivePlayerId);
  assert.equal(state.eventLog.at(-1)?.type, "turnStarted");
});

test("played permanents stay in the controlled permanent zone after cleanup", () => {
  const state = initializeGame({ rootDir, seed: 60615 });
  const activePlayer = state.players.find((player) => player.playerId === state.activePlayerId);
  assert.ok(activePlayer);

  const ongoingMarketCardIndex = state.common.market.findIndex((card) => {
    return state.cardDefinitions.get(card.definitionId)?.engine.isOngoing === true;
  });
  assert.notEqual(ongoingMarketCardIndex, -1);
  const ongoingCard = state.common.market.splice(ongoingMarketCardIndex, 1).at(0);
  assert.ok(ongoingCard);
  ongoingCard.ownerId = activePlayer.playerId;
  activePlayer.hand.push(ongoingCard);

  const playResult = applyAction(state, {
    type: "playCard",
    cardInstanceId: ongoingCard.instanceId,
  });
  assert.equal(playResult.ok, true);
  assert.equal(activePlayer.permanents.includes(ongoingCard), true);

  const endTurnResult = applyAction(state, {
    type: "endTurn",
  });

  assert.equal(endTurnResult.ok, true);
  assert.equal(activePlayer.permanents.includes(ongoingCard), true);
  assert.equal(activePlayer.discard.includes(ongoingCard), false);
});

test("playing a v0 draw card draws from the active player's deck", () => {
  const state = initializeGame({ rootDir, seed: 60615 });
  const activePlayer = state.players.find((player) => player.playerId === state.activePlayerId);
  assert.ok(activePlayer);

  const drawCardIndex = state.common.market.findIndex((card) => card.definitionId === "esw2_dbg__ocr_017");
  assert.notEqual(drawCardIndex, -1);
  const drawCard = state.common.market.splice(drawCardIndex, 1).at(0);
  assert.ok(drawCard);
  drawCard.ownerId = activePlayer.playerId;
  activePlayer.hand.push(drawCard);

  const deckSizeBefore = activePlayer.deck.length;
  const handSizeBefore = activePlayer.hand.length;
  const result = applyAction(state, {
    type: "playCard",
    cardInstanceId: drawCard.instanceId,
  });

  assert.equal(result.ok, true);
  assert.equal(activePlayer.deck.length, deckSizeBefore - 1);
  assert.equal(activePlayer.hand.length, handSizeBefore);
});

function snapshotActionState(state: ReturnType<typeof initializeGame>): unknown {
  return {
    activePlayerId: state.activePlayerId,
    turn: state.turn,
    players: state.players.map((player) => ({
      playerId: player.playerId,
      deck: player.deck.map((card) => card.instanceId),
      hand: player.hand.map((card) => card.instanceId),
      discard: player.discard.map((card) => card.instanceId),
      playedThisTurn: player.playedThisTurn.map((card) => card.instanceId),
      permanents: player.permanents.map((card) => card.instanceId),
    })),
    common: {
      market: state.common.market.map((card) => card.instanceId),
      legendMarket: state.common.legendMarket.map((card) => card.instanceId),
      wildMagicStack: state.common.wildMagicStack.map((card) => card.instanceId),
    },
    eventLog: state.eventLog,
  };
}
