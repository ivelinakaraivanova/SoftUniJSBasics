function tickets(input) {
    let studentsCount = 0;
    let standardsCount = 0;
    let kidsCount = 0;
    let index = 0;

    while (true) {
        let movie = input[index];

        if (movie == "Finish")
            break;

        let seats = Number(input[index+1]);
        let idx = index + 2;
        let tickets = 0;
        let isEnd = false;

        while (tickets < seats) {
            let nextInput = input[idx];

            if (nextInput == "End") {
                isEnd = true;
                break;
            }

            if (nextInput == "student")
                studentsCount += 1;
            else if (nextInput == "standard")
                standardsCount += 1;
            else if (nextInput == "kid")
                kidsCount += 1;

            tickets += 1;
            idx++;
        }
        
        let fullPct = tickets / seats * 100;
        console.log(`${movie} - ${fullPct.toFixed(2)}% full.`);
        if (isEnd)
            index = idx+1;
        else {index = idx};
    }

    let totalTickets = studentsCount + standardsCount + kidsCount;
    let studentsPerc = studentsCount / totalTickets * 100;
    let standardsPerc = standardsCount / totalTickets * 100;
    let kidsPerc = kidsCount / totalTickets * 100;

    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${studentsPerc.toFixed(2)}% student tickets.`);
    console.log(`${standardsPerc.toFixed(2)}% standard tickets.`);
    console.log(`${kidsPerc.toFixed(2)}% kids tickets.`);
}
// tickets(["Taxi",
// "10",
// "standard",
// "kid",
// "student",
// "student",
// "standard",
// "standard",
// "End",
// "Scary Movie",
// "6",
// "student",
// "student",
// "student",
// "student",
// "student",
// "student",
// "Finish"])
tickets(["The Matrix",
"20",
"student",
"standard",
"kid",
"kid",
"student",
"student",
"standard",
"student",
"End",
"The Green Mile",
"17",
"student",
"standard",
"standard",
"student",
"standard",
"student",
"End",
"Amadeus",
"3",
"standard",
"standard",
"standard",
"Finish"])
