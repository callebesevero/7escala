import * as dt from "date-fns";
import { ptBR } from "date-fns/locale";

export function getServiceDays(
    year=dt.getYear(new Date()),
    month=dt.getMonth(new Date())
) {
    const init = new Date(year, month, 1);
    const end = dt.endOfMonth(init);
    
    const serviceDays = dt.eachDayOfInterval({start: init, end: end}) // get all days of month
        .filter(day => { // select sunday, wednesday and saturday
            const weekDay = dt.getDay(day);
            return weekDay === 0 || weekDay === 3 || weekDay === 6;
        })
        .map(date => { // return formated dates for each service day
            return {"dayName": dt.format(date, "eeee", { locale: ptBR }), "dayNumber": dt.format(date, "dd", { locale: ptBR })};
        });

    return serviceDays;
};

export function getMonthAndYear(
    year=dt.getYear(new Date()),
    month=dt.getMonth(new Date())
) {
    const date = new Date(year, month, 1);

    return dt.format(date, "MMMM 'de' yyyy", { locale: ptBR });
};
