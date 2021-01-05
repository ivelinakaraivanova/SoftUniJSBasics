function solve(input) {
    let firstNumber = Number(input[0]);
    let secondNumber = Number(input[1]);
    let magicNumber = Number(input[2]);
    let combinations = 0;
    let isFound = false;

    for (let i = firstNumber; i <= secondNumber; i++) {
        for (let j = firstNumber; j <= secondNumber; j++) {
            combinations++;
            if (i + j == magicNumber) {
                console.log(`Combination N:${combinations} (${i} + ${j} = ${magicNumber})`);
                isFound = true;
                break;
            }
        }
        if (isFound) {
            break;
        }
    }
    if (!isFound) {
        console.log(`${combinations} combinations - neither equals ${magicNumber}`)
    }
}
solve(["1","10","5"])
solve(["88","888","1000"])
solve(["23","24","20"])
solve(["88", "888", "2000"])