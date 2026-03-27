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
            const splittedPeople = [people.trim()]; // delete extra spacebar
            return splittedPeople;
        };
    });
};

export function testMemberRepetition(
    json
) {
    // acessar no DB as escalas já prontas para comparar entre si (mas por enquanto usarei o mock)
    const jsonObject = JSON.parse(json);
    // console.log(jsonObject)
    for (let index in jsonObject) { // repetir com base no número de dias -> in
        if (mockEscalaJSONComparar[index]["people"][0].includes(jsonObject[index]["people"][0])) {
            console.log(`A PESSOA ${jsonObject[index]["people"]} FOI REPETIDA`);
        };
    }
    /* MODELO DE RETORNO DO PROBLEMA
    Um problema foi encontrado: MEMBRO(S) ESTÁ(ÃO) OCUPADO(S) EM OUTRO(S) DEPARTAMENTO(S)

    Na escala do [departamento x]
    [dia x]: [membro x]
    */
};

const mockEscalaJSONComparar = [
    {
        "date":"01",
        "people":["CALLEBE"]
    },
    {
        "date":"04",
        "people":["CALLEBE", "ISABELLY"]
    },
    {
        "date":"05",
        "people":["CALLEBE"]
    },
    {
        "date":"08",
        "people":["CALLEBE"]
    },
    {
        "date":"11",
        "people":["CALLEBE"]
    },
    {
        "date":"12",
        "people":["CALLEBE"]
    },
    {
        "date":"15",
        "people":["CALLEBE"]
    },
    {
        "date":"18",
        "people":["CALLEBE"]
    },
    {
        "date":"19",
        "people":["CALLEBE"]
    },
    {
        "date":"22",
        "people":["CALLEBE"]
    },
    {
        "date":"25",
        "people":["CALLEBE"]
    },
    {
        "date":"26",
        "people":["CALLEBE"]
    },
    {
        "date":"29",
        "people":["CALLEBE"]
    }
]
