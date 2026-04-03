import { parseToJSON } from "./json";
import { buildEscala, buildReadyEscala } from "./escala";
import { printEscala } from "./print";
import { getMonthAndYear } from "./dates";

import { get, child, set, ref } from "firebase/database";
import { db } from "./firebaseConfig";

const filePath = `${getMonthAndYear()}/${window.location.pathname.split("/")[-1 + window.location.pathname.split("/").length].split(".")[0]}`;

get(child(ref(db), filePath)).then(async (snapshot) => {
    if (snapshot.exists()) {
        const data = JSON.parse(snapshot.val());

        buildReadyEscala(data);

        const printButton = document.querySelector("#print");
        printButton.addEventListener("click", async () => {
            await printEscala();
        });
    } else {
        await buildEscala();
        
        // Add escala
        const confirmButton = document.querySelector("#confirm");
        confirmButton.addEventListener("click", async () => {
            const escalaJSON = await parseToJSON(); // JSON schedule
        
            set(ref(db, filePath), escalaJSON);

            window.location.reload();
        });
    }
}).catch((error) => {
    console.error("Error fetching data:", error);
});
