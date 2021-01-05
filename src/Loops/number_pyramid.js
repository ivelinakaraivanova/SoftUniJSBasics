function pyramid(n) {
    n = Number(n);

    let current = 1;
    let isBigger = false;
    let printLine = "";

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            if (current > n) {
                isBigger = true;
                break;
            }
            printLine += `${current} `;
            current += 1;
        }
        console.log(printLine);
        printLine = "";
        if (isBigger) {
            break;
        }
    }
}
pyramid(["7"])
pyramid(["12"])
pyramid(["15"])