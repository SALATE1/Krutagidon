Status: ready-for-agent

# Import Starter and Special Drafts

## What to build

Generate canonical drafts for starter cards and special card stacks. Starter source text should use canonical starter IDs, while unique special stack objects should use explicit singleton IDs for clarity.

## Acceptance criteria

- [ ] Rename starter source text files to canonical `esw2_dbg__starter_###` names and update headings/source references.
- [ ] Generate starter `cardDraft` JSON with `visible.cardKind = "starter"` and source-text-derived visible facts.
- [ ] Rename special source text to canonical singleton names where appropriate: `esw2_dbg__limp_wand` and `esw2_dbg__wild_magic`.
- [ ] Generate special `cardDraft` JSON for Limp Wand and Wild Magic using singleton special IDs.
- [ ] For Limp Wand, generate `visible.cardKind = "limpWand"`, empty `visible.cardTypes`, and visible VP from source text.
- [ ] For Wild Magic, generate `visible.cardKind = "wildMagic"`, empty `visible.cardTypes`, and visible cost from source text.
- [ ] Preserve clarifications as mapping notes in `notes`.
- [ ] Include `composition.quantity` from source text.
- [ ] Update generator/parser tests for starter and special source-text dialects.
- [ ] Focused draft validation/reporting for starter and special cards passes without group-specific errors.

## Blocked by

- 01-create-draft-import-harness-with-one-card-and-one-token.md
