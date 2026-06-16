# Krutagidon Simulation Context

Shared domain language for the local deterministic simulator of "Эпичные схватки боевых магов: Крутагидон 2".

## Language

**Neutral Dead Wizard Token**:
A temporary DWT definition used in normal early simulations before real DWT faces are imported. It counts as a controlled DWT with the base -3 VP penalty and has no token-specific effects.
_Avoid_: fake DWT, real DWT substitute

**Fixture Dead Wizard Token**:
An artificial DWT definition used only in tests to exercise DWT effect classes such as immediate effects, Ongoing effects, modifiers, discard, destroy, and chip interactions.
_Avoid_: fake DWT, simulation DWT

**Token Definition**:
A unique description of a non-card game object such as a Dead Wizard Token, Trophy, Dingler status, or chip-related token behavior. Token definitions are separate from card definitions.
_Avoid_: card definition for tokens, pseudo-card

**Token Kind**:
The category of a token definition, such as `deadWizardToken`, `trophy`, or `dingler`, used to distinguish token lifecycles without modeling tokens as cards.
_Avoid_: card kind for tokens

**Effect Runtime**:
The shared execution model for mapped effects from cards, tokens, statuses, and event-like objects. It uses one effect language regardless of the source object.
_Avoid_: card-only effect runtime, token mini-runtime

**Effect Helper**:
A shared engine operation that applies an effect consequence immediately and records the resulting typed events. Effects are resolved sequentially through helpers rather than by building a separate pending-event queue.
_Avoid_: pending effect queue, event-only effect execution

**Effective Value**:
A context-specific value calculated from immutable base data plus active modifiers, such as the cost a specific player must pay for a card. Effective values do not mutate card definitions.
_Avoid_: modified card cost, rewritten card data

**Controlled Object**:
A card, token, status, or trophy-like object currently controlled by a player. Ongoing modifiers are derived from controlled objects instead of being copied into a separate player modifier list.
_Avoid_: detached player modifier

**Controlled Object View**:
A read-only helper view that gathers separately stored controlled cards, tokens, statuses, and trophy-like objects for modifier calculations. It is not a single storage zone in game state.
_Avoid_: unified controlled objects zone

**Choice Policy**:
The deterministic decision hook used when an effect or rule requires a legal choice. The early baseline policy chooses the first legal option and is not intended to model strong player strategy.
_Avoid_: hidden handler choice, random default choice

**Empty Choice Skip**:
The default behavior when an effect asks for a legal choice but no legal options exist. The effect is skipped unless its mapped effect data explicitly marks the empty choice as an error.
_Avoid_: default empty-choice failure

**Target Resolution**:
The shared rule layer that turns target descriptions such as self, all foes, chosen foe, left foe, right foe, strongest player, or weakest player into concrete player targets before an effect is applied.
_Avoid_: target logic inside each effect handler

**Immediate Death Resolution**:
The rule that a player dies as soon as their life drops below 1. Death, DWT gain, resurrection, and DWT immediate effects are resolved before continuing the remaining effect sequence.
_Avoid_: end-of-turn death check, delayed death

**Sequential Target Resolution**:
The rule that multi-target effects resolve one target at a time in seating order, with death and DWT effects fully resolved after each affected target before moving to the next target. Normal effects start from the applying player; Mayhem and Mega Mayhem effects start from the active player.
_Avoid_: batch target resolution

**Sequential Player Attack Resolution**:
The rule that normal player-controlled attacks resolve target by target: each affected target decides whether to defend, then that target's attack result is immediately resolved before moving to the next target.
_Avoid_: collect-all-defenses for normal attacks

**State-Sensitive Attack Order**:
The rule that state changes from one target of a normal player-controlled attack can affect later targets of the same attack, including later defense choices, modifiers, death, and DWT effects.
_Avoid_: snapshotting normal attack state

**Two-Phase Mayhem Attack Resolution**:
The rule that Mayhem and Mega Mayhem attacks first collect defense decisions from affected players in seating order, then resolve the attack in seating order against targets that did not avoid it.
_Avoid_: defend-and-resolve-per-target for Mayhem attacks

**Minimal Defense Window**:
The early supported defense workflow for attack resolution: an affected target may choose one legal defense from hand to avoid that attack instance, and the defense card moves according to mapped defense branch data. Redirects and complex extra defense effects can be added separately.
_Avoid_: attacks without defense support

**Defense Branch**:
The mapped effect sequence used when a defense card or defense-capable object is chosen during a defense window. A defense branch can both avoid the attack and perform additional supported effects through the shared effect runtime.
_Avoid_: avoid-only defense model

**Defense Cost**:
The required payment or movement needed to use a defense branch, such as discarding the defense card, discarding another card, spending chips, or paying life. A defense option is legal only when its cost can be paid.
_Avoid_: free defense assumption

**Nonlethal Life Cost**:
The project rule that a player cannot pay a life cost if that payment would reduce their life below 1. Such a defense or effect option is not legal unless mapped data explicitly says otherwise.
_Avoid_: paying life into death

**Redirected Attack Source**:
The rule that a redirected attack becomes an attack from the defending player who redirected it. That player receives attack credit, can receive Trophy credit for a resulting kill, and their attack modifiers can apply to the redirected attack.
_Avoid_: redirect as target-only change

**Deferred Redirect Support**:
The decision to exclude redirect defenses from the first combat slice while keeping attack source, credit, and modifier concepts explicit enough to add redirect behavior later.
_Avoid_: redirect in first combat slice

**Basic Trophy Credit**:
The first combat-slice rule that a player gains control of the Trophy when their normal attack kills a foe. Self-kills, Mayhem kills, and source-less deaths do not move the Trophy; redirect kill credit is deferred with redirect support.
_Avoid_: no trophy until full combat
