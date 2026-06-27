Status: ready-for-agent
Label: ready-for-agent
Type: AFK

# Перенести Mayhem hand-redraw choice effect в Effect Runtime Catalog

## Parent

- `.scratch/krutagidon-architecture-deepening/issues/15-consolidate-effect-runtime-catalog.md`

## What to build

Перенести Runtime Effect ID `mayhem_each_player_choose_discard_hand_draw_or_take_damage` в Effect Runtime Catalog.

Срез должен сохранить текущую поддержанную модель: каждый игрок в active-player order сбрасывает руку и добирает карты по существующему behavior. Если runtime data содержит альтернативную ветку damage, она должна валидироваться или явно оставаться unsupported в рамках текущего поддержанного среза.

## Acceptance criteria

- [ ] `mayhem_each_player_choose_discard_hand_draw_or_take_damage` регистрируется в Effect Runtime Catalog.
- [ ] Validation описывает текущий supported shape и не принимает неподдержанные варианты молча.
- [ ] Effect сохраняет active-player order.
- [ ] Hand discard и draw behavior сохраняют текущие zones и event log.
- [ ] Unsupported branch shape дает понятную validation/runtime ошибку, а не silent no-op.
- [ ] Focused tests покрывают supported hand-redraw path и invalid/unsupported branch shape.

## Blocked by

- `.scratch/krutagidon-architecture-deepening/issues/15-consolidate-effect-runtime-catalog.md`
