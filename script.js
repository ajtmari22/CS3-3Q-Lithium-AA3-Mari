function hiddenMessage() {
    let verifyMsg = prompt("Enter your message to verify: ");

    let confirmFR = verifyMsg.indexOf("FR") !== -1;
    let confirmAI = verifyMsg.indexOf("AI") !== -1;
    let confirmLowerAi = (verifyMsg.indexOf("aI") !== -1) || (verifyMsg.indexOf("Ai") !== -1);

    if (confirmFR && confirmAI) {
        document.getElementById("result").innerHTML = `The message "${verifyMsg}" is legitimate!`;
    } else if (confirmAI || confirmLowerAi) {
        document.getElementById("result").innerHTML = `The message "${verifyMsg}" is fake!`;
    } else if (confirmFR) {
        document.getElementById("result").innerHTML = `The message "${verifyMsg}" is legitimate!`;
    } else {
        document.getElementById("result").innerHTML = `The message "${verifyMsg}" is not yet encoded!`;
    }
}

