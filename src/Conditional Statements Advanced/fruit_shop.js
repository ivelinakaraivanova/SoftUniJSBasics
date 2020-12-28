function fruitShop(fruit, day, quantity) {
    let singlePrice = 0;

    switch (day) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            switch (fruit) {
                case "banana": 
                    singlePrice = 2.5;
                    break;
                case "apple": 
                    singlePrice = 1.2;
                    break;
                case "orange": 
                    singlePrice = 0.85;
                    break;
                case "grapefruit": 
                    singlePrice = 1.45;
                    break;
                case "kiwi": 
                    singlePrice = 2.7;
                    break;
                case "pineapple": 
                    singlePrice = 5.5;
                    break;
                case "grapes": 
                    singlePrice = 3.85;
                    break;
            }
            break;
        case "Saturday":
        case "Sunday":
            switch (fruit) {
                case "banana": 
                    singlePrice = 2.7;
                    break;
                case "apple": 
                    singlePrice = 1.25;
                    break;
                case "orange": 
                    singlePrice = 0.9;
                    break;
                case "grapefruit": 
                    singlePrice = 1.6;
                    break;
                case "kiwi": 
                    singlePrice = 3.0;
                    break;
                case "pineapple": 
                    singlePrice = 5.6;
                    break;
                case "grapes": 
                    singlePrice = 4.2;
                    break;
            }
            break;
    }

    if (singlePrice != 0)
            {
                let price = quantity * singlePrice;
                console.log(`${price.toFixed(2)}`);
            } else {
                console.log("error");
            }
}
fruitShop("apple","Tuesday","2")
fruitShop("orange","Sunday","3")
fruitShop("kiwi","Monday","2.5")
fruitShop("grapes","Saturday","0.5")
fruitShop("tomato","Monday","0.5")
