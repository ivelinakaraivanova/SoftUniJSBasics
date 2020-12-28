function skiTrip(days, roomType, rating) {
    days = Number(days);
    let discount = 0;
    let roomPrice = 0.0;
    let ratingRate = 0;

    if (roomType == "apartment") {
        roomPrice = 25.00;

        if ((days-1) < 10) {
            discount = 0.3;
        } else if ((days-1) >= 10 && (days-1) <= 15) {
            discount = 0.35;
        } else if ((days-1) > 15) {
            discount = 0.5;
        }
    } else if (roomType == "president apartment") {
        roomPrice = 35.00;
        
        if ((days-1) < 10) {
            discount = 0.1;
        } else if ((days-1) >= 10 && (days-1) <= 15) {
            discount = 0.15;
        } else if ((days-1) > 15) {
            discount = 0.2;
        }
    } else if (roomType == "room for one person") {
        roomPrice = 18.00;
    }

    if (rating == "positive") {
        ratingRate = 1.25;
    } else if (rating == "negative") {
        ratingRate = 0.9;
    }

    let price = ((days - 1) * roomPrice * (1-discount)) * ratingRate;
    console.log(`${price.toFixed(2)}`);
}

skiTrip("14","apartment","positive")
skiTrip("30","president apartment","negative")
