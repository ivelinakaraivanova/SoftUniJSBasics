function readText(text) {
    let index = 0;
    while (true) {
        let str = text[index];
        index ++;
        if (str == "Stop") {
            break;
        }
        console.log(str);
    }
}
readText(["Nakov", "SoftUni", "Sofia", "Bulgaria", "SomeText", "Stop", "AfterStop","Europe", "HelloWorld"])
readText(["Sofia","Berlin","Moscow","Athens","Madrid","London","Paris","Stop","AfterStop"])
