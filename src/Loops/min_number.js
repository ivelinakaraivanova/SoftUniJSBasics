function minNumber(input) {
    let element = input[0];
    let min = Number.MAX_SAFE_INTEGER;
    let idx = 1;

    while(element != "Stop") {
        let n = Number(element);
        if (n < min) {
            min = n;
        }
        element = input[idx];
        idx++;
    }
    console.log(min);
}
minNumber(["100","99","80","70","Stop"])
minNumber(["-10","20","-30","Stop"])
minNumber(["45","-20","7","99","Stop"])
minNumber(["999","Stop"])
minNumber(["-1","-2","Stop"])
