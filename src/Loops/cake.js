function cake(input) {
    let length = Number(input[0]);
    let width = Number(input[1]);

    let cake = length * width;
    let index = 2;
    let currentPiece = input[index];
    
    while (currentPiece != "STOP") {
        cake -= Number(currentPiece);

        if (cake < 0) {
            break;
        }

        index ++;
        currentPiece = input[index];
    }

    if (cake < 0) {
        console.log(`No more cake left! You need ${Math.abs(cake)} pieces more.`);
    } else {
        console.log(`${cake} pieces are left.`);
    }
}
//cake(["10","10","20","20","20","20","21"])
cake(["10","2","2","4","6","STOP"])
