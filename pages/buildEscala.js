export async function buildEscala(
    divCalendarId="#calendar"
) {
    const module = await import("./getDates");
    const dates = module.default(2026, 2); // <- mock
    
    const divCalendar = document.querySelector(divCalendarId);

    divCalendar.innerHTML += `<div class="day-name">Domingo</div><div class="day-name">Quarta</div><div class="day-name">Sábado</div>`; // add schedule name days
    
    const serviceDays = dates.map((date, i) => {
        const dayName = date["dayName"];
        let prefix = "";
        if (i === 0) {
            if (dayName === "quarta-feira") { // if first day is not sunday
                prefix = `<div></div>`;
            } else if (dayName === "sábado") { // if first day is not sunday and wednesday
                prefix = `<div></div><div></div>`;
            };
        };
        return `${prefix}<div><label for="${date["completeDate"]}">${date["dayNumber"]}</label><input type="text" class="people" id="${date["dayNumber"]}"></div>`; // config label and input
    });

    serviceDays.forEach(field => {
        return divCalendar.innerHTML += field; // add label and input on html
    });
    document.body.innerHTML += `<div><input id="confirm" type="button" value="Confirmar escala"></div>`; // add confirmation button
};
