Status: ready-for-agent
Label: ready-for-agent
Type: AFK

# Добавить Event Recorder deltas для power и chips

## What to build

Расширить Event Recorder на focused before/after deltas для изменений power и chips.

Срез должен покрыть эффекты и правила, которые меняют turn power или player chips, включая получение chips через эффекты и market chip markers. Single-Game Debug Trace должен показывать изменение значения без чтения raw state.

## Acceptance criteria

- [ ] Event Recorder умеет записывать before/after для turn power.
- [ ] Event Recorder умеет записывать before/after для player chips.
- [ ] `add_power`, `gain_chips` и получение market chips используют recorder для соответствующих deltas.
- [ ] Single-Game Debug Trace отображает эти deltas в readable game terms.
- [ ] Existing event log consumers не ломаются или получают совместимый migration path.
- [ ] Focused tests покрывают power delta и chips delta.

## Blocked by

- `.scratch/krutagidon-architecture-deepening/issues/05-add-event-recorder-action-turn.md`
