Status: Done
Label: done
Type: AFK

# Удалить non-special runtime cards и очистить normal compositions

## Parent

- `.scratch/krutagidon-card-runtime-clusters/PRD.md`

## What to build

Удалить старые non-special runtime card JSON как источник истины для нового card-runtime workflow и очистить current normal card compositions от ссылок на удалённые card IDs.

После этого `data/cards/main`, `data/cards/legend`, `data/cards/starter` и `data/cards/familiar` не должны содержать старые mappings. Симуляция остаётся runnable через incomplete current runtime pack, а большинство card drafts ожидаемо становятся missing runtime backlog.

Этот issue не решает судьбу special cards и не меняет special stack entries, кроме случаев, когда они ошибочно ссылаются на удалённые non-special cards.

## User stories covered

- 2. Old runtime card JSON removed from runtime truth.
- 4. Missing card runtime is normal backlog.
- 5. Blocked cards kept out of runtime JSON.
- 13. Invalid runtime/composition references are detected.
- 14. Future generated runtime cards are based on drafts/source text.

## Acceptance criteria

- [x] Старые runtime card JSON удалены из `data/cards/main`, `data/cards/legend`, `data/cards/starter`, `data/cards/familiar`.
- [x] Старые runtime JSON не перенесены как источник будущего mapping.
- [x] Current main, legend, starter и familiar compositions не ссылаются на удалённые card IDs.
- [x] Current manifest продолжает ссылаться на current composition files из issue 01; этот issue чистит entries, а не удаляет manifest sections.
- [x] Empty normal compositions считаются допустимым incomplete baseline.
- [x] Current runtime pack загружается без missing card definition errors.
- [x] Initialization/simulation smoke работает с неполным или пустым card pack.
- [x] Runtime coverage/reporting может показывать удалённые cards как missing runtime; это описано как ожидаемый baseline.
- [x] `git diff --check` проходит.
- [x] `npm run typecheck` проходит.
- [x] Focused setup/data-pack tests проходят.

## Blocked by

- `.scratch/krutagidon-card-runtime-clusters/issues/01-rebaseline-default-runtime-pack.md`
- `.scratch/krutagidon-card-runtime-clusters/issues/02-support-incomplete-full-only-setup.md`

## Notes

- Старые supported и partial non-special runtime card JSON не различать как разные категории. Для нового процесса они одинаково не являются source of truth.
- Не трогать `data/cards/special/esw2_dbg__wild_magic.json` и `data/cards/special/esw2_dbg__limp_wand.json` в этом issue.
- Не реализовывать новые карты в этом issue.

## Implementation notes

- `current-runtime` оставлен special-only baseline: normal `data/cards/**` очищены, а current `main/legend/starter/familiar` compositions оставлены на своих путях, но с пустыми `entries`.
- Для широких behavior/simulation suite добавлен test-only pack `tests/fixtures/playable-runtime-data-pack.json`, чтобы механики продолжали проверяться отдельно от incomplete baseline.
- `replace_starting_card` в setup теперь silently skip'ается для `incomplete-full-only`, если replacement surface отсутствует в current runtime.

## Verification

- `npm run typecheck`
- `npm test -- tests/setup.test.ts`
- `npm test`
- `npm run report:runtime-coverage`
- `git diff --check`
