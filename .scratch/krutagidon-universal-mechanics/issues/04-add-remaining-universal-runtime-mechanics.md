# Add remaining universal runtime mechanics

Status: done
Label: done
Type: AFK

## Parent

`.scratch/krutagidon-universal-mechanics/PRD.md`

## What to build

Добавить оставшиеся универсальные механики, которые нужны до широкого импорта карт: `set_life`, activation для контролируемых постоянок, розыгрыш шальной магии, market chip marker и executable Mayhem/MegaMayhem hook.

## Acceptance criteria

- [x] `set_life` отдельно устанавливает текущее значение жизней и не смешивается с `heal`.
- [x] Контролируемые постоянки могут иметь activation action один раз за ход.
- [x] Шальная магия при розыгрыше использует first-legal выбор между `+2 мощи` и розыгрышем верхней карты колоды врага.
- [x] Market chip marker двигает чипсины при пополнении рынка по canon.
- [x] Беспредел/мегабеспредел при выходе в рынок исполняет mapped executable effects.
- [x] Неподдержанный Mayhem/MegaMayhem effect явно проваливает executable validation или run, а не становится silent no-op.

## Blocked by

- `01-promote-first-runtime-mechanic-and-fixture-validation-gate.md`
- `02-promote-core-effect-mechanics.md`
