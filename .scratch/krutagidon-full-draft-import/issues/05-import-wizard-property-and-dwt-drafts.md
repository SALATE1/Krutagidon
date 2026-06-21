Status: ready-for-agent

# Import Wizard Property and DWT Drafts

## What to build

Regenerate canonical drafts for wizard properties and Dead Wizard Tokens from source text. Existing old-shaped drafts should be overwritten or replaced with canonical drafts rather than kept beside them. The generated token drafts must preserve mapping notes, composition quantities, and visible DWT VP penalties without creating runtime behavior.

## Acceptance criteria

- [ ] Rewrite wizard property drafts with canonical filenames and `tokenId` values such as `esw2_dbg__wizard_property_001`.
- [ ] Generate `composition.quantity = 1` for each wizard property draft.
- [ ] Preserve wizard-property clarifications as mapping notes in `notes`.
- [ ] Generate canonical Dead Wizard Token drafts with IDs such as `esw2_dbg__dead_wizard_token_001`.
- [ ] Apply the DWT quantity rule: token 003 has quantity 2; other imported DWT definitions have quantity 1 unless source text says otherwise.
- [ ] Extract visible DWT VP penalty numbers into `visible.victoryPoints` when explicitly present in source text.
- [ ] Record DWT VP-penalty clarifications in `notes`; do not treat visible DWT VP penalty as the final total DWT score in draft data.
- [ ] Do not inspect source images or infer token behavior beyond source-text-visible facts and agreed import rules.
- [ ] Update generator/parser tests for wizard-property and DWT source-text dialects.
- [ ] `npm run validate:drafts` passes without errors after this issue.
- [ ] `npm run report:import` reports the draft layer completeness expected for Full Draft Import.

## Blocked by

- 01-create-draft-import-harness-with-one-card-and-one-token.md
