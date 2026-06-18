# Implement executable coverage for setup-altering wizard properties

Status: done
Label: done
Type: AFK

## Parent

`.scratch/krutagidon-universal-mechanics/PRD.md`

## What to build

Сделать executable coverage для wizard properties, которые меняют подготовку или базовые стартовые параметры партии. Сюда входят замена стартовой карты, стартовый Главный приз, forced starting player, стартовые жизни и значение жизней при воскрешении. Свойство про фамильяров остается draft/non-executable, пока нет familiar lifecycle.

## Acceptance criteria

- [x] Setup заменяет ровно один стартовый `Знак` на `Палочку-хреналочку` для игрока со свойством.
- [x] Замена использует stable card IDs и не зависит от русского названия как ключа.
- [x] Атаки палочек игрока со свойством получают +1 урон.
- [x] Такие атаки нельзя избежать defense window.
- [x] Свойство не влияет на чужие палочки и не на не-palочка атаки.
- [x] Свойство start-with-main-trophy выдает игроку Главный приз при setup.
- [x] Свойство force-starting-player делает владельца свойства первым игроком детерминированно.
- [x] Стартовые и resurrection lives учитывают property override и loser-status exception.
- [x] Familiar-selection property явно остается non-executable, пока familiar lifecycle не реализован.
- [x] Есть focused tests на setup replacement, trophy/first-player setup, life override, damage modifier и unavoidable behavior.

## Blocked by

- `03-promote-attack-and-defense-mechanics.md`
- `06-add-wizard-property-setup-lifecycle.md`
