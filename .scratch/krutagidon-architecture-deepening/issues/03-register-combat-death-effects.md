Status: ready-for-agent
Label: ready-for-agent
Type: AFK

# Перенести combat и death effects в Effect Runtime registry

## What to build

Перенести `deal_damage`, `attack_damage`, `multi_target_attack` и `mayhem_attack` в Effect Runtime registry как вертикальный срез combat/death.

Срез должен сохранить Target Resolution, Minimal Defense Window, Immediate Death Resolution, DWT gain, resurrection и Basic Trophy Credit. Validation и execution для этих Runtime Effect ID должны сходиться через Effect Runtime Interface.

## Acceptance criteria

- [ ] Combat Runtime Effect ID регистрируются в Effect Runtime registry.
- [ ] Validation поддержанных combat shapes больше не дублирует knowledge отдельно от execution.
- [ ] Direct damage, normal attack, multi-target attack и Mayhem attack сохраняют текущий порядок resolution.
- [ ] Defense Window продолжает работать для normal attacks и не применяется к Mayhem attack иначе, чем сейчас.
- [ ] Death, DWT gain, resurrection и Basic Trophy Credit сохраняют текущие event log entries и scoring consequences.
- [ ] Focused tests покрывают хотя бы один successful path и один invalid shape path через новый registry.

## Blocked by

- `.scratch/krutagidon-architecture-deepening/issues/01-add-power-effect-runtime-registry.md`
