function balance(input) {
    let totalAmount = 0;
    let deposit = input[0];
    let idx = 1;
    while (deposit != "NoMoreMoney") {
        let amount = Number(deposit);
        if (amount >= 0) {
        console.log(`Increase: ${amount.toFixed(2)}`);
        totalAmount += amount;
        deposit = input[idx];
        idx++;
        } else {
            console.log("Invalid operation!");
            break;
        }
    }
    console.log(`Total: ${totalAmount.toFixed(2)}`)
}
balance(["5.51", "69.42","100","NoMoreMoney"])
balance(["120","45.55","-150"])

