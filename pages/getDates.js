import * as dt from "date-fns";
import { ptBR } from "date-fns/locale";

export default function getServiceDays(
    year=dt.getYear(new Date()),
    month=dt.getMonth(new Date())
) {
    const init = new Date(year, month, 1);
    const end = dt.endOfMonth(init);
    
    const allOfDays = dt.eachDayOfInterval({start: init, end: end}); // get all days of month
    
    const serviceDaysUnformated = allOfDays.filter(day => {
        const weekDay = dt.getDay(day);
        return weekDay === 0 || weekDay === 3 || weekDay === 6;
    });
    
    const serviceDays = serviceDaysUnformated.map(date => {
        return {"completeDate": dt.format(date, "eeee, dd 'de' MMMM", { locale: ptBR }), "dayName": dt.format(date, "eeee", { locale: ptBR }), "dayNumber": dt.format(date, "dd", { locale: ptBR })};
    });
    return serviceDays;
};
