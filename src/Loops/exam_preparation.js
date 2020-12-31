function examPreparartion(input) {
    let badGrades = Number(input[0]);
    let gradesSum = 0;
    let gradesCount = 0;
    let badGradesCount = 0;
    let lastProblem = "";
    let index = 1;
    
    while (badGradesCount < badGrades) {
        let problemName = input[index];
        if (problemName == "Enough") {
            break;
        }

        let grade = Number(input[index+1]);
        if (grade <= 4) {
            badGradesCount++;
        }
        
        index += 2;
        gradesSum += grade;
        gradesCount++;
        lastProblem = problemName;
    }

    let avgGrade = gradesSum / gradesCount;

    if (badGradesCount == badGrades) {
        console.log(`You need a break, ${badGradesCount} poor grades.`);
    } else {
        console.log(`Average score: ${avgGrade.toFixed(2)}`);
        console.log(`Number of problems: ${gradesCount}`);
        console.log(`Last problem: ${lastProblem}`);
    }
}
examPreparartion(["3","Money","6","Story","4","Spring Time","5","Bus","6","Enough"])
examPreparartion(["2","Income","3","Game Info","6","Best Player","4"])
