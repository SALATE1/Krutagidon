Status: Done

# Lock New Data Contract

## What to build

Create the canonical documentation and templates for the new data layout before any file migration happens. The contract must make the project language explicit: source text is referenced through `source.text`, runtime IDs use source-group numbering such as `esw2_dbg__main_001`, file paths are grouped by game source rather than visible card type, and `processed` is not a meaningful data marker.

The issue should update the import guidance so future agents can reliably move from source images to markdown source text, draft JSON, runtime JSON, and pack inclusion without relying on stale OCR terminology or old paths.

## Acceptance criteria

- [x] Add `docs/runtime-layout.md` describing the target layout for `assets`, `data/import`, `data/cards`, `data/tokens`, `data/packs`, `data/decks`, `data/stacks`, and `data/pools`.
- [x] Update `docs/import-pipeline.md` to use `source.text`, current import paths, and the `image -> source md -> draft JSON -> runtime JSON -> pack` flow.
- [x] Remove or replace stale OCR language where it describes the canonical pipeline; source text must not imply OCR.
- [x] Document the ID style `esw2_dbg__<source-group>_<number>` and state that card meaning, Russian names, and visible card types do not belong in IDs or filenames.
- [x] Document that `processed`, `processedMarker`, and `status: processed` are not canonical data markers; import status is derived from file presence.
- [x] Add JSON templates under `docs/templates/` for card draft, card runtime, token draft, token runtime, deck, stack, pool, and pack files.
- [x] Preserve the language boundary: `CONTEXT.md` is for project terms, while `docs/rules-glossary.md` is for tabletop/game terms.
- [x] Do not move or rename runtime/import data files in this issue.

## Blocked by

None - can start immediately
