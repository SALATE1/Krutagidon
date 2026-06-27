Status: ready-for-agent
Label: ready-for-agent
Type: AFK

# Перенести Defense Branch effects в Effect Runtime Catalog

## Parent

- `.scratch/krutagidon-architecture-deepening/issues/15-consolidate-effect-runtime-catalog.md`

## What to build

Перенести defense-specific Runtime Effect ID `avoid_attack` в Effect Runtime Catalog как вертикальный срез защиты.

Срез должен сохранить Minimal Defense Window: legal defense из руки выбирается только когда можно оплатить Defense Cost, defense card уходит в текущий destination, а `branchEffects` исполняются через общий Effect Runtime path. Поведение redirect defenses остается неподдержанным и должно явно отклоняться validation.

## Acceptance criteria

- [ ] `avoid_attack` проходит executable data-pack validation через Effect Runtime Catalog.
- [ ] Shape validation отклоняет неподдержанные defense destinations, включая redirect, с понятной ошибкой.
- [ ] Defense Cost validation и legal-choice behavior сохраняют текущие правила discard other hand card, spend chips и nonlethal life.
- [ ] `branchEffects` defense-карты исполняются через общий Effect Runtime path без отдельного bypass.
- [ ] Existing tests для normal attack defense, topdeck defense и defense branch damage/power продолжают проходить.
- [ ] Focused test покрывает invalid redirect defense shape через catalog validation.

## Blocked by

- `.scratch/krutagidon-architecture-deepening/issues/15-consolidate-effect-runtime-catalog.md`
