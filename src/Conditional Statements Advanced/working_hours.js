function workingHours(hour, weekDay) {
    hour = Number(hour);
    if ((hour >= 10 && hour <= 18) && weekDay != "Sunday") {
        console.log("open");
    } else {
        console.log("closed");
    }
}
workingHours("11","Monday")
workingHours("19","Friday")
workingHours("11","Sunday")
