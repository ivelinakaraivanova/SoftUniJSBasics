function range(num) {
    num = Number(num);
    if (num >= -100 && num <= 100 && num != 0) {
        console.log("Yes");
    } else {
        console.log("No");
    }
}
range("-25")
range("0")
range("25")