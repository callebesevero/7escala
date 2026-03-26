export function parseToJSON() {
    return new Promise((resolve) => {
        const confirmButton = document.querySelector("#confirm");
        
        confirmButton.addEventListener("click", () => {
            const label = getLabel();
            const input = getInputValue();
    
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

function getLabel() {
    return Array.from(document.querySelectorAll("label")).map(lb => { // Array.from() because document.querySelectorAll("label") returns a NodeList
        return lb.textContent;
    });
};

function getInputValue(
    element="#calendar > div > input"
) {
    return Array.from(document.querySelectorAll(element)).map(inp => {
        const people = inp.value.toUpperCase();
        if (people.includes(",")) { // if are more of one people
            const splittedPeople = people.split(",").map(p => {
                return p.trim(); // delete extra spacebar
            });
            return splittedPeople;
        } else { // One people
            const splittedPeople = people.trim(); // delete extra spacebar
            return splittedPeople;
        };
    });
};
