function building(input) {
    let floors = Number(input[0]);
    let roomsCount = Number(input[1]);

    for (let f = floors; f >= 1; f--) {;
        let line = ""
        for (let r = 0; r < roomsCount; r++) {
            if (f == floors) {
                line += `L${f}${r} `;
            } else {
                if (f % 2 == 0) {
                    line += `O${f}${r} `;
                } else {
                    line += `A${f}${r} `;
                }
            }
        }
        console.log(line);
    }
}
// building(["6", "4"])
building(["9", "5"])