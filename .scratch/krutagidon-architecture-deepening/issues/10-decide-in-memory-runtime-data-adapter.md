Status: ready-for-human
Label: ready-for-human
Type: HITL

# Решить, нужен ли полноценный in-memory Runtime Data Adapter

## What to build

Принять архитектурное решение после того, как `initializeGame` научится принимать готовый `LoadedDataPack`.

Нужно решить, достаточно ли этого Interface для tests, или проекту нужен полноценный in-memory Runtime Data Adapter с helper API для сборки маленьких executable data packs. Решение должно учитывать правило: один Adapter = гипотетический Seam, два Adapter = реальный Seam.

## Acceptance criteria

- [ ] Проверены тесты, которые выиграли или не выиграли от передачи готового `LoadedDataPack`.
- [ ] Принято решение: не делать отдельный Adapter сейчас, сделать минимальный test helper или сделать полноценный in-memory Adapter.
- [ ] Если отдельный Adapter не нужен, причина записана в issue comment или ADR.
- [ ] Если Adapter нужен, создан follow-up AFK issue с конкретным вертикальным срезом.
- [ ] Решение не требует dependency upgrades или изменения package manager.

## Blocked by

- `.scratch/krutagidon-architecture-deepening/issues/09-allow-initialize-game-loaded-data-pack.md`
