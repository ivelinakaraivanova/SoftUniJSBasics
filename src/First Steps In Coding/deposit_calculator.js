function deposit(depositAmount, depositTerm, interestPerc){
    let interestAmount = (Number(depositAmount) * Number(interestPerc)) / 100;
    let monthInterest = interestAmount / 12;
    let finalAmount = Number(depositAmount) + Number(depositTerm) * monthInterest;
    console.log(finalAmount);
}
deposit("2350","6","7")
