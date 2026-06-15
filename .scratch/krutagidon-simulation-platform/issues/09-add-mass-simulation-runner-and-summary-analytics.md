# Add mass simulation runner and summary analytics

Status: done
Label: done
Type: AFK

## Parent

`.scratch/krutagidon-simulation-platform/PRD.md`

## What to build

Add the first mass simulation runner around the single-game engine.

The runner should execute many seeded games, keep compact summaries by default, and report basic aggregate analytics useful for early strategy and rules validation.

## Acceptance criteria

- [x] A console command or script can run N games.
- [x] Each game receives a deterministic seed or reproducible seed sequence.
- [x] Mass runs store compact game summaries rather than full debug logs by default.
- [x] Summary data includes seed, winner, end reason, turn/round count where available, purchases where available, and key counters supported by v0.
- [x] Aggregate output includes basic win/tie rates and end-reason counts.
- [x] A debug mode or documented path still allows detailed logging for a single game.
- [x] The runner can complete a small smoke run in tests or a documented verification command.
- [x] Tests or checks verify that repeated runs with the same seed configuration are reproducible.

## Blocked by

- `.scratch/krutagidon-simulation-platform/issues/08-finish-single-game-simulation-with-scoring-and-baseline-bots.md`
