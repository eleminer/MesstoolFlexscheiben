var myVar;
var myVar2;
var myVar3;
var degW = 0;
var degB = 0;
var bclockwise = 0;
var bcounterclockwise = 0;
var wclockwise = 0;
var wcounterclockwise = 0;
var resetvar = 0;
var positionOUT = 90 + 360;
var positionIN = 90 + 360;
var speed = 1;
var speed = 1;
var duration;
var durationIN = 1;
var durationOUT = 1;
var divider2 = 100;
var divider3 = 100;
var outPredict = 90 + 360;
var inPredict = 90 + 360;
var angleincorrection = 90;
var angleoutcorrection = 90;
var currentCorrectionPositionOUT = 90;
var currentCorrectionPositionIN = 90;

myFunction();

function myFunction() {
    myVar = setInterval(alertFunc, 10);
}

function myFunction2() {
    myVar2 = setInterval(alertFunc2, ((speed * 1000) / divider2));
}

function myFunction3() {
    myVar3 = setInterval(alertFunc3, ((speed1 * 1000) / divider3));
}

function alertFunc2() {
    if (360 >= positionOUT) {
        positionOUT = positionOUT + 360;
    }
    if (bclockwise == 1) {
        positionOUT = positionOUT + ((360 / 111) / divider2);
        document.getElementById("pointOut").style.transform = "translate(-50%,-50%) rotate(" + positionOUT + "deg)";
        durationOUT = durationOUT - (speed / divider2);
    }
    if (bcounterclockwise == 1) {
        positionOUT = positionOUT - ((360 / 111) / divider2);
        document.getElementById("pointOut").style.transform = "translate(-50%,-50%) rotate(" + positionOUT + "deg)";
        durationOUT = durationOUT - (speed / divider2);
    }
    if (durationOUT <= 0) {
        bclockwise = 0;
        bcounterclockwise = 0;
        document.getElementById("pointOut").style.transform = "translate(-50%,-50%) rotate(" + positionOUT + "deg)";
        clearInterval(myVar2);
    }
}

function alertFunc3() {
    if (360 >= positionIN) {
        positionIN = positionIN + 360;
    }
    if (wclockwise == 1) {
        positionIN = positionIN + ((360 / 111) / divider3);
        document.getElementById("pointOut1").style.transform = "translate(-50%,-50%) rotate(" + positionIN + "deg)";
        durationIN = durationIN - (speed1 / divider3);
    }
    if (wcounterclockwise == 1) {
        positionIN = positionIN - ((360 / 111) / divider3);
        document.getElementById("pointOut1").style.transform = "translate(-50%,-50%) rotate(" + positionIN + "deg)";
        durationIN = durationIN - (speed1 / divider3);
    }
    if (durationIN <= 0) {
        wclockwise = 0;
        wcounterclockwise = 0;
        document.getElementById("pointOut1").style.transform = "translate(-50%,-50%) rotate(" + positionIN + "deg)";
        clearInterval(myVar3);
    }
}

