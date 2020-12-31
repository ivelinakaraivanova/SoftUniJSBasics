function coins(input) {
    let initialChange = Number(input);

    initialChange *= 100;
    let change = Math.round(initialChange, 0);
    let count = 0;

    while (change > 0) {
        if (change >= 200) {
            change -= 200;
            count += 1;
        } else if(change >= 100) {
            change -= 100;
            count += 1;
        } else if (change >= 50) {
            change -= 50;
            count += 1;
        } else if (change >= 20) {
            change -= 20;
            count += 1;
        } else if (change >= 10) {
            change -= 10;
            count += 1;
        } else if (change >= 5) {
            change -= 5;
            count += 1;
        } else if (change >= 2) {
            change -= 2;
            count += 1;
        } else if (change >= 1) {
            change -= 1;
            count += 1;
        }
    }

    console.log(count);
}

coins(["1.23"])
coins(["2"])
coins(["0.56"])
coins(["2.73"])