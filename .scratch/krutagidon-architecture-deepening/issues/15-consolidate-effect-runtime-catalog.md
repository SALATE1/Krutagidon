# Провести tracer-bullet Effect Runtime Catalog для registry-backed effects

Status: Done
Label: ready-for-agent
Type: AFK

## Контекст

Сейчас runtime-эффекты постепенно уходят от разрозненных проверок и legacy-совместимости к registry-backed исполнению. Перед массовым созданием runtime JSON из draft нужен узкий, проверяемый срез Effect Runtime Catalog: единая точка, через которую проходят runtime `effectId`, shape validation и выбор handler.

Эта задача не должна мигрировать все legacy effects. Ее цель - закрепить архитектурный контракт на одном вертикальном срезе, чтобы последующие задачи 16-30 могли добавлять новые эффекты без расползания whitelist/shape/handler логики.

## Предусловия

- Завершены и проверены задачи 01-03 по registry-backed runtime effects.
- В коде уже есть несколько Runtime Effect ID, которые исполняются через registry.

## Что нужно сделать

1. Найти текущие места, где runtime effects:
   - валидируются по `effectId`;
   - проверяются по shape/schema;
   - мапятся на handler;
   - получают fixture-only или legacy compatibility исключения.
2. Ввести или выделить Effect Runtime Catalog / ближайший модуль, который становится общей точкой для registry-backed effects.
3. Подключить к этому каталогу уже реализованные registry-backed effects из задач 01-03.
4. Сохранить временную совместимость для legacy effects, но явно отделить ее от нового registry-backed пути.
5. Добавить focused tests на общий путь каталога.
6. Зафиксировать в issue notes или ближайшей документации правило: новый Runtime Effect ID добавляется через Effect Runtime Catalog, а не через отдельный whitelist.

## Acceptance criteria

- [x] Registry-backed Runtime Effect ID проходят executable data-pack validation через Effect Runtime Catalog или ближайший единый модуль.
- [x] Shape validation для registry-backed effects использует тот же catalog/handler interface, что и execution path.
- [x] Unknown `effectId` продолжает давать понятную validation error.
- [x] Fixture-only effect отклоняется в combat mode, даже если fixture compatibility path временно остается.
- [x] Legacy effects не обязаны быть мигрированы в этой задаче; временный compatibility path явно отделен и помечен TODO/notes.
- [x] Существующее поведение registry-backed effects не меняется; runtime tests проходят без массовых правок JSON.
- [x] Focused tests покрывают:
  - один поддержанный registry-backed effect;
  - один unsupported/unknown effect;
  - один fixture-only effect в combat mode;
  - все три сценария проходят через общий catalog validation path.
- [x] В notes задачи или ближайшем doc зафиксировано правило: новые Runtime Effect ID добавляются через Effect Runtime Catalog, не через отдельный whitelist.

## Не входит

- Массовая миграция всех runtime JSON.
- Реализация всех эффектов из draft.
- Удаление legacy compatibility path.
- Изменение публичного формата data pack без отдельной задачи.
- Переписывание combat engine или registry API вне минимального среза.

## Вертикальный срез

Один registry-backed effect должен пройти полный путь:

`runtime JSON -> executable data-pack validation -> Effect Runtime Catalog -> handler shape contract -> runtime execution`

После этого следующие задачи могут добавлять группы эффектов в каталог независимо и проверяемо.

## Notes

- Реализован `effectRuntimeCatalog` в `src/engine/effect-runtime-registry.ts`; существующий `getEffectRuntimeHandler` теперь берет handler из catalog entry.
- `validateExecutableDataPack` в `src/engine/data.ts` проходит через общий `validateRuntimeEffectDefinition`: combat fixture guard -> Effect Runtime Catalog -> временный legacy compatibility path.
- Legacy compatibility path оставлен отдельным `isLegacyCompatibilityEffectId` / `validateLegacyCompatibilityEffectShape` и помечен TODO для задачи 23.
- Новые Runtime Effect ID нужно добавлять через `effectRuntimeCatalog`, а не через отдельный whitelist в data-pack validation.

## Verification

- `npm test -- tests/validation.test.ts`
- `npm run typecheck`

## Блокеры

- 01-register-core-effect-runtime-handlers
- 02-register-attack-effect-runtime-handlers
- 03-register-mayhem-attack-runtime-handler

## Зависимые задачи

- 16-register-defense-branch-effects
- 17-register-economy-and-draw-effects
- 18-register-reveal-play-top-and-wild-magic-effects
- 19-register-life-and-dingler-status-effects
- 20-register-mayhem-event-effects
- 21-register-wizard-property-setup-effects
- 22-register-wizard-property-modifier-effects
- 23-remove-legacy-effect-runtime-compatibility-path
- 24-register-mega-mayhem-destroy-top-main-deck-effect
- 25-register-mayhem-discard-top-deck-destroy-effects
- 26-register-mayhem-hand-redraw-choice-effect
- 27-register-mayhem-discard-deck-destroy-effect
- 28-register-topdeck-gained-card-effect
- 29-register-temporary-hand-limit-effect
- 30-register-wand-attack-replacement-effects
