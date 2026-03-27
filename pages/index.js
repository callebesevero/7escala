import { parseToJSON, testMemberRepetition } from "./json";
import { buildEscala } from "./buildEscala";
import { printEscala } from "./print";

await buildEscala();

const escalaJSON = await parseToJSON(); // JSON schedule
console.log(escalaJSON);

testMemberRepetition(escalaJSON);

// if (!testMemberRepetition(escalaJSON) || testMemberRepetition(escalaJSON) && button) {
//     await printEscala();
// };
