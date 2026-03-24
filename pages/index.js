import * as dt from "date-fns";
import { ptBR } from "date-fns/locale";

const init = new Date(2026, 2, 1);
const end = dt.endOfMonth(init);

const allOfDays = dt.eachDayOfInterval({start: init, end: end}); // get all days of month

const serviceDaysUnformated = allOfDays.filter(day => {
    const weekDay = dt.getDay(day);
    return weekDay === 0 || weekDay === 3 || weekDay === 6;
});

const serviceDays = serviceDaysUnformated.map(date => {
    return dt.format(date, "eeee, dd 'de' MMMM", { locale: ptBR });
});

const fieldDate = document.querySelector("#date");
fieldDate.innerHTML = serviceDays;
