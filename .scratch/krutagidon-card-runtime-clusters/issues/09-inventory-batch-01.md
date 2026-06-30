Status: Done
Label: done
Type: AFK

# Инвентаризировать mechanics batch 01

## Parent

- `.scratch/krutagidon-card-runtime-clusters/PRD.md`

## What to build

Провести черновую mechanics inventory для первого batch карт из текущего card runtime backlog.

Для каждой карты из списка нужно прочитать draft/source text, выписать candidate primary mechanics, secondary mechanics и явные blockers. Это не финальная кластеризация: одна карта может попасть в несколько candidate buckets, а финальный `clusterId` в `card-cluster-decisions.json` в этом issue не назначается.

## Card IDs

- `esw2_dbg__familiar_001`
- `esw2_dbg__familiar_002`
- `esw2_dbg__familiar_003`
- `esw2_dbg__familiar_004`
- `esw2_dbg__familiar_005`
- `esw2_dbg__familiar_006`
- `esw2_dbg__familiar_007`
- `esw2_dbg__familiar_008`
- `esw2_dbg__familiar_009`
- `esw2_dbg__familiar_010`
- `esw2_dbg__legend_001`
- `esw2_dbg__legend_002`
- `esw2_dbg__legend_003`
- `esw2_dbg__legend_004`
- `esw2_dbg__legend_005`
- `esw2_dbg__legend_006`
- `esw2_dbg__legend_007`
- `esw2_dbg__legend_008`
- `esw2_dbg__legend_009`
- `esw2_dbg__legend_010`
- `esw2_dbg__legend_011`
- `esw2_dbg__legend_012`
- `esw2_dbg__legend_013`
- `esw2_dbg__legend_014`
- `esw2_dbg__legend_015`
- `esw2_dbg__legend_016`

## User stories covered

- 14. Generated runtime cards based on import drafts/source text.
- 15. Block C card implementation deferred until Block A and Block B are finished.

## Acceptance criteria

- [x] Создан или обновлён `.scratch/krutagidon-card-runtime-clusters/inventory/01.md`.
- [x] Inventory file перечисляет все cardId из этого issue.
- [x] Для каждой карты указаны candidate primary mechanics.
- [x] Для каждой карты указаны secondary mechanics, если они видны из текста.
- [x] Для каждой карты указаны blockers или `none`.
- [x] Для каждой карты указано, какие related runtime surfaces стоит проверить позже: wizard properties, Dead Wizard Tokens, special cards, engine gaps или `none/unknown`.
- [x] Inventory явно помечает ambiguous/mixed cards, где главную механику нельзя выбрать без дальнейшего решения.
- [x] Не редактировать `card-cluster-decisions.json`.
- [x] Не редактировать `mechanic-clusters.md`, кроме случаев, когда issue 08 уже задал обязательный inventory reference формат.
- [x] Не реализовывать новые runtime cards.
- [x] `git diff --check` проходит.

## Evidence

- Добавлен `.scratch/krutagidon-card-runtime-clusters/inventory/01.md` с mechanics inventory для всех 26 cardId из issue.
- Добавлен `.scratch/krutagidon-card-runtime-clusters/inventory/AGENTS.md`, потому что `inventory/` стал отдельным DOX-owned planning boundary.
- Родительский `.scratch/krutagidon-card-runtime-clusters/AGENTS.md` обновлён, чтобы индексировать `inventory/`.
- `card-cluster-decisions.json`, `mechanic-clusters.md` и runtime data не менялись.

## Checks

- [x] PowerShell completeness check: `ids=26`, `missing=none`
- [x] `git diff --cached --check`
- [x] `npx lint-staged`
- [x] `npm run typecheck`
- [x] `npm test`

## Blocked by

- `.scratch/krutagidon-card-runtime-clusters/issues/08-create-mechanic-cluster-map-guardrails.md`

## Notes

- Candidate mechanic из inventory не является cluster decision.
- В inventory одна карта может быть в нескольких candidate buckets.
- В финальном `card-cluster-decisions.json` у карты позже должен остаться ровно один основной `clusterId`.
