export function parseToJSON() {
    const confirmButton = document.querySelector("#confirm");
    const dates = document.querySelector("#date");
    
    confirmButton.addEventListener("click", (event) => {
        const label = Array.from(document.querySelectorAll("label")).map(lb => { // Array.from() because document.querySelectorAll("label") returns a NodeList
            return lb.textContent;
        });
        const input = Array.from(document.querySelectorAll("input")).map(inp => {
            return inp.value;
        });

        const escalaArray = label.map((lb, i) => {
            return {
                "date": lb,
                "people": input[i]
            };
        });

        const escalaJSON = JSON.stringify(escalaArray);
    });
};
