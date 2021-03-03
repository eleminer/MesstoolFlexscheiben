function minusB() {
    new Propeller(document.getElementById('correctionOUT'), {
        inertia: 0,
        speed: 0,
        angle: gradBCorr - (360 / 111)
    });
}

function plusB() {
    new Propeller(document.getElementById('correctionOUT'), {
        inertia: 0,
        speed: 0,
        angle: gradBCorr + (360 / 111)
    });
}

function minusW() {
    new Propeller(document.getElementById('correctionIN'), {
        inertia: 0,
        speed: 0,
        angle: gradWCorr - (360 / 111)
    });
}

function plusW() {
    new Propeller(document.getElementById('correctionIN'), {
        inertia: 0,
        speed: 0,
        angle: gradWCorr + (360 / 111)
    });
}