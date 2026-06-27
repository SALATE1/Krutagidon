Status: ready-for-agent
Label: ready-for-agent
Type: AFK

# Перенести topdeck_gained_card в Effect Runtime Catalog

## Parent

- `.scratch/krutagidon-architecture-deepening/issues/15-consolidate-effect-runtime-catalog.md`

## What to build

Перенести wizard-property Runtime Effect ID `topdeck_gained_card` в Effect Runtime Catalog.

Срез должен сохранить replacement destination для gained cards: когда подходящее wizard property активно, gained card уходит на верх колоды вместо обычного destination. Effect остается wizard-property replacement, а не обычным on-play effect.

## Acceptance criteria

- [ ] `topdeck_gained_card` валидируется через Effect Runtime Catalog.
- [ ] Validation отклоняет unsupported timing, destination или card filters.
- [ ] Gained card replacement destination сохраняет текущий deckTop behavior.
- [ ] Card ownership и event log для gained card сохраняются.
- [ ] Existing gain-card replacement tests продолжают проходить.
- [ ] Focused tests покрывают successful replacement и invalid shape.

## Blocked by

- `.scratch/krutagidon-architecture-deepening/issues/15-consolidate-effect-runtime-catalog.md`
