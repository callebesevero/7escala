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

export function buildReadyEscala(
    escala,
    calendarId="calendar"
) {
    document.querySelector(".main-content-header").innerHTML += buildMonthAndYear(escala.date);

    const calendar = document.querySelector(`#${calendarId}`);
    calendar.innerHTML += buildCalendarDayName() + buildReadyServiceDays(escala["service-dates"]);

    // button print
    const page = document.querySelector(".main-content");
    page.innerHTML += buildPrintButton();
};

function buildReadyServiceDays(
    serviceDays
) {
    return serviceDays.map((days) => {
        return buildReadyLabelAndInput(days.date, days.people);
    })
    .join("");
};

function buildReadyLabelAndInput(
    date,
    people
) {
    if (date === "") {
        return `<div class="calendar-day" style="visibility: hidden">
                    <div class="date">${date}</div>
                    <div class="people">${people.join(" - ")}</div>
                </div>`;
    } else {
        return `<div class="calendar-day">
                    <div class="date">${date}</div>
                    <div class="people">${people.join(" - ")}</div>
                </div>`;
    };
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
                prefix = `<div>
                            <label class="date" for="${date["dayNumber"]}" style="visibility: hidden;"></label>
                            <input type="text" class="people" id="${date["dayNumber"]}" placeholder="Adicione pessoas" style="visibility: hidden;">
                        </div>`;
            } else if (dayName === "sábado") { // if first day is saturday
                prefix = `<div>
                            <label class="date" for="${date["dayNumber"]}" style="visibility: hidden;"></label>
                            <input type="text" class="people" id="${date["dayNumber"]}" placeholder="Adicione pessoas" style="visibility: hidden;">
                        </div>
                        <div>
                            <label class="date" for="${date["dayNumber"]}" style="visibility: hidden;"></label>
                            <input type="text" class="people" id="${date["dayNumber"]}" placeholder="Adicione pessoas" style="visibility: hidden;">
                        </div>`;
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
        <label class="date" for="${date["dayNumber"]}">${date["dayNumber"]}</label>
        <input type="text" class="people" id="${date["dayNumber"]}" placeholder="Adicione pessoas">
    </div>`;
};

function buildConfirmButton() {
    return `<div class="div-button">
                <input id="confirm" class="button" type="button" value="Confirmar escala">
            </div>`;
};

function buildPrintButton() {
    return `<div class="div-button">
                <input id="print" class="button" type="button" value="Imprimir escala">
            </div>`;
};
