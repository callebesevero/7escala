export function parseToJSON() {
    return new Promise((resolve) => {
        const confirmButton = document.querySelector("#confirm");
        
        confirmButton.addEventListener("click", () => {
            const label = Array.from(document.querySelectorAll("label")).map(lb => { // Array.from() because document.querySelectorAll("label") returns a NodeList
                return lb.textContent;
            });
            const input = Array.from(document.querySelectorAll("#date > div > input")).map(inp => {
                const people = inp.value;
                if (people.includes(",")) {
                    const splitedPeople = people.split(",").map(p => {
                        return p.trim(); // tira espaços a mais
                    });
                    return splitedPeople;
                } else {
                    const splitedPeople = people.trim(); // tira espaços
                    return splitedPeople;
                };
            });
    
            const escalaArray = label.map((lb, i) => {
                return {
                    "date": lb,
                    "people": input[i]
                };
            });
    
            const escalaJSON = JSON.stringify(escalaArray);
            resolve(escalaJSON);
        });
    });
};
