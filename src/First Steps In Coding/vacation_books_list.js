function vacantionBooksList(bookPages, hourPages, days){
    bookPages = Number(bookPages);
    hourPages = Number(hourPages);
    days = Number(days);
    let totalTime = bookPages / hourPages;
    let hoursPerDay = totalTime / days;
    console.log(hoursPerDay);
}
vacantionBooksList("432","15","4")

