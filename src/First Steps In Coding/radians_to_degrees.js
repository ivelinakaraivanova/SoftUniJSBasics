function radiansToDegrees(radians){
    let pi = Math.PI;
    let degrees = radians * 180 /pi;
    console.log(degrees.toFixed(0));
}
radiansToDegrees("0.7854");