# Merged Mechanics Inventory

Issue: `.scratch/krutagidon-card-runtime-clusters/issues/14-merge-mechanics-inventory.md`

This is a Block C planning synthesis. It merges inventory batches `01.md` through `05.md` without assigning final `clusterId` values to every card.

Sources read:

- `.scratch/krutagidon-card-runtime-clusters/inventory/01.md`
- `.scratch/krutagidon-card-runtime-clusters/inventory/02.md`
- `.scratch/krutagidon-card-runtime-clusters/inventory/03.md`
- `.scratch/krutagidon-card-runtime-clusters/inventory/04.md`
- `.scratch/krutagidon-card-runtime-clusters/inventory/05.md`
- `.scratch/krutagidon-card-runtime-clusters/mechanic-clusters.md`
- `CONTEXT.md`
- `.scratch/krutagidon-card-runtime-clusters/issues/15-assign-card-clusters-batch-01.md`
- `.scratch/krutagidon-card-runtime-clusters/issues/16-assign-card-clusters-batch-02.md`

## Baseline Rules

- Final decisions must assign exactly one main `clusterId` per card.
- Choose the primary runtime mechanic: the mechanic or modifier surface that gives the card its playable identity.
- Do not choose by the hardest sub-effect, every secondary payload, or action window by default.
- Choice, optionality, random selection, reveal order, target order, and stack exhaustion are implementation notes unless they are the card's main mechanic.
- Mayhem and Mega-Mayhem are not automatic `mayhem-events`; assign the real main mechanic unless the event frame itself is the main runtime work.
- If no current cluster fits, keep or set `needsClusterDecision` with a short `notes` reason instead of forcing a weak cluster.

## Normalized Candidate Mechanics

These are deduplicated mechanics seen across the five inventory batches. They map to the current taxonomy headings, but this list is not a final card assignment.

- Dead Wizard Token ownership, counting, gain, transfer, exchange, removal, token-effect execution, and DWT-like controlled card identity.
- Dingler status assignment, recovery, toggle, status-gated costs or rewards, status-count scaling, and Dingler maximum-life normalization.
- Mayhem/Mega-Mayhem table events: global choice order, voting, repeatable per-player choices, battle mini-games, and shared event sequencing.
- Chipsin economy: chipsin gain, spend, steal, transfer, attached market chips, on-kill chipsin rewards, and chipsin-scaled effects.
- Attack effects: single-target, multi-target, positional, self-target, unavoidable, variable, damage-accounting, on-hit, on-avoid, and on-kill attack payloads.
- Defense effects: defense-from-hand costs, reveal or discard costs, retain/top-deck destinations, defense rewards, counter-damage, and redirect-related branches.
- Ongoing modifiers: hand limit, cost/destination replacement, card type override, damage or power modifiers, play/gain/start-turn triggers, and persistent identity changes.
- Activation effects: controlled-card actions, self-destroy activations, activated attacks, activated trashing, and activated variable power gain.
- Card movement: reveal, peek, mill, destroy/trash, discard, return, reorder, play from revealed cards, play from opponent deck, and cross-zone destination overrides.
- Special-card stack behavior: Limp Wand distribution/scoring, Wild Magic resolution, special stack exhaustion, special card ownership/control split, and wand-attack qualification.
- Market effects: ordinary market and Legend market cost changes, wipe/refill, market attachments, market-card selection, and market-card cost queries.
- Scoring effects: end-game VP modifiers, scoring inversions, bonus scoring by owned/controlled card type, and special card scoring overrides.
- Simple baseline behavior: fixed power, simple draw, normal no-effect cards, and normal printed VP only.
- Life-total effects: healing, set life, life payment, life-total exchange, maximum-life normalization, and damage-to-healing conversion.
- Controlled-object conditions: controlled type checks, controlled card count, controlled cost queries, controlled permanent count, and controlled-object scaling.

## Usually Secondary Only

These mechanics appear often, but should not automatically become separate clusters:

