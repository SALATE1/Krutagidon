Status: ready-for-agent
Label: ready-for-agent
Type: AFK

# Перенести wizard-property setup effects в Effect Runtime Catalog

## Parent

- `.scratch/krutagidon-architecture-deepening/issues/15-consolidate-effect-runtime-catalog.md`

## What to build

Перенести wizard-property setup Runtime Effect ID в Effect Runtime Catalog: `replace_starting_card`, `start_with_basic_trophy`, `force_starting_player`, `set_starting_life_total` и `set_resurrection_life_total`.

Срез должен сохранить deterministic setup behavior: стартовые замены карт, стартовый Basic Trophy, forced starting player, стартовую жизнь и resurrection life replacement. Эти effects остаются wizard-property setup semantics, а не обычными on-play card effects.

## Acceptance criteria

- [ ] Setup Runtime Effect ID для wizard properties валидируются через Effect Runtime Catalog.
- [ ] Validation отклоняет invalid/missing card IDs, player selectors или life totals с понятными ошибками.
- [ ] `replace_starting_card` сохраняет текущий starter replacement behavior и не ломает card instance ownership.
- [ ] `start_with_basic_trophy` сохраняет стартовый Trophy ownership.
- [ ] `force_starting_player`, `set_starting_life_total` и `set_resurrection_life_total` сохраняют deterministic setup behavior.
- [ ] Focused setup tests покрывают хотя бы одну успешную setup property и один invalid setup effect shape.

## Blocked by

- `.scratch/krutagidon-architecture-deepening/issues/15-consolidate-effect-runtime-catalog.md`
