function cleverLilly(age, washingMachinePrice, toyPrice) {
    age = Number(age);
    washingMachinePrice = Number(washingMachinePrice);
    toyPrice = Number(toyPrice);
    let amount = 0;
    let money = 0;
    let toyCount = 0;
    let brotherMoney = 0;

    for (let year = 1; year <= age; year++) {
        if (year % 2 == 0) {
            money += 10;
            amount += money;
            brotherMoney += 1;
        } else {
            toyCount += 1;
        }
    }

    amount = amount + toyCount * toyPrice - brotherMoney;
    let diff = Math.abs(amount - washingMachinePrice);

    if (amount >= washingMachinePrice)
    {
        console.log(`Yes! ${diff.toFixed(2)}`);
    } else {
        console.log(`No! ${diff.toFixed(2)}`);
    }
}
cleverLilly("10", "170", "6");
cleverLilly("21", "1570.98", "3")