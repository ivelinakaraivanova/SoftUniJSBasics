function specialNumbers(n) {
    n = Number(n);
    let linePrint = ""

    for (let number = 1111; number <= 9999; number++) {
        let currentNumber = number.toString();
        let counter = 0;
        
        for (let position = 0; position < currentNumber.length; position++) {
            let digit = Math.trunc(Number(currentNumber[position]));
            if (digit != 0)
                if ((n % digit) == 0)
                    counter += 1;
        }

        if (counter == 4) {
            linePrint += `${number} `;
        }
    }
    console.log(linePrint);
};
specialNumbers(["3"])
specialNumbers(["11"])
specialNumbers(["16"])