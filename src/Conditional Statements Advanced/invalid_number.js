function checkNumber(num) {
    number = Number(num);
    let isValid = (number >= 100 && number <= 200) || number == 0;
    if (!isValid) {
        console.log("invalid");
    }
}
checkNumber("75")
checkNumber("150")
checkNumber("-1")
checkNumber("0")