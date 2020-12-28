function titles(age, gender) {
    age = Number(age);
    if (age >= 16) {
        if (gender == "m") {
            console.log("Mr.");
        } else {
            console.log("Ms.");
        } 
    } else {
        if (gender == "m") {
            console.log("Master");
        } else {
            console.log("Miss");
        }  
    }
}
titles("12","f")
titles("17","m")
titles("25","f")
titles("13.5","m")
