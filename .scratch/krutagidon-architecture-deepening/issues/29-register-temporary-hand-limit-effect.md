Status: Done
Label: done
Type: AFK

# Перенести temporary hand-limit effect в Effect Runtime Catalog

## Parent

- `.scratch/krutagidon-architecture-deepening/issues/15-consolidate-effect-runtime-catalog.md`

## What to build

Перенести wizard-property Runtime Effect ID `temporary_hand_limit_by_gained_card_type` в Effect Runtime Catalog.

Срез должен сохранить текущий temporary hand-limit behavior на end-turn cleanup после gained card type. Effect остается wizard-property modifier/replacement, а не обычным on-play card effect.

## Acceptance criteria

- [x] `temporary_hand_limit_by_gained_card_type` валидируется через Effect Runtime Catalog.
- [x] Validation отклоняет unsupported timing, card type filters и invalid hand limit values.
- [x] End-turn hand limit behavior сохраняет текущий deterministic discard/cleanup path.
- [x] Effect применяется только в текущем поддержанном gained-card context.
- [x] Existing temporary hand-limit tests продолжают проходить.
- [x] Focused tests покрывают successful hand-limit path и invalid shape.

## Blocked by

- `.scratch/krutagidon-architecture-deepening/issues/15-consolidate-effect-runtime-catalog.md`

## Evidence

- `npm test -- tests/validation.test.ts`
- `npm test -- tests/action-loop.test.ts`
- `npm run typecheck`
- `npm test`
