export async function buildEscala() {
    const module = await import("./getDates");
    const dates = module.default(2026, 3);
    
    const divCalendar = document.querySelector("#calendar");

    divCalendar.innerHTML += `<div class="day-name">Domingo</div><div class="day-name">Quarta</div><div class="day-name">Sábado</div>`; // add schedule name days
    const serviceDays = dates.map((date, i) => {
        if (i === 0) {
            const dayName = date.slice(0, date.indexOf(","));
            if (dayName === "quarta-feira") {
                return `<div></div>` + `<div><label for="${date}">${date}</label><input type="text" class="people" id="${date}"></div>`; // config label and input
            } else if (dayName === "sábado") {
                return `<div></div><div></div>` + `<div><label for="${date}">${date}</label><input type="text" class="people" id="${date}"></div>`; // config label and input
            };
        } else {
            return `<div><label for="${date}">${date}</label><input type="text" class="people" id="${date}"></div>`; // config label and input
        };
    });
    serviceDays.forEach(field => {
        return divCalendar.innerHTML += field; // add label and input on html
    });
    document.body.innerHTML += `<div><input id="confirm" type="button" value="Confirmar escala"></div>`; // add confirmation button
};
