Status: ready-for-agent
Label: ready-for-agent
Type: AFK

# Перенести Mayhem discard-deck destroy effect в Effect Runtime Catalog

## Parent

- `.scratch/krutagidon-architecture-deepening/issues/15-consolidate-effect-runtime-catalog.md`

## What to build

Перенести Runtime Effect ID `mayhem_each_player_discard_deck_then_destroy_from_discard` в Effect Runtime Catalog.

Срез должен сохранить текущий flow: каждый игрок в active-player order сбрасывает deck в discard, затем уничтожается выбранная карта из discard через общий destroy destination path.

## Acceptance criteria

- [ ] `mayhem_each_player_discard_deck_then_destroy_from_discard` регистрируется в Effect Runtime Catalog.
- [ ] Validation отклоняет неподдержанные timing и targetSelector.
- [ ] Effect сохраняет active-player order.
- [ ] Deck-to-discard movement сохраняет ownerId и zones.
- [ ] Destroy-from-discard использует текущий destroy destination path.
- [ ] Focused tests покрывают successful discard-deck/destroy path и invalid shape.

## Blocked by

- `.scratch/krutagidon-architecture-deepening/issues/15-consolidate-effect-runtime-catalog.md`
