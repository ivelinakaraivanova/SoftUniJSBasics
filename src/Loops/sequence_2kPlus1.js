function sequence(n) {
    n = Number(n);
    let counter = 1;
    while (counter <= n) {
        console.log(counter);
        counter = 2 * counter + 1;
    }
}
sequence(["16"])