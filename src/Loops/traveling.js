function travelling(input) {
    let index = 0;

    while (true) {
        
        let destination = input[index];
        
        if (destination == "End") {
            break;
        }
        
        let budget = Number(input[index+1]);
        let acumulatedAmount = 0;
        let idx = index + 2

        while (acumulatedAmount < budget) {
            
            let nextInput = input[idx];
            
            if (nextInput == "End") {
                return;
            }

            let amount = Number(nextInput);
            acumulatedAmount += amount;
            idx++;
        }
        
        console.log(`Going to ${destination}!`);
        index = idx;
    }
}
// travelling(["Greece",
// "1000",
// "200",
// "200",
// "300",
// "100",
// "150",
// "240",
// "Spain",
// "1200",
// "300",
// "500",
// "193",
// "423",
// "End"])
travelling(["France",
"2000",
"300",
"300",
"200",
"400",
"190",
"258",
"360",
"Portugal",
"1450",
"400",
"400",
"200",
"300",
"300",
"Egypt",
"1900",
"1000",
"280",
"300",
"500",
"End"])
