function bDayParty(rentAmount){
    rentAmount = Number(rentAmount);
    let cakePrice = rentAmount * 0.2;
    let beveragesPrice = cakePrice * 0.55;
    let animatorPrice = rentAmount / 3;
    let totalPrice = rentAmount + cakePrice + beveragesPrice + animatorPrice;
    console.log(totalPrice);
}

bDayParty("3720")