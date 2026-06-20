Status: ready-for-agent
Label: ready-for-agent
Type: AFK

# Углубить Effect Runtime registry на add_power

## What to build

Добавить первый вертикальный срез Effect Runtime registry для Runtime Effect ID `add_power`.

Срез должен связать исполнение эффекта, validation формы эффекта и typed event logging через один Effect Runtime Interface. Видимое поведение симуляции не должно измениться: карты, которые дают power, продолжают давать тот же power и писать диагностическое событие.

## Acceptance criteria

- [ ] `add_power` исполняется через Effect Runtime registry, а не через отдельную ветку, которую validation не переиспользует.
- [ ] Validation для `add_power` использует знание из Effect Runtime registry или рядом с ним, а не отдельный разрозненный whitelist.
- [ ] Некорректный `add_power` с нечисловым или неподдержанным amount не проходит executable data-pack validation.
- [ ] Розыгрыш карты с `add_power` сохраняет текущее deterministic behavior.
- [ ] Event log по-прежнему содержит typed event о полученном power.
- [ ] Focused tests покрывают успешный `add_power`, invalid shape и сохранение текущего action-loop behavior.

## Blocked by

None - can start immediately
