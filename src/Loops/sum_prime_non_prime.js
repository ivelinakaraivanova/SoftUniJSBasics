function solve(input) {
    
    let sumPrime = 0;
    let sumNotPrime = 0;
    let index = 0;
    let currentNum = input[index];

    while (currentNum != "stop") {
        let number = Number(currentNum);
        if (number < 0)
            console.log("Number is negative.");
        else {
            if (number < 2)
                sumNotPrime += number;
            else {
                let endNum = Math.trunc(Math.sqrt(number));

                let isPrime = true;
                for (let i = 2; i <= endNum; i++) {
                    if (number % i == 0)
                        isPrime = false;
                }

                if (isPrime)
                    sumPrime += number;
                else
                    sumNotPrime += number;
            }
        }
        index++;
        currentNum = input[index];
    }

    console.log(`Sum of all prime numbers is: ${sumPrime}`);
    console.log(`Sum of all non prime numbers is: ${sumNotPrime}`);
}
solve(["0",
"-9",
"0",
"stop"])
