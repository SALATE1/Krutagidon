Status: ready-for-agent
Label: ready-for-agent
Type: AFK

# Перенести Dingler scoring penalty в Effective Value

## What to build

Углубить Effective Value Module, переместив Dingler VP penalty из ad hoc scoring logic в общий Effective Value path.

Срез должен сохранить текущее поведение Dingler: active Dingler получает -5 VP на scoring, removal убирает penalty, max life behavior не меняется. Изменение должно доказать, что scoring modifiers могут жить рядом с остальными Effective Value modifiers.

## Acceptance criteria

- [ ] Dingler VP penalty считается через Effective Value или единый modifier path рядом с ним.
- [ ] `scoreGame` больше не содержит отдельную hardcoded ветку только для Dingler VP penalty.
- [ ] Existing Dingler scoring behavior не меняется.
- [ ] Removing Dingler по-прежнему убирает scoring penalty.
- [ ] Tests покрывают presence и absence Dingler scoring modifier.
- [ ] Base Runtime Data и Token Definitions не мутируются при scoring.

## Blocked by

- `.scratch/krutagidon-post-import-mechanics/issues/02-complete-dingler-mechanic.md`
- `.scratch/krutagidon-simulation-platform/issues/13-apply-controlled-object-modifiers-through-effective-values.md`
