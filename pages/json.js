export function parseToJSON() {
    const confirmButton = document.querySelector("#confirm");
    const dates = document.querySelector("#date");
    
    confirmButton.addEventListener("click", (event) => {
        // pegar informações
        // passar pra array
        // converter arrays em json
        const label = Array.from(document.querySelectorAll("label")).map(lb => { // Array.from() because document.querySelectorAll("label") returns a NodeList
            return lb.textContent;
        });
        const input = Array.from(document.querySelectorAll("input")).map(inp => {
            return inp.value;
        });
    
        console.log(`${label[0]}\n${input}`);
        console.log(typeof label)
        console.log(typeof input)
    });
};
/*
"escala": {
    "domingo, 01 de março": [
        "pessoa",
        "pessoa2",
        "pessoa3"
    ],
    "quarta, 04 de março": [
        "pessoa",
        "pessoa2",
        "pessoa3"
    ]
}
*/
