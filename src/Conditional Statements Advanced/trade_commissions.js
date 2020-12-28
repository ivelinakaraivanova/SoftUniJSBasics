function tradeComm(town, volume) {
    volume = Number(volume);
    let singleCommission = 0.0;
    if (volume >= 0.0 && volume <= 500.0) {
        if (town == "Sofia") {
            singleCommission = 0.05;
        } else if (town == "Varna") {
            singleCommission = 0.045;
        } else if (town == "Plovdiv") {
            singleCommission = 0.055;
        }
    } else if (volume > 500.0 && volume <= 1000.0) {
        if (town == "Sofia") {
            singleCommission = 0.07;
        } else if (town == "Varna") {
            singleCommission = 0.075;
        } else if (town == "Plovdiv") {
            singleCommission = 0.08;
        }
    } else if (volume > 1000.0 && volume <= 10000.0) {
        if (town == "Sofia") {
            singleCommission = 0.08;
        } else if (town == "Varna") {
            singleCommission = 0.1;
        } else if (town == "Plovdiv") {
            singleCommission = 0.12;
        }
    } else if (volume > 10000.0) {
        if (town == "Sofia") {
            singleCommission = 0.12;
        } else if (town == "Varna") {
            singleCommission = 0.13;
        } else if (town == "Plovdiv") {
            singleCommission = 0.145;
        }
    } if (singleCommission > 0) {
        let commission = volume * singleCommission;
        console.log(`${commission.toFixed(2)}`);
    } else {
        console.log("error");
    }
}

tradeComm("Sofia","1500")
tradeComm("Plovdiv","499.99")
tradeComm("Varna","3874.50")
tradeComm("Kaspichan","-50")
