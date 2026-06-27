Status: ready-for-agent
Label: ready-for-agent
Type: AFK

# Перенести Wand Attack replacement effects в Effect Runtime Catalog

## Parent

- `.scratch/krutagidon-architecture-deepening/issues/15-consolidate-effect-runtime-catalog.md`

## What to build

Перенести wizard-property Runtime Effect ID `modify_owned_wand_attack_damage` и `prevent_defense_against_owned_wand_attacks` в Effect Runtime Catalog.

Срез должен сохранить Wand Attack Card replacement path: effects применяются только к owned wand attacks, добавляют damage bonus и/или делают attack unavoidable. Borrowed wands и non-wand attacks не должны получать эти modifiers.

## Acceptance criteria

- [ ] `modify_owned_wand_attack_damage` и `prevent_defense_against_owned_wand_attacks` валидируются через Effect Runtime Catalog.
- [ ] Validation отклоняет invalid amount, timing, cardDefinitionIds/cardTags и unsupported target fields.
- [ ] Owned Wand Attack Card получает текущий damage bonus и unavoidable behavior.
- [ ] Borrowed wand и non-wand attack не получают wizard-property replacement.
- [ ] Existing Wand Attack Card tests продолжают проходить.
- [ ] Focused tests покрывают owner-only success path и invalid replacement shape.

## Blocked by

- `.scratch/krutagidon-architecture-deepening/issues/15-consolidate-effect-runtime-catalog.md`
