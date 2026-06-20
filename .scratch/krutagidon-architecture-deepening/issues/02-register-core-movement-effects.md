Status: ready-for-agent
Label: ready-for-agent
Type: AFK

# Перенести core movement effects в Effect Runtime registry

## What to build

Перенести `gain_card`, `discard_card` и `destroy_card` в Effect Runtime registry как один вертикальный срез.

Срез должен сохранить существующие правила движения карт: выбор legal target, Empty Choice Skip, destination для gain, destroy destination для обычных карт, Wild Magic, Limp Wand, Mayhem и Mega Mayhem. Validation и execution должны опираться на один Effect Runtime Interface.

## Acceptance criteria

- [ ] `gain_card`, `discard_card` и `destroy_card` регистрируются как Runtime Effect ID в Effect Runtime registry.
- [ ] Validation формы этих эффектов больше не живет как независимый список, который надо синхронизировать вручную с execution.
- [ ] `gain_card` сохраняет текущие гарантии ownerId, destination, market chips и Wizard Property replacement.
- [ ] `discard_card` сохраняет текущий Empty Choice Skip и перемещение выбранной карты в discard.
- [ ] `destroy_card` сохраняет текущую маршрутизацию destination для обычных карт, Wild Magic, Limp Wand, Mayhem и Mega Mayhem.
- [ ] Existing focused movement tests продолжают проходить или обновлены на новый Effect Runtime Interface без изменения поведения.

## Blocked by

- `.scratch/krutagidon-architecture-deepening/issues/01-add-power-effect-runtime-registry.md`
