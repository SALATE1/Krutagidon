Status: Done

# Normalize Source Assets and Import Data

## What to build

Normalize the source layer so assets and import files have a single predictable structure. Source images should not sit under redundant `raw` folders, import card text should live under `data/import/cards/<source-group>/texts`, and draft JSON should live under the matching `drafts` folder. This slice should update source-image and source-text references so import tooling can validate the new layout.

This issue owns source-layer cleanup only. It should not rename runtime card IDs or split runtime card definitions into their final folders.

## Acceptance criteria

- [x] Remove redundant `raw` path segments from asset layout and update references to the new image paths.
- [x] Use clear kebab-case asset groups where applicable, including `dead-wizard-token`, `wizard-property`, `mega-mayhem`, and `wizard-card`.
- [x] Normalize card import paths to `data/import/cards/<source-group>/texts` and `data/import/cards/<source-group>/drafts`.
- [x] Rename `data/import/cards/legeng` to `data/import/cards/legend`.
- [x] Move direct source files in `special` and `starter` into the appropriate `texts` or `drafts` folder.
- [x] Remove `.cache` and backup artifacts from the canonical import tree, or move them out of canonical paths if they must be retained.
- [x] Remove deprecated `data/import/card-texts` and `data/import/card-drafts` only after all references have been migrated.
- [x] Remove `processed marker` lines and `status: processed` from canonical source markdown/index data.
- [x] Update import validation and import completeness reporting to read the normalized source structure.
- [x] Update focused tests for import validation/reporting.

## Blocked by

- 01-lock-new-data-contract.md
