Status: needs-info
Label: needs-info
Category: enhancement
Type: HITL

# Вернуться к in-memory Runtime Data Adapter при появлении production consumer

## Parent

- `.scratch/krutagidon-architecture-deepening/issues/10-decide-in-memory-runtime-data-adapter.md`

## What to build

Не начинать production in-memory Runtime Data Adapter без реального production consumer.

Вернуться к архитектурному решению, когда появится второй runtime data source вне тестов: UI/editor, sandbox, strategy runner, DB/API-backed runtime data или другой сценарий, который должен создавать/provide runtime data без filesystem loader.

## Acceptance criteria

- [ ] Назван конкретный production consumer вне tests.
- [ ] Описано, почему `initializeGame({ dataPack })` недостаточно для этого consumer.
- [ ] Описан контракт adapter: вход, выход, ownership validation/errors.
- [ ] Решено, должен ли adapter жить в production code, tests helpers или отдельном runtime-data module.
- [ ] Если adapter нужен, создан AFK follow-up с узким vertical slice.

## Blocked by

- Нужен конкретный production consumer вне tests.
