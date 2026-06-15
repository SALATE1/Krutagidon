export type { RandomSource } from "./engine/rng.js";
export { createSeededRng } from "./engine/rng.js";
export type { CardDefinition, DeckComposition, LoadedDataPack } from "./engine/data.js";
export { loadV0DataPack } from "./engine/data.js";
export type { CardInstance, CommonState, GameState, PlayerId, PlayerState } from "./engine/setup.js";
export { initializeGame } from "./engine/setup.js";
export type { ActionResult, GameAction, LegalAction } from "./engine/actions.js";
export { applyAction, listLegalActions } from "./engine/actions.js";
export type {
  BotDecisionContext,
  BotStrategy,
  GameEndReason,
  PlayerScore,
  RunSingleGameOptions,
  SingleGameResult,
} from "./engine/simulation.js";
export { baselineBot, determineWinnerIds, getGameEndReason, runSingleGame, scoreGame } from "./engine/simulation.js";
export type {
  CompactGameSummary,
  MassSimulationAggregate,
  MassSimulationResult,
  RunMassSimulationOptions,
} from "./engine/mass-simulation.js";
export { runMassSimulation } from "./engine/mass-simulation.js";
