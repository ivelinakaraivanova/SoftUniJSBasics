function shop(product, town, quantity) {
    quantity = Number(quantity);
    let price = 0
    if (town == "Sofia") {
        if (product == "coffee") {
            price = quantity * 0.5;
        } else if (product == "water") {
            price = quantity * 0.8;
        } else if (product == "beer") {
            price = quantity * 1.2;
        } else if (product == "sweets") {
            price = quantity * 1.45;
        } else if (product == "peanuts") {
            price = quantity * 1.6;
        }
    } else if (town == "Plovdiv") {
        if (product == "coffee") {
            price = quantity * 0.4;
        } else if (product == "water") {
            price = quantity * 0.7;
        } else if (product == "beer") {
            price = quantity * 1.15;
        } else if (product == "sweets") {
            price = quantity * 1.3;
        } else if (product == "peanuts") {
            price = quantity * 1.5;
        }
    } else if (town == "Varna") {
        if (product == "coffee") {
            price = quantity * 0.45;
        } else if (product == "water") {
            price = quantity * 0.7;
        } else if (product == "beer") {
            price = quantity * 1.1;
        } else if (product == "sweets") {
            price = quantity * 1.35;
        } else if (product == "peanuts") {
            price = quantity * 1.55;
        }
    }
    console.log(price);
}
shop("coffee","Varna","2")
shop("peanuts","Plovdiv","1")
shop("beer","Sofia","6")
shop("water","Plovdiv","3")
shop("sweets","Sofia","2.23")
