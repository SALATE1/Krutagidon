Status: ready-for-agent
Label: ready-for-agent
Category: enhancement
Type: AFK

# Ввести tracer-bullet helper для замены wizard property fixture

## Parent

- `.scratch/krutagidon-architecture-deepening/issues/10-decide-in-memory-runtime-data-adapter.md`

## What to build

Сделать вертикальный cleanup для одного post-setup wizard-property fixture path: тест заменяет behavior уже выбранного wizard property token после `initializeGame`.

Это остаётся post-setup state fixture, потому что action-loop тесты проверяют конкретные состояния игрока после setup, а не загрузку data pack. Срез должен сделать этот path доменно явным, не вводя Runtime Data Adapter.

Known current examples:

- `tests/action-loop.test.ts`: `replaceFirstWizardProperty`.
- Связанные сценарии: chip activation, on-play type chips, ongoing chip modifiers, topdeck gained card, temporary hand limit.

## Acceptance criteria

- [ ] Через TDD добавлен минимальный tests-only helper или локальная helper-функция для замены wizard property fixture behavior после setup.
- [ ] Ручной паттерн `state.tokenDefinitions = new Map(...)` скрыт за helper с доменным именем.
- [ ] Helper явно отражает, что это post-setup fixture sculpting, а не Runtime Data Adapter.
- [ ] `replaceFirstWizardProperty` или его ближайший replacement переведён на helper без изменения поведения сценариев.
- [ ] Focused affected tests проходят.
- [ ] `git diff --check` проходит.

## Blocked by

- `.scratch/krutagidon-architecture-deepening/issues/10-decide-in-memory-runtime-data-adapter.md`
