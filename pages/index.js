import { parseToJSON } from "./json";
import { buildEscala } from "./buildEscala";

await buildEscala()

const escalaJSON = await parseToJSON(); // JSON schedule
console.log(escalaJSON)