- Fixed power and simple draw when another mechanic defines the card.
- Attack or defense markers when the real identity is DWT, Dingler, chipsins, market, special stacks, or card movement.
- Mayhem/Mega-Mayhem framing when the main work is a concrete mechanic such as market refill, attack damage, Dingler, chipsins, or card movement.
- Optional choice, branch choice, random choice, target choice, player order, and tie handling.
- Stack exhaustion and partial fulfillment for special cards unless special-stack management is the main mechanic.
- Visible chipsin symbols when chipsins are only a small payload on an attack, defense, or simple card.
- Wand name/classification when the primary effect is attack resolution, chipsin transfer, or another larger surface.
- Ordinary printed VP values and no-op ongoing markers without extra scoring behavior.
- Source-text/OCR ambiguity; record it in notes, but do not use it as a cluster.

## Ambiguous Or Mixed Cards

These cards need explicit primary-mechanic judgment in issues 15 and 16. The competing surfaces listed here come from inventory entries, not from final assignments.

| cardId                      | Competing surfaces                                                                  |
| --------------------------- | ----------------------------------------------------------------------------------- |
| `esw2_dbg__familiar_003`    | familiar attack, Limp Wand grant, redirect defense                                  |
| `esw2_dbg__familiar_004`    | next-attack modifier, unavoidable attack flag, redirect defense                     |
| `esw2_dbg__familiar_005`    | controlled card type override, draw, redirect defense                               |
| `esw2_dbg__familiar_009`    | DWT power scaling, DWT exchange, defense branch                                     |
| `esw2_dbg__familiar_010`    | controlled Legend condition, distributed attack, familiar defense                   |
| `esw2_dbg__legend_002`      | life-total exchange, Dingler status exchange, optional attack payload               |
| `esw2_dbg__legend_010`      | damage-to-healing trigger, conditional hand-limit modifier                          |
| `esw2_dbg__legend_011`      | ongoing controlled object, attack-like action, cost-based damage                    |
| `esw2_dbg__legend_012`      | ongoing trigger, first attack damage tracking, power gain                           |
| `esw2_dbg__legend_014`      | Dingler assignment, Dingler-count power scaling, self-target attack                 |
| `esw2_dbg__legend_015`      | wand attack classification, directional chain attack, death sequencing              |
| `esw2_dbg__legend_017`      | global draw, random discard, unavoidable multi-target attack                        |
| `esw2_dbg__legend_018`      | immediate draw, activation, Legend deck selection/reorder                           |
| `esw2_dbg__legend_027`      | DWT grant attack, redirect-immunity rule                                            |
| `esw2_dbg__legend_029`      | Limp Wand start-turn gain, Limp Wand play trigger, Limp Wand scoring override       |
| `esw2_dbg__legend_030`      | random Legend market destroy, cost-based multi-target attack                        |
| `esw2_dbg__legend_032`      | attack, opponent deck reveal/play, temporary control                                |
| `esw2_dbg__main_001`        | top-deck reveal, destroy branch, variable power branch                              |
| `esw2_dbg__main_005`        | on-gain Limp Wand grant, ongoing power, chipsin marker                              |
| `esw2_dbg__main_007`        | top-deck reveal/destroy, variable attack damage                                     |
| `esw2_dbg__main_008`        | Legend-gain destination override, wizard-property type override                     |
| `esw2_dbg__main_009`        | wand damage modifier, wand-play power trigger                                       |
| `esw2_dbg__main_010`        | main-deck destruction, mayhem play, kill-credit attribution                         |
| `esw2_dbg__main_015`        | wand attack, actual damage accounting, chipsin transfer                             |
| `esw2_dbg__main_017`        | draw, defense branch, counter-damage, death/prize flow                              |
| `esw2_dbg__main_020`        | controlled-card cost query, variable attack damage                                  |
| `esw2_dbg__main_022`        | Legend deck destruction, Mega-Mayhem exception, attack damage                       |
| `esw2_dbg__main_024`        | attack damage with source ambiguity, defense-from-hand branch                       |
| `esw2_dbg__main_025`        | fixed attack, avoided-attack reward                                                 |
| `esw2_dbg__main_027`        | Dingler-status power bonus, DWT/Dingler-token scoring inversion                     |
| `esw2_dbg__main_030`        | wand attack, self-target death, Dingler assignment, type normalization              |
| `esw2_dbg__main_031`        | activation lifecycle, self-destroy cost, Dingler attack payload                     |
| `esw2_dbg__main_032`        | turn-duration death replacement, DWT suppression/gain, Legend market gain           |
| `esw2_dbg__main_034`        | activation marker, controlled creature condition, conditional attack                |
| `esw2_dbg__main_037`        | optional discard trash, multi-target attack                                         |
| `esw2_dbg__main_039`        | DWT counting, DWT-like card identity                                                |
| `esw2_dbg__main_040`        | simple power, end-game deck scoring                                                 |
| `esw2_dbg__main_041`        | chipsin spend, optional attack, self-target damage                                  |
| `esw2_dbg__main_046`        | attack damage accounting, healing equal to actual damage                            |
| `esw2_dbg__main_048`        | activation, controlled creature scaling, all-foe attack                             |
| `esw2_dbg__main_049`        | chipsin payout, DWT-like controlled card identity                                   |
| `esw2_dbg__main_050`        | chipsin payout, DWT-like controlled card identity                                   |
| `esw2_dbg__main_051`        | chipsin payout, DWT-like controlled card identity                                   |
| `esw2_dbg__main_052`        | chipsin payout, DWT-like controlled card identity                                   |
| `esw2_dbg__main_053`        | chipsin payout, DWT-like controlled card identity                                   |
| `esw2_dbg__main_059`        | mayhem choice, hand reset, non-attack damage, kill attribution                      |
| `esw2_dbg__main_062`        | mayhem chipsin grant, all-wizard attack, variable damage                            |
| `esw2_dbg__main_064`        | mayhem participation battle, hand reveal, cost comparison, discard penalty          |
| `esw2_dbg__main_065`        | Legend market wipe, temporary refill size, Mega-Mayhem refill handling              |
| `esw2_dbg__main_066`        | Dingler recovery, optional life/chip cost, mayhem choice                            |
| `esw2_dbg__main_067`        | hand/discard trashing, Dingler life surcharge                                       |
| `esw2_dbg__main_073`        | table-wide chip gain, Legend market wipe/refill                                     |
| `esw2_dbg__main_074`        | lowest-life targeting, Dingler assignment, max-life normalization, attack frame     |
| `esw2_dbg__main_077`        | random hand reveal, repeatable life-paid reroll, forced destroy                     |
| `esw2_dbg__mega_mayhem_004` | global Dingler toggle, multi-target attack frame                                    |
| `esw2_dbg__mega_mayhem_006` | top main-deck destroy, mayhem death condition, per-target defense sequencing        |
| `esw2_dbg__mega_mayhem_007` | Dingler-gated destroy count, hand/discard zone choices                              |
| `esw2_dbg__starter_003`     | starter power, targeted attack, on-kill chipsin reward                              |
| `esw2_dbg__starter_004`     | wizard-property starter replacement, targeted/self attack, on-kill discard recovery |
| `esw2_dbg__wild_magic`      | modal power, enemy deck play, ownership/control split, arbitrary card execution     |

