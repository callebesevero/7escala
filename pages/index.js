import { parseToJSON, checkMemberRepetition } from "./json";
import { buildEscala } from "./escala";
import { printEscala } from "./print";

await buildEscala();

const escalaJSON = await parseToJSON(); // JSON schedule
console.log(escalaJSON);

checkMemberRepetition(escalaJSON);

// if (!checkMemberRepetition(escalaJSON) || checkMemberRepetition(escalaJSON) && button) {
//     await printEscala();
// };
