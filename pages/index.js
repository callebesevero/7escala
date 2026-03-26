import { parseToJSON } from "./json";
import { buildEscala } from "./buildEscala";
import { printEscala } from "./print";

await buildEscala()

const escalaJSON = await parseToJSON(); // JSON schedule
console.log(escalaJSON)

await printEscala()
