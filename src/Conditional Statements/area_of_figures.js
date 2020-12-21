function areaCalculation(figure, num1, num2) {
    let area = 0;
    if (figure == "square") {
        let side = Number(num1);
        area = side ** 2;
    } else if (figure == "rectangle") {
        let sideA = Number(num1);
        let sideB = Number(num2);
        area = sideA * sideB;
    } else if (figure == "circle") {
        let radius = Number(num1);
        area = (radius ** 2) * Math.PI;
    } else {
        let side = Number(num1);
        let height = Number(num2)
        area = side * height / 2
    }
    console.log(area)
}
areaCalculation("square", "5")
areaCalculation("rectangle","7","2.5")
areaCalculation("circle","6")
areaCalculation("triangle","4.5","20")
