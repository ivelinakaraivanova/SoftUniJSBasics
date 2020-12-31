function steps(input) {
    let totalSteps = 0;
    let index = 0;

    while (totalSteps < 10000) {
        let currentSteps = input[index];
        
        if (currentSteps == "Going home") {
            let lastSteps = Number(input[index+1]);
            totalSteps += lastSteps;
            break;
        }

        totalSteps += Number(currentSteps);
        index ++;
    }

    if (totalSteps >= 10000) {
        console.log("Goal reached! Good job!");
        console.log(`${totalSteps - 10000} steps over the goal!`)
    } else {
        console.log(`${10000-totalSteps} more steps to reach goal.`);
    }
}
//steps(["1000","1500","2000","6500"])
//steps(["1500","300","2500","3000","Going home","200"])
//steps(["1500","3000","250","1548","2000","Going home","2000"])
steps(["125","250","4000","30","2678","4682"])