## Final Clustering Batch Plan

Use the already-created issue split. Each batch is explicit by `cardId`, not by keyword search.

### Issue 15: `.scratch/krutagidon-card-runtime-clusters/issues/15-assign-card-clusters-batch-01.md`

Card IDs:

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
- `esw2_dbg__legend_017`
- `esw2_dbg__legend_018`
- `esw2_dbg__legend_019`
- `esw2_dbg__legend_020`
- `esw2_dbg__legend_027`
- `esw2_dbg__legend_028`
- `esw2_dbg__legend_029`
- `esw2_dbg__legend_030`
- `esw2_dbg__legend_031`
- `esw2_dbg__legend_032`
- `esw2_dbg__legend_033`
- `esw2_dbg__limp_wand`
- `esw2_dbg__main_001`
- `esw2_dbg__main_002`
- `esw2_dbg__main_003`
- `esw2_dbg__main_004`
- `esw2_dbg__main_005`
- `esw2_dbg__main_006`
- `esw2_dbg__main_007`
- `esw2_dbg__main_008`
- `esw2_dbg__main_009`
- `esw2_dbg__main_010`
- `esw2_dbg__main_011`
- `esw2_dbg__main_012`
- `esw2_dbg__main_013`
- `esw2_dbg__main_014`
- `esw2_dbg__main_015`
- `esw2_dbg__main_016`
- `esw2_dbg__main_017`
- `esw2_dbg__main_018`
- `esw2_dbg__main_019`
- `esw2_dbg__main_020`
- `esw2_dbg__main_021`
- `esw2_dbg__main_022`
- `esw2_dbg__main_023`
- `esw2_dbg__main_024`
- `esw2_dbg__main_025`
- `esw2_dbg__main_026`

