export function parseToJSON() {
    const confirmButton = document.querySelector("#confirm");
    const dates = document.querySelector("#date");
    
    confirmButton.addEventListener("click", () => {
        const label = Array.from(document.querySelectorAll("label")).map(lb => { // Array.from() because document.querySelectorAll("label") returns a NodeList
            return lb.textContent;
        });
        const input = Array.from(document.querySelectorAll("#date > div > input")).map(inp => {
            let people = inp.value;
            if (people.includes(",")) {
                const splitedPeople = people.split(",");
                return splitedPeople;
            } else {
                const splitedPeople = people.trim();
                return splitedPeople;
            };
        });
        console.log(input);

        const escalaArray = label.map((lb, i) => {
            return {
                "date": lb,
                "people": input[i]
            };
        });
        console.log(escalaArray);

        const escalaJSON = JSON.stringify(escalaArray);
        console.log(escalaJSON);
        return escalaJSON;
    });
};
