function vacantion(input) {
    let excursionBudget = Number(input[0]);
    let money = Number(input[1]);

    let spendingDays = 0;
    let pastDays = 0;

    let index = 2;

    while (money < excursionBudget && spendingDays < 5)
    {
        let action = input[index];
        let newAmount = Number(input[index+1]);

        if (action == "spend") {
            spendingDays += 1;
            money -= newAmount;

            if (money < 0) {
                money = 0;
            }
        } else {
            money += newAmount;
            spendingDays = 0;
        }
        pastDays += 1;

        index += 2;
    }

    if (spendingDays == 5) {
        console.log("You can't save the money.");
        console.log(pastDays);
    }
    if (money >= excursionBudget) {
        console.log(`You saved the money for ${pastDays} days.`);
    }
}

vacantion(["2000","1000","spend","1200","save","2000"])
vacantion(["110","60","spend","10","spend","10","spend","10","spend","10","spend","10"])
vacantion(["250","150","spend", "50","spend","50","save","100","save","100"])