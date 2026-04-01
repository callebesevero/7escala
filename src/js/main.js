import { parseToJSON, checkMemberRepetition } from "./json";
import { buildEscala } from "./escala";
import { printEscala } from "./print";

await buildEscala();

const confirmButton = document.querySelector("#confirm");

confirmButton.addEventListener("click", async () => {
    const escalaJSON = await parseToJSON(); // JSON schedule
    console.log(escalaJSON);
});

// if (!checkMemberRepetition(escalaJSON) || checkMemberRepetition(escalaJSON) && button) {
//     await printEscala();
// };
