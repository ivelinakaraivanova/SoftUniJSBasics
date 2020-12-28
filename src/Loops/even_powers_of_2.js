function powersOf2(n) {
    n = Number(n);
    for (i = 0; i <= n; i += 2) {
        let num = Math.pow(2, i);
        console.log(num)
    }
}
powersOf2(7)