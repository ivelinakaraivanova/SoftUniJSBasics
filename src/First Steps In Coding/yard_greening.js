function greening(sqMeters) {
    let finalPrice = Number(sqMeters) * 7.61 * 0.82;
    let discount = Number(sqMeters) * 7.61 * 0.18;
    console.log(`The final price is: ${finalPrice} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}
greening("150");