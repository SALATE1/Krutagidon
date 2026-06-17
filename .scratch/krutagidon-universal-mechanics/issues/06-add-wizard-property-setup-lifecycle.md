# Add wizard property setup lifecycle

Status: done
Label: ready-for-agent
Type: AFK

## Parent

`.scratch/krutagidon-universal-mechanics/PRD.md`

## What to build

Научить setup загружать набор из 10 wizard property drafts, выдавать игрокам стартовое свойство и хранить его как controlled starting object. Эффекты свойств могут оставаться non-executable, пока их mechanic coverage не реализован.

## Acceptance criteria

- [x] Data pack может ссылаться на набор wizard properties из 10 draft definitions.
- [x] Setup может детерминированно назначить свойство игроку через текущий first-legal/fallback подход.
- [x] Назначенное свойство доступно как controlled object для модификаторов и triggers.
- [x] Неисполняемые эффекты свойства не выполняются молча.
- [x] Есть focused tests на загрузку, назначение и controlled-object видимость свойства.

## Blocked by

- `05-add-wizard-property-json-schema-and-drafts.md`
