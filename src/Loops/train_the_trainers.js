function training(input) {
    let n = Number(input[0]);
    let index = 1;
    let presentation = input[index];

    let presentationCount = 0;
    let totalPresentationGrades = 0;

    while (presentation != "Finish") {
        let presentationGrades = 0.0;

        for (let i = 1; i <= n; i++) {
            let grade = Number(input[index+i]);
            presentationGrades += grade;
        }

        let avgPresGrade = presentationGrades / n;
        console.log(`${presentation} - ${avgPresGrade.toFixed(2)}.`);
        totalPresentationGrades += presentationGrades;
        presentationCount += 1;
        index += n+1;
        presentation = input[index];
    }

    let avgGrade = totalPresentationGrades / (n * presentationCount);
    console.log(`Student's final assessment is ${avgGrade.toFixed(2)}.`);

}
// training(["2",
// "While-Loop",
// "6.00",
// "5.50",
// "For-Loop",
// "5.84",
// "5.66",
// "Finish"])
// training(["3",
// "Arrays",
// "4.53",
// "5.23",
// "5.00",
// "Lists",
// "5.83",
// "6.00",
// "5.42",
// "Finish"])
training(["2",
"Objects and Classes",
"5.77",
"4.23",
"Dictionaries",
"4.62",
"5.02",
"RegEx",
"2.88",
"3.42",
"Finish"])
