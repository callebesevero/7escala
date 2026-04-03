export async function printEscala() {
    printJS({
        printable: "main",
        type: "html",
        css: "../css/print.css",
        scanStyles: false
    });
};
