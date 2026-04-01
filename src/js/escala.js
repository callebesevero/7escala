export async function buildEscala(
    calendarId="calendar"
) {
    const module = await import("./dates");
    const dates = module.getServiceDays();
    const monthAndYear = module.getMonthAndYear();
    
    document.querySelector(".main-content-header").innerHTML += buildMonthAndYear(monthAndYear);

    const calendar = document.querySelector(`#${calendarId}`);
    calendar.innerHTML += buildCalendarDayName() + buildServiceDays(dates);
    
    document.querySelector(".main-content").innerHTML += buildConfirmButton();
};

function buildMonthAndYear(
    monthAndYear
) {
    return `<h2 id="monthAndYear">${monthAndYear}</h2>`;
};

function buildCalendarDayName() {
    return `<div class="calendar-day-name">
        Domingo
    </div>
    <div class="calendar-day-name">
        Quarta
    </div>
    <div class="calendar-day-name">
        Sábado
    </div>`;
};

function buildServiceDays(
    dates
) {
    const serviceDays = dates.map((date, i) => {
        const dayName = date["dayName"];
        let prefix = "";
        if (i === 0) {
            if (dayName === "quarta-feira") { // if first day is wednesday
                prefix = `<div></div>`;
            } else if (dayName === "sábado") { // if first day is saturday
                prefix = `<div></div><div></div>`;
            };
        };
        return buildLabelAndInput(prefix, date); // config label and input
    });
    return serviceDays.join("");
};

function buildLabelAndInput(
    prefix,
    date
) {
    return `${prefix}
    <div class="calendar-day">
        <label for="${date["dayNumber"]}">${date["dayNumber"]}</label>
        <input type="text" class="people" id="${date["dayNumber"]}" placeholder="Adicione pessoas">
    </div>`;
};

function buildConfirmButton() {
    return `<div class="button">
        <input id="confirm" type="button" value="Confirmar escala">
    </div>`;
};
