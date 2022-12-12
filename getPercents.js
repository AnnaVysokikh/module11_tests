export function getPercents(percent, number)
{
    if (percent < 0)
        return "некорректные входные данные";
    return number * (percent / 100);
}
