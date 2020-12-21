function excursion(price, puzzles, dolls, teddys, minions, trucks) {
    price = Number(price);
    puzzles = Number(puzzles);
    dolls = Number(dolls);
    teddys = Number(teddys);
    minions = Number(minions);
    trucks = Number(trucks);
    
    let totalPrice = puzzles * 2.6 + dolls * 3 + teddys * 4.1 + minions * 8.2 + trucks * 2;
    let toysNumber = puzzles + dolls + teddys + minions + trucks;

    if (toysNumber >= 50) {
        totalPrice = totalPrice * 0.75;
    }
    let finalPrice = totalPrice * 0.9;

    if (finalPrice >= price) {
        console.log(`Yes! ${(finalPrice - price).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(price - finalPrice).toFixed(2)} lv needed.`);
    }
}
excursion("40.8", "20", "25", "30", "50", "10")
excursion("320", "8", "2", "5", "5", "1")