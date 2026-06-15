# Initialize deterministic game state from mapped data

Status: done
Label: done
Type: AFK

## Parent

`.scratch/krutagidon-simulation-platform/PRD.md`

## What to build

Build the first end-to-end initialization path from mapped card/deck data into a deterministic in-memory game state.

This slice should prove that the engine can load mapped data, instantiate separate physical card copies, seed randomness, shuffle deterministically, and create the player/common zones needed by v0.

## Acceptance criteria

- [x] The engine loads v0 card definitions and deck compositions from data files.
- [x] Starter deck definitions are instantiated separately for each player.
- [x] Identical card definitions become independent card instances during a game.
- [x] Player state includes `deck`, `hand`, `discard`, `playedThisTurn`, and `permanents`.
- [x] Common state includes market/bazaar, main deck, Legend deck, and dead wizard tokens if supported by the v0 data pack.
- [x] A seeded RNG abstraction is used for all shuffle/random setup behavior.
- [x] `Math.random()` is not used in engine code.
- [x] Reinitializing with the same seed produces the same initial state.
- [x] Focused tests cover deterministic setup and independent card instances.

## Blocked by

- `.scratch/krutagidon-simulation-platform/issues/04-map-first-supported-cards-and-build-v0-playable-data-pack.md`
- `.scratch/krutagidon-simulation-platform/issues/05-create-strict-typescript-simulation-scaffold.md`
