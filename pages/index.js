import * as dt from "date-fns";
import { ptBR } from "date-fns/locale";

const init = new Date(2026, 2, 1)
const end = dt.endOfMonth(init)

const allOfDays = dt.eachDayOfInterval({start: init, end: end})

const fieldDate = document.querySelector("#date")
fieldDate.innerHTML = allOfDays
