# Implement v0 turn/action loop

Status: done
Label: done
Type: AFK

## Parent

`.scratch/krutagidon-simulation-platform/PRD.md`

## What to build

Implement the first playable v0 turn/action loop on top of initialized deterministic game state.

The engine should expose legal actions, accept one selected legal action, apply it, and advance the game through the basic turn lifecycle. Bots and callers must not mutate state directly.

## Acceptance criteria

- [x] The engine can list legal actions for the active player.
- [x] The engine rejects illegal actions without corrupting game state.
- [x] The engine can apply legal draw/play/buy/end-turn actions supported by the v0 data pack.
- [x] Bought or gained cards go to the correct discard zone according to current v0 rules.
- [x] End-of-turn cleanup moves unplayed hand cards and played non-permanents to discard.
- [x] Played permanents remain in the appropriate controlled zone.
- [x] Event logging captures important debug steps for a single game.
- [x] Tests cover the external action loop behavior using deterministic fixtures/data.

## Blocked by

- `.scratch/krutagidon-simulation-platform/issues/06-initialize-deterministic-game-state-from-mapped-data.md`
