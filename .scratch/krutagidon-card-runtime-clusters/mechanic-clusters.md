# Mechanic Clusters

This file defines what each final card runtime `clusterId` means.

Validated format:

- each final cluster is introduced by a `## cluster-id` heading;
- `cluster-id` uses lower kebab case, for example `attack-cards`;
- text inside each section is free-form and may describe primary mechanic, related runtime surfaces, blockers, and implementation notes.

Do not duplicate the card list here. Card-to-cluster assignment stays in `card-cluster-decisions.json`, and the generated matrix reports which cards currently reference each `clusterId`.