### Issue 16: `.scratch/krutagidon-card-runtime-clusters/issues/16-assign-card-clusters-batch-02.md`

Card IDs:

- `esw2_dbg__main_027`
- `esw2_dbg__main_028`
- `esw2_dbg__main_029`
- `esw2_dbg__main_030`
- `esw2_dbg__main_031`
- `esw2_dbg__main_032`
- `esw2_dbg__main_033`
- `esw2_dbg__main_034`
- `esw2_dbg__main_035`
- `esw2_dbg__main_036`
- `esw2_dbg__main_037`
- `esw2_dbg__main_038`
- `esw2_dbg__main_039`
- `esw2_dbg__main_040`
- `esw2_dbg__main_041`
- `esw2_dbg__main_042`
- `esw2_dbg__main_043`
- `esw2_dbg__main_044`
- `esw2_dbg__main_045`
- `esw2_dbg__main_046`
- `esw2_dbg__main_047`
- `esw2_dbg__main_048`
- `esw2_dbg__main_049`
- `esw2_dbg__main_050`
- `esw2_dbg__main_051`
- `esw2_dbg__main_052`
- `esw2_dbg__main_053`
- `esw2_dbg__main_054`
- `esw2_dbg__main_055`
- `esw2_dbg__main_056`
- `esw2_dbg__main_057`
- `esw2_dbg__main_058`
- `esw2_dbg__main_059`
- `esw2_dbg__main_060`
- `esw2_dbg__main_061`
- `esw2_dbg__main_062`
- `esw2_dbg__main_063`
- `esw2_dbg__main_064`
- `esw2_dbg__main_065`
- `esw2_dbg__main_066`
- `esw2_dbg__main_067`
- `esw2_dbg__main_068`
- `esw2_dbg__main_069`
- `esw2_dbg__main_070`
- `esw2_dbg__main_071`
- `esw2_dbg__main_072`
- `esw2_dbg__main_073`
- `esw2_dbg__main_074`
- `esw2_dbg__main_075`
- `esw2_dbg__main_076`
- `esw2_dbg__main_077`
- `esw2_dbg__main_078`
- `esw2_dbg__mega_mayhem_001`
- `esw2_dbg__mega_mayhem_002`
- `esw2_dbg__mega_mayhem_003`
- `esw2_dbg__mega_mayhem_004`
- `esw2_dbg__mega_mayhem_005`
- `esw2_dbg__mega_mayhem_006`
- `esw2_dbg__mega_mayhem_007`
- `esw2_dbg__starter_001`
- `esw2_dbg__starter_002`
- `esw2_dbg__starter_003`
- `esw2_dbg__starter_004`
- `esw2_dbg__wild_magic`

## Follow-Up Notes For Issues 15 And 16

- Keep the current two-batch split. It covers all inventory cards in current decision order and keeps issue 15 blocked only by this merge.
- Issue 15 may leave taxonomy gaps as `needsClusterDecision`; issue 16 is the final consistency gate that should run `npm run report:card-runtime-clusters`.
- For repeated families, decide consistently:
  - Dohlyak cards `esw2_dbg__main_049` through `esw2_dbg__main_053` share the same competing surfaces.
  - Defense families should not automatically go to `defense-effects` when DWT, Dingler, special-stack, or market behavior is larger.
  - Mayhem/Mega-Mayhem cards should be assigned by primary concrete mechanic unless the table event structure itself dominates.

## Verification Notes

- This merge artifact is a synthesis, not a generated matrix and not a decision source.
- No final `clusterId` values were assigned here.
- `card-cluster-decisions.json` and `card-runtime-cluster-matrix.md` are intentionally unchanged in issue 14.
- Required verification for this issue is `git diff --check`.
