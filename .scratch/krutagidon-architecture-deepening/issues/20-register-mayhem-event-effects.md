Status: ready-for-agent
Label: ready-for-agent
Type: AFK

# Перенести Mega Mayhem life/status effects в Effect Runtime Catalog

## Parent

- `.scratch/krutagidon-architecture-deepening/issues/15-consolidate-effect-runtime-catalog.md`

## What to build

Перенести Mega Mayhem Runtime Effect ID `mega_mayhem_set_life` и `mega_mayhem_each_player_toggle_dingler` в Effect Runtime Catalog.

Срез должен сохранить active-player order, Set Life behavior для каждого игрока и Dingler toggle behavior. Остальные Mayhem/Mega Mayhem event effects выносятся в отдельные задачи, чтобы этот slice оставался agent-sized.

## Acceptance criteria

- [ ] `mega_mayhem_set_life` и `mega_mayhem_each_player_toggle_dingler` регистрируются в Effect Runtime Catalog.
- [ ] Validation отклоняет неподдержанные timing, targetSelector, lifeTotal и Dingler status fields.
- [ ] `mega_mayhem_set_life` сохраняет active-player order и event log для каждого player.
- [ ] `mega_mayhem_each_player_toggle_dingler` сохраняет текущую логику gain/remove Dingler для каждого player.
- [ ] Existing Mayhem tests для этих двух effects продолжают проходить без массовой правки runtime JSON.
- [ ] Focused tests покрывают successful set-life, successful toggle-Dingler и invalid Mega Mayhem shape.

## Blocked by

- `.scratch/krutagidon-architecture-deepening/issues/15-consolidate-effect-runtime-catalog.md`
- `.scratch/krutagidon-architecture-deepening/issues/19-register-life-and-dingler-status-effects.md`
