Status: ready-for-agent
Label: ready-for-agent
Type: AFK

# Консолидировать Market Flow за один Module

## What to build

Углубить Market Flow Module без изменения игрового поведения.

Setup fill и turn Market Flow уже реализованы отдельными путями. Этот срез должен свести их за один Interface, чтобы правила пополнения main market, Legend market, Mayhem routing, Mega Mayhem routing, market chip markers и game-end reason жили в одном Module.

## Acceptance criteria

- [ ] Начальное заполнение рынка и turn Market Flow используют общий Market Flow Interface.
- [ ] Setup mode по-прежнему не исполняет Mayhem/Mega Mayhem effects, если текущее поведение этого требует.
- [ ] Turn Market Flow по-прежнему исполняет supported Mayhem/Mega Mayhem effects и продолжает пополнять рынок.
- [ ] `mainDeckExhausted` и `legendDeckExhausted` по-прежнему возвращаются только там, где Market Flow не может пополнить рынок.
- [ ] Existing Market Flow tests продолжают проходить.
- [ ] Добавлен focused test, который доказывает, что setup и turn paths используют один Interface или общий behavior helper.

## Blocked by

- `.scratch/architecture-canon-alignment/issues/09-market-flow-rename-and-normal-refresh.md`
- `.scratch/architecture-canon-alignment/issues/10-market-flow-mayhem-resolution.md`
- `.scratch/architecture-canon-alignment/issues/11-market-flow-explicit-game-end-reason.md`
