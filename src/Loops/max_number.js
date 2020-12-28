function maxNumber(input) {
    let element = input[0];
    let max = Number.MIN_SAFE_INTEGER;
    let idx = 1;

    while(element != "Stop") {
        let n = Number(element);
        if (n > max) {
            max = n;
        }
        element = input[idx];
        idx++;
    }
    console.log(max);
}
maxNumber(["100","99","80","70","Stop"])
maxNumber(["-10","20","-30","Stop"])
maxNumber(["45","-20","7","99","Stop"])
maxNumber(["999","Stop"])
maxNumber(["-1","-2","Stop"])
