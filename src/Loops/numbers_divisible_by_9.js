function solve(num1, num2) {
    num1 = Number(num1);
    num2 = Number(num2);
    let sum = 0;
    let outputNums = ''
    for (let i = num1; i < num2; i++){
        if (i % 9 == 0) {
            sum += i;
            outputNums += String(i) + ' ';
        }
    }
    console.log(`The sum: ${sum}`);
    console.log(outputNums);
}
solve("100", "200")