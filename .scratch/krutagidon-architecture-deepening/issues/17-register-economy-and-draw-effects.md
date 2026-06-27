Status: ready-for-agent
Label: ready-for-agent
Type: AFK

# Перенести economy и draw effects в Effect Runtime Catalog

## Parent

- `.scratch/krutagidon-architecture-deepening/issues/15-consolidate-effect-runtime-catalog.md`

## What to build

Перенести economy/draw Runtime Effect ID `gain_chips`, `gain_chips_per_player_with_status` и `draw_cards` в Effect Runtime Catalog.

Срез должен сохранить текущие chip deltas, draw behavior, shuffle discard into deck behavior и typed event log. Это не меняет strategy или покупку карт; задача только закрывает validation/execution path для уже поддержанных простых economy effects.

## Acceptance criteria

- [ ] `gain_chips`, `gain_chips_per_player_with_status` и `draw_cards` регистрируются в Effect Runtime Catalog.
- [ ] Shape validation для этих effects больше не живет как отдельный whitelist в executable data-pack validation.
- [ ] `gain_chips` сохраняет typed event log и не принимает нечисловой или неположительный amount.
- [ ] `gain_chips_per_player_with_status` сохраняет Dingler-count behavior и отклоняет неподдержанный status.
- [ ] `draw_cards` сохраняет текущий draw/shuffle behavior и event log amount.
- [ ] Focused tests покрывают successful chip gain, status-based chip gain, draw, и invalid shape для одного из effects.

## Blocked by

- `.scratch/krutagidon-architecture-deepening/issues/15-consolidate-effect-runtime-catalog.md`
