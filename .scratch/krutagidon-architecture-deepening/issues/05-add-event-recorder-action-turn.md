Status: ready-for-agent
Label: ready-for-agent
Type: AFK

# Добавить Event Recorder для botActionSelected и номера хода

## What to build

Добавить первый вертикальный срез Event Recorder для события выбора действия ботом.

Срез должен перестать писать это событие как свободный `eventLog.push` с потерей деталей. Event Recorder должен записывать typed event с playerId, номером хода и выбранным action identity. Single-Game Debug Trace должен использовать эти данные и перестать печатать `Turn ?` для этого пути.

## Acceptance criteria

- [ ] Событие выбора действия записывается через Event Recorder.
- [ ] Событие содержит номер хода.
- [ ] Событие содержит identity выбранного action без раскрытия приватных данных.
- [ ] Single-Game Debug Trace показывает номер хода для этого события.
- [ ] Existing debug trace tests обновлены или расширены на новый формат.
- [ ] Остальные event types пока могут оставаться на старом пути, если этот срез не требует их изменения.

## Blocked by

- `.scratch/krutagidon-post-import-mechanics/issues/04-design-single-game-debug-trace.md`
