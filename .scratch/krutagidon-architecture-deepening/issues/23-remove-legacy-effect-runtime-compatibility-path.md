Status: ready-for-agent
Label: ready-for-agent
Type: AFK

# Удалить legacy compatibility path Effect Runtime после миграции effects

## Parent

- `.scratch/krutagidon-architecture-deepening/issues/15-consolidate-effect-runtime-catalog.md`

## What to build

Удалить legacy compatibility path для supported Runtime Effect ID после того, как предыдущие slices перенесли все текущие supported effects в Effect Runtime Catalog.

Срез должен оставить один source of truth: supported-effect detection, combat/fixture mode checks, shape validation и runtime execution идут через catalog. Если какие-то effect IDs намеренно остаются unsupported или fixture-only, это должно быть явно выражено в catalog, а не в отдельном whitelist.

## Acceptance criteria

- [ ] В executable data-pack validation нет отдельного supported-effect whitelist, дублирующего Effect Runtime Catalog.
- [ ] В runtime execution нет silent no-op для неизвестного supported effect: unsupported effect дает явную ошибку в правильном месте.
- [ ] Combat/fixture mode checks живут в catalog или рядом с ним как часть того же interface.
- [ ] Все текущие playable runtime data проходят validation через catalog.
- [ ] Unsupported/partial runtime definitions по-прежнему не становятся playable случайно.
- [ ] `npm run typecheck`, `npm test`, `npm run validate:drafts`, `npm run report:runtime-coverage` проходят или известные import/runtime coverage gaps явно описаны.
- [ ] Issue notes фиксируют новый contributor rule: Runtime Effect ID нельзя добавлять мимо Effect Runtime Catalog.

## Blocked by

- `.scratch/krutagidon-architecture-deepening/issues/16-register-defense-branch-effects.md`
- `.scratch/krutagidon-architecture-deepening/issues/17-register-economy-and-draw-effects.md`
- `.scratch/krutagidon-architecture-deepening/issues/18-register-reveal-play-top-and-wild-magic-effects.md`
- `.scratch/krutagidon-architecture-deepening/issues/19-register-life-and-dingler-status-effects.md`
- `.scratch/krutagidon-architecture-deepening/issues/20-register-mayhem-event-effects.md`
- `.scratch/krutagidon-architecture-deepening/issues/21-register-wizard-property-setup-effects.md`
- `.scratch/krutagidon-architecture-deepening/issues/22-register-wizard-property-modifier-effects.md`
- `.scratch/krutagidon-architecture-deepening/issues/24-register-mega-mayhem-destroy-top-main-deck-effect.md`
- `.scratch/krutagidon-architecture-deepening/issues/25-register-mayhem-discard-top-deck-destroy-effects.md`
- `.scratch/krutagidon-architecture-deepening/issues/26-register-mayhem-hand-redraw-choice-effect.md`
- `.scratch/krutagidon-architecture-deepening/issues/27-register-mayhem-discard-deck-destroy-effect.md`
- `.scratch/krutagidon-architecture-deepening/issues/28-register-topdeck-gained-card-effect.md`
- `.scratch/krutagidon-architecture-deepening/issues/29-register-temporary-hand-limit-effect.md`
- `.scratch/krutagidon-architecture-deepening/issues/30-register-wand-attack-replacement-effects.md`
