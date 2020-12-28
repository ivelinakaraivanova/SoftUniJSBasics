function oldBooks(input) {
    let book = input[0];
    let idx = 1;
    let currentBook = input[idx];
    let isFound = false;
    
    while (currentBook != "No More Books") {
        
        if (currentBook == book) {
            isFound = true;
            break;
        }

        idx++;
        currentBook = input[idx];
    }

    if (isFound == true) {
        console.log(`You checked ${idx-1} books and found it.`);
    } else {
        console.log("The book you search is not here!");
        console.log(`You checked ${idx - 1} books.`);
    } 
}
oldBooks(["Troy","Stronger","Life Style","Troy"])
oldBooks(["The Spot","Hunger Games","Harry Potter","Torronto","Spotify","No More Books"])
oldBooks(["Bourne","True Story","Forever","More Space","The Girl","Spaceship","Strongest","Profit","Tripple",
"Stella","The Matrix","Bourne"])
