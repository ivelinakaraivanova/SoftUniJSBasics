function moving(input) {
    let width = Number(input[0]);
    let length = Number(input[1]);
    let height = Number(input[2]);
    
    let space = width * length * height;
    let boxesVolume = 0;
    let freeSpace = 0;
    let currentBox = input[3]
    let idx = 4;

    while (currentBox != "Done") {
        let boxNumber = Number(currentBox);
        boxesVolume += boxNumber;
        freeSpace = space - boxesVolume;

        if (freeSpace < 0) {
            break;
        }

        currentBox = input[idx];
        idx++
    }

    if (freeSpace < 0) {
        console.log(`No more free space! You need ${Math.abs(freeSpace)} Cubic meters more.`);
    } else {
        console.log(`${freeSpace} Cubic meters left.`);
    }
}

moving(["10", "10","2","20","20","20","20","122"])
moving(["10","1","2","4","6","Done"])
