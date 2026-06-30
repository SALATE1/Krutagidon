# AGENTS.md

## Purpose

This folder contains draft mechanics inventories for card runtime cluster planning batches.

## Ownership

- Owns `*.md` inventory files that summarize candidate mechanics, secondary mechanics, blockers, and related runtime surfaces for named card batches.
- Parent `.scratch/krutagidon-card-runtime-clusters/AGENTS.md` owns manual decisions, mechanic cluster meanings, generated matrix workflow, and issue files.

## Local Contracts

- Inventory notes are planning evidence, not final cluster decisions.
- Do not assign `clusterId` values in `card-cluster-decisions.json` from inventory files without a separate issue.
- Do not duplicate generated matrix tables here.
- Base entries on current canonical draft JSON and `source.text` files.

## Work Guidance

- For each card, list candidate primary mechanics, visible secondary mechanics, blockers, and related runtime surfaces to check later.
- Mark ambiguous or mixed cards explicitly when one primary mechanic is not obvious.

## Verification

- Check that each issue-listed `cardId` appears in the inventory file.
- Run `git diff --check` after edits.

## Child DOX Index

None.
