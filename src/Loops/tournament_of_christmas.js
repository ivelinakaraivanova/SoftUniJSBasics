function tournament(input) {
    let days = Number(input[0]);

    let raisedMoney = 0;
    let winDays = 0;
    let index = 0;

    for (let day = 1; day <= days; day++) {
        index += 1;
        let command = input[index];

        let wonGames = 0;
        let lostGames = 0;
        let dailyRaisedMoney = 0;

        while (command != "Finish") {
            let result = input[index+1];

            if (result == "win") {
                dailyRaisedMoney += 20;
                wonGames += 1;
            } else {
                lostGames += 1;
            }
            index += 2;
            command = input[index];
        }

        if (wonGames > lostGames) {
            dailyRaisedMoney *= 1.1;
            winDays += 1;
        }

        raisedMoney += dailyRaisedMoney;
    }

    if (winDays > (days/2.0)) {
        raisedMoney *= 1.2;
        console.log(`You won the tournament! Total raised money: ${raisedMoney.toFixed(2)}`);
    } else {
        console.log(`You lost the tournament! Total raised money: ${raisedMoney.toFixed(2)}`);
    }
}
// tournament(["2",
// "volleyball",
// "win",
// "football",
// "lose",
// "basketball",
// "win",
// "Finish",
// "golf",
// "win",
// "tennis",
// "win",
// "badminton",
// "win",
// "Finish"])
tournament([
    "3",
    "darts",
    "lose",
    "handball",
    "lose",
    "judo",
    "win",
    "Finish",
    "snooker",
    "lose",
    "swimming",
    "lose",
    "squash",
    "lose",
    "table tennis",
    "win",
    "Finish",
    "volleyball",
    "win",
    "basketball",
    "win",
    "Finish"
])