function alertFunc() {
    var incircle;
    var outcircle;
    if (112 == Math.round((((positionOUT - 90) % 360) / (360 / 111)) + 1)) {
        outcircle = Math.round((((positionOUT - 90) % 360) / (360 / 111)) - 110);
    } else {
        outcircle = Math.round((((positionOUT - 90) % 360) / (360 / 111)) + 1);
    }
    if (112 == Math.round((((positionIN - 90) % 360) / (360 / 111)) + 1)) {
        incircle = Math.round((((positionIN - 90) % 360) / (360 / 111)) - 110);
    } else {
        incircle = Math.round((((positionIN - 90) % 360) / (360 / 111)) + 1);
    }

    document.getElementById("insertoutsektor").innerHTML = outcircle;
    document.getElementById("insertinsektor").innerHTML = incircle;

    document.getElementById("numberOUTCorrection").innerHTML = currentCorrectionPositionOUT;
    document.getElementById("numberINCorrection").innerHTML = currentCorrectionPositionIN;



    while (360 >= outPredict) {
        outPredict = outPredict + 360;
    }
    while (360 >= inPredict) {
        inPredict = inPredict + 360;
    }
    var incircleY;
    var outcircleY;
    if (112 == Math.round((((outPredict - 90) % 360) / (360 / 111)) + 1)) {
        outcircleY = Math.round((((outPredict - 90) % 360) / (360 / 111)) - 110);
    } else {
        outcircleY = Math.round((((outPredict - 90) % 360) / (360 / 111)) + 1);
    }
    if (112 == Math.round((((inPredict - 90) % 360) / (360 / 111)) + 1)) {
        incircleY = Math.round((((inPredict - 90) % 360) / (360 / 111)) - 110);
    } else {
        incircleY = Math.round((((inPredict - 90) % 360) / (360 / 111)) + 1);
    }

    document.getElementById("insertoutsektorpredict").innerHTML = outcircleY;
    document.getElementById("insertinsektorpredict").innerHTML = incircleY;
    document.getElementById("yellowOUT").style.transform = "translate(-50%,-50%) rotate(" + outPredict + "deg)";
    document.getElementById("yellowIN").style.transform = "translate(-50%,-50%) rotate(" + inPredict + "deg)";



    if (resetvar == 1) {
        positionOUT = 90;
        positionIN = 90;
        document.getElementById("pointOut1").style.transform = "translate(-50%,-50%) rotate(90deg)";
        document.getElementById("pointOut").style.transform = "translate(-50%,-50%) rotate(90deg)";
        resetvar = 0;
        wclockwise = 0;
        wcounterclockwise = 0;
        bclockwise = 0;
        bcounterclockwise = 0;
        inPredict = 90;
        outPredict = 90;

    }
}

function testinputSpeed() {
    if (speed < 0.05 || speed > 10000) {
        alert('Geschwindigkeit außerhalb der Animationsgeschwindigkeit!\nBitte einen Wert größer/gleich 0.05 eingeben und niedriger als 10000!');
        reset();
    }
}

function Bcounterclockwise() {
    if (bcounterclockwise == 0 && bclockwise == 0) {
        positionOUT = outPredict;
        speed = document.getElementById("speedInputField").value;
        duration = document.getElementById("durationInputField").value;
        durationOUT = duration;
        divider2 = (speed * 1000) / 10;

        outPredict = outPredict - (((1 / speed) * duration) * (360 / 111));

        testinputSpeed();
        bcounterclockwise = 1;
        myFunction2();
    }
}

function Bclockwise() {
    if (bclockwise == 0 && bcounterclockwise == 0) {
        positionOUT = outPredict;
        speed = document.getElementById("speedInputField").value;
        duration = document.getElementById("durationInputField").value;
        durationOUT = duration;
        divider2 = (speed * 1000) / 10;

        outPredict = outPredict + (((1 / speed) * duration) * (360 / 111));

        testinputSpeed();
        bclockwise = 1;
        myFunction2();
    }
}

function reset() {
    clearInterval(myVar2);
    clearInterval(myVar3);
    resetvar = 1;
}

function Wcounterclockwise() {
    if (wcounterclockwise == 0 && wclockwise == 0) {
        positionIN = inPredict;
        speed1 = document.getElementById("speedInputField").value;
        duration = document.getElementById("durationInputField").value;
        durationIN = duration;
        divider3 = (speed1 * 1000) / 10;

        inPredict = inPredict - (((1 / speed1) * duration) * (360 / 111));

        testinputSpeed();
        wcounterclockwise = 1;
        myFunction3();
    }
}

function Wclockwise() {
    if (wclockwise == 0 && wcounterclockwise == 0) {
        positionIN = inPredict;
        speed1 = document.getElementById("speedInputField").value;
        duration = document.getElementById("durationInputField").value;
        durationIN = duration;
        divider3 = (speed1 * 1000) / 10;

        inPredict = inPredict + (((1 / speed1) * duration) * (360 / 111));

        testinputSpeed();
        wclockwise = 1;
        myFunction3();
    }
}


function resetcorrectionB() {
    document.getElementById("correctionOUT").style.transform = "translate(-50%,-50%) rotate(" + angleoutcorrection + "deg)";
    new Propeller(document.getElementById('correctionOUT'), {
        inertia: 0,
        speed: 0,
        angle: 90
    });
}

function resetcorrectionW() {
    document.getElementById("correctionIN").style.transform = "translate(-50%,-50%) rotate(" + angleincorrection + "deg)";
    new Propeller(document.getElementById('correctionIN'), {
        inertia: 0,
        speed: 0,
        angle: 90
    });
}