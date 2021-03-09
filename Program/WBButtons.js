function minusB() {
    var temp = 0;
    if (lastactionOUT == 0) {
        temp = gradBCorr - (360 / 111)
    } else {
        temp = gradBCorr + (360 / 111)
    }
    document.getElementById("correctionOUT").style.transform = "translate(-50%,-50%) rotate(" + temp + "deg)";
    propOUT.angle=temp;
    //new Propeller(document.getElementById('correctionOUT'), {
    //    inertia: 0,
    //    speed: 0,
    //    angle: temp
    //});
}

function plusB() {
    var temp = 0;
    if (lastactionOUT == 0) {
        temp = gradBCorr + (360 / 111)
    } else {
        temp = gradBCorr - (360 / 111)
    }
    document.getElementById("correctionOUT").style.transform = "translate(-50%,-50%) rotate(" + temp + "deg)";
    propOUT.angle=temp;
    //new Propeller(document.getElementById('correctionOUT'), {
    //    inertia: 0,
    //    speed: 0,
    //    angle: temp
    //});
}

function minusW() {
    var temp = 0;
    if (lastactionIN == 0) {
        temp = gradWCorr - (360 / 111)
    } else {
        temp = gradWCorr + (360 / 111)
    }
    document.getElementById("correctionIN").style.transform = "translate(-50%,-50%) rotate(" + temp + "deg)";
    propIN.angle=temp;
    //new Propeller(document.getElementById('correctionIN'), {
    //    inertia: 0,
    //    speed: 0,
    //    angle: temp
    //});
}

function plusW() {
    var temp = 0;
    if (lastactionIN == 0) {
        temp = gradWCorr + (360 / 111)
    } else {
        temp = gradWCorr - (360 / 111)
    }
    document.getElementById("correctionIN").style.transform = "translate(-50%,-50%) rotate(" + temp + "deg)";
    propIN.angle=temp;
    // new Propeller(document.getElementById('correctionIN'), {
    //    inertia: 0,
    //    speed: 0,
    //    angle: temp
    //});
}