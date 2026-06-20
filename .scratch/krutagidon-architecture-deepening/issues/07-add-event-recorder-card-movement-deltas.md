Status: ready-for-agent
Label: ready-for-agent
Type: AFK

# Добавить Event Recorder deltas для движения карт

## What to build

Расширить Event Recorder на focused card movement deltas.

Срез должен покрыть buy/gain/discard/destroy/play movement так, чтобы Single-Game Debug Trace мог показывать source zone, destination zone, card instance и owner changes без угадывания по optional fields.

## Acceptance criteria

- [ ] Event Recorder умеет записывать source zone и destination zone для движения карты.
- [ ] Buy и gain paths записывают movement event через recorder.
- [ ] Discard и destroy effects записывают movement event через recorder.
- [ ] Play-card path записывает вход карты в playedThisTurn или permanents.
- [ ] Single-Game Debug Trace показывает движение карты в game terms.
- [ ] Focused tests покрывают минимум buy, gain и destroy movement.

## Blocked by

- `.scratch/krutagidon-architecture-deepening/issues/05-add-event-recorder-action-turn.md`
