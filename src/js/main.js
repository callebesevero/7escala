import { parseToJSON, checkMemberRepetition } from "./json";
import { buildEscala, buildReadyEscala } from "./escala";
import { printEscala } from "./print";
import { get, child, set, ref } from "firebase/database";
import { db } from "./firebaseConfig";

const filePath = "abril de 2026";

get(child(ref(db), filePath)).then(async (snapshot) => {
    if (snapshot.exists()) {
        const data = JSON.parse(snapshot.val());

        buildReadyEscala(data);
    } else {
        await buildEscala();
        
        // Add escala
        const confirmButton = document.querySelector("#confirm");
        confirmButton.addEventListener("click", async () => {
            const escalaJSON = await parseToJSON(); // JSON schedule
            console.log(escalaJSON);
        
            set(ref(db, filePath), escalaJSON);
        });
    }
}).catch((error) => {
    console.error("Error fetching data:", error);
});

// if (!checkMemberRepetition(escalaJSON) || checkMemberRepetition(escalaJSON) && button) {
//     await printEscala();
// };
