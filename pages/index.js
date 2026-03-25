import { serviceDays as dates } from "./getDates";
import { parseToJSON } from "./json";

const serviceDays = dates.map(date => {
    return `<div><label for="${date}">${date}</label><input type="text" id="${date}"></div>`;
});

const fieldDate = document.querySelector("#date");
serviceDays.forEach(field => {
    return fieldDate.innerHTML += field;
});
document.body.innerHTML += `<div><input id="confirm" type="button" value="Confirmar escala"></div>`;

const escalaJSON = await parseToJSON(); // JSON schedule
