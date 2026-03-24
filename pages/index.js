import { serviceDays as dates } from "./getDates";

const serviceDays = dates.map(date => {
    return `<div>${date}<input type="text" id="${date}"></div>`;
});

const fieldDate = document.querySelector("#date");
fieldDate.innerHTML = serviceDays;
fieldDate.innerHTML += `<div><input id="confirm" type="button" value="Confirmar escala"></div>`;
