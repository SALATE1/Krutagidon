Status: ready-for-agent
Label: ready-for-agent
Type: AFK

# Разрешить initializeGame принимать готовый LoadedDataPack

## What to build

Добавить осторожный первый срез разделения Runtime Data и filesystem Adapter.

`initializeGame` должен по-прежнему работать с `rootDir` и `dataPackPath` для CLI, но также принимать готовый `LoadedDataPack`. Это позволит engine tests использовать in-memory Runtime Data без обязательного чтения filesystem и без прямой мутации GameState после setup.

## Acceptance criteria

- [ ] `initializeGame` принимает готовый `LoadedDataPack` как альтернативу `rootDir`/`dataPackPath`.
- [ ] Существующие CLI и simulation runners продолжают использовать filesystem Adapter без изменения user-facing behavior.
- [ ] Existing tests с `rootDir` продолжают проходить.
- [ ] Добавлен focused test, который вызывает `initializeGame` с готовым `LoadedDataPack`.
- [ ] Минимум один fixture-heavy test переведен с прямой мутации loaded definitions после setup на подготовку data pack до setup.
- [ ] TypeScript Interface не допускает одновременную неоднозначную конфигурацию, если это можно выразить без большого refactor.

## Blocked by

None - can start immediately
