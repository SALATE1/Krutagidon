Status: ready-for-agent

# Import Legend and Familiar Drafts

## What to build

Generate canonical drafts for Legend-deck and familiar source text. Legend cards and Mega Mayhem cards stay in the Legend source group; Mega Mayhem is represented by `visible.cardKind`, not by a separate ID category. Familiar source text should be normalized to the same `texts/` and `drafts/` structure as other card groups.

## Acceptance criteria

- [ ] Ensure familiar source text lives under `data/import/cards/familiar/texts/` and familiar drafts under `data/import/cards/familiar/drafts/`.
- [ ] Generate familiar `cardDraft` JSON with canonical `esw2_dbg__familiar_###` IDs.
- [ ] Generate Legend-deck `cardDraft` JSON with canonical `esw2_dbg__legend_###` IDs.
- [ ] Keep Mega Mayhem source text in the Legend source group and represent it as `visible.cardKind = "megaMayhem"` with empty `visible.cardTypes`.
- [ ] Preserve clarifications as mapping notes in `notes`.
- [ ] Include `composition.quantity` for Legend and familiar drafts from source text or agreed source-group rules.
- [ ] Update generator/parser tests for Legend and familiar source-text dialects.
- [ ] Focused draft validation/reporting for Legend and familiar cards passes without group-specific errors.

## Blocked by

- 01-create-draft-import-harness-with-one-card-and-one-token.md
