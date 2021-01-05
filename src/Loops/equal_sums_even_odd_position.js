function solve(input){
    let startNumber = Number(input[0]);
    let stopNumber = Number(input[1]);
    let printLine = "";
                
    for (let number = startNumber; number <= stopNumber; number++) {
        let currentNumber = number.toString();

        let evenSum = 0;
        let oddSum = 0;

        for (let position = 0; position < currentNumber.length; position++) {
            if (position % 2 == 0) {
                evenSum += Number(currentNumber[position]);
            } else {
                oddSum += Number(currentNumber[position]);
            }
        }

        if (evenSum == oddSum) {
            printLine += `${currentNumber} `;
        }
    }
    console.log(printLine);
}
solve(["100000","100050"])
// solve(["123456","124000"])

