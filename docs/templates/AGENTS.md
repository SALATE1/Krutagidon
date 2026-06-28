# AGENTS.md

## Purpose

This folder contains JSON templates for draft and runtime data files.

## Ownership

- Owns template files for cards, tokens, packs, decks, stacks, and pools.
- Does not own live runtime data in `data/` or import drafts in `data/import/`.

## Local Contracts

- Keep templates synchronized with current data contracts.
- Templates should show shape and stable identifiers without becoming executable fixtures.
- Do not add template fields that the loader, validator, or docs do not support.

## Work Guidance

- Update templates when adding or renaming durable JSON fields.
- Prefer minimal examples that are easy to copy into the right data subtree.

## Verification

- Run the relevant data/import validation when template changes mirror data contract changes.
- For template-only docs edits, run `git diff --check`.

## Child DOX Index

None.
