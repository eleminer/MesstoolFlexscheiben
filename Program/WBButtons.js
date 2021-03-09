function minusB() {
    var temp = 0;
    if (lastactionOUT == 0) {
        temp = gradBCorr - (360 / 111)
    } else {
        temp = gradBCorr + (360 / 111)
    }
    propOUT.angle=temp;
}

function plusB() {
    var temp = 0;
    if (lastactionOUT == 0) {
        temp = gradBCorr + (360 / 111)
    } else {
        temp = gradBCorr - (360 / 111)
    }
    propOUT.angle=temp;
}

function minusW() {
    var temp = 0;
    if (lastactionIN == 0) {
        temp = gradWCorr - (360 / 111)
    } else {
        temp = gradWCorr + (360 / 111)
    }
    propIN.angle=temp;
}

function plusW() {
    var temp = 0;
    if (lastactionIN == 0) {
        temp = gradWCorr + (360 / 111)
    } else {
        temp = gradWCorr - (360 / 111)
    }
    propIN.angle=temp;
}