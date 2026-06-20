Status: ready-for-agent
Label: ready-for-agent
Category: enhancement
Type: AFK

# Ввести tracer-bullet helper для active-hand fixture card

## Parent

- `.scratch/krutagidon-architecture-deepening/issues/10-decide-in-memory-runtime-data-adapter.md`

## What to build

Сделать первый вертикальный test-fixture cleanup для самого частого post-setup card fixture path: тест создаёт fixture card definition, регистрирует его в `state.cardDefinitions` и кладёт card instance в руку active player.

Это не production Runtime Data Adapter. Цель среза - оставить post-setup sculpting явным, но спрятать низкоуровневую регистрацию definition за доменным test helper для active-hand scenario.

Known current examples:

- `tests/action-loop.test.ts`: `addFixtureCardToActiveHand`.
- `tests/effective-values.test.ts`: `addFixtureStatusCardToActiveHand`.
- Related future slices may cover market, deck, permanents, defense cards and mayhem flow fixtures separately.

## Acceptance criteria

- [ ] Через TDD добавлен минимальный tests-only helper или локальная helper-функция для active-hand fixture card path.
- [ ] `tests/action-loop.test.ts` `addFixtureCardToActiveHand` переведён с ручного `state.cardDefinitions = new Map(...)` на helper.
- [ ] Если это не раздувает срез, `tests/effective-values.test.ts` `addFixtureStatusCardToActiveHand` тоже переведён на тот же helper; иначе создан отдельный follow-up.
- [ ] Helper не попадает в production API и не называется Runtime Data Adapter.
- [ ] Тесты продолжают проверять поведение через public engine APIs, а не внутренние детали helper.
- [ ] Focused affected tests проходят.
- [ ] `git diff --check` проходит.

## Blocked by

- `.scratch/krutagidon-architecture-deepening/issues/10-decide-in-memory-runtime-data-adapter.md`
