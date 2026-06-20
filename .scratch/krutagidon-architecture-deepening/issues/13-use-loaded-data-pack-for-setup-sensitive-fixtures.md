Status: ready-for-agent
Label: ready-for-agent
Category: enhancement
Type: AFK

# Проверить один setup-sensitive fixture path через LoadedDataPack

## Parent

- `.scratch/krutagidon-architecture-deepening/issues/10-decide-in-memory-runtime-data-adapter.md`

## What to build

Проверить один setup-sensitive fixture path, где изменённые card/token definitions должны быть видны самим setup-правилам, и использовать подготовку `LoadedDataPack` до `initializeGame`.

Этот срез отличает setup-sensitive fixtures от post-setup action fixtures. Если setup не должен видеть fixture definition, тест не нужно насильно переводить на `LoadedDataPack`; результатом среза может быть короткая фиксация, что оставшиеся найденные mutations являются post-setup fixtures и должны идти через issues 11/12.

Known current examples:

- Уже переведённый пример: `tests/effective-values.test.ts` с treasure modifier data pack.
- Подозрительные места для проверки: тесты, которые меняют wizard property behavior, max life, scoring modifiers или setup effects после `initializeGame`.

## Acceptance criteria

- [ ] Через TDD добавлен или расширен focused test, если найден setup-sensitive fixture, который должен идти через `initializeGame({ dataPack, seed })`.
- [ ] Найден один оставшийся setup-sensitive тест и переведён на подготовку `LoadedDataPack`, либо в issue/comment явно зафиксировано, что оставшиеся mutations являются post-setup fixtures.
- [ ] Post-setup action-loop fixtures не переводятся на `LoadedDataPack` без причины.
- [ ] Production loader behavior не меняется.
- [ ] Focused affected tests проходят.
- [ ] `git diff --check` проходит.

## Blocked by

- `.scratch/krutagidon-architecture-deepening/issues/10-decide-in-memory-runtime-data-adapter.md`
