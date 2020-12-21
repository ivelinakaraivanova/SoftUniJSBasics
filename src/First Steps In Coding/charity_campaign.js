function campaign(days, cookers, cakes, waffles, pancakes){
    days = Number(days);
    cookers = Number(cookers);
    cakes = Number(cakes);
    waffles = Number(waffles);
    pancakes = Number(pancakes);
    let cookerAmountPerDay = cakes * 45 + waffles * 5.8 + pancakes * 3.2;
    let totalAmountPerDay = cookers * cookerAmountPerDay;
    let totalAmount = totalAmountPerDay * days;
    let finalAmount = totalAmount /8 * 7;
    console.log(finalAmount);
}
campaign("23","8","14","30","16")
campaign("131","5","9","33","46")

