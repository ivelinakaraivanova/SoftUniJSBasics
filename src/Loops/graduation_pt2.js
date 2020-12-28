function graduation(input) {
    let name = input[0];
    let sum = 0;
    let count = 1;
    let fails = 0;
    let idx = 0;

    while (count <= 12) {
        idx++
        let grade = Number(input[idx]);
        if (grade < 4)
        {
            fails++;
            if (fails > 1) 
                break;
        }
        
        sum += grade;

        count++;
    }

    let avg = sum / 12;

    if (fails > 1) {
        console.log(`${name} has been excluded at ${count-1} grade`);
    } else {
        console.log(`${name} graduated. Average grade: ${avg.toFixed(2)}`);
    }
}
graduation(["Gosho", "5","5.5","6","5.43","5.5","6","5.55","5","6","6","5.43","5"])
graduation(["Mimi", "5","6","5","6","5","6","6","2","3"])
