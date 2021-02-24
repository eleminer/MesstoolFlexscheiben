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
var positionOUT = 90;
var positionIN = 90;
var speed = 1;
var duration;
var durationIN = 1;
var durationOUT = 1;
/*
W=document.getElementById("pointOut1").style.transform = "translate(-50%,-50%) rotate(0deg)";
B=document.getElementById("pointOut").style.transform = "translate(-50%,-50%) rotate(0deg)";
*/
myFunction();

function myFunction() {
    myVar = setInterval(alertFunc, 10);
}

function myFunction2() {
    myVar2 = setInterval(alertFunc2, (speed * 1000));
}

function myFunction3() {
    myVar3 = setInterval(alertFunc3, (speed * 1000));
}

function alertFunc2() {
    if (bclockwise == 1) {
        document.getElementById("pointOut").style.transform = "translate(-50%,-50%) rotate(" + positionOUT + "deg)";
        positionOUT = positionOUT + (360 / 111);
        durationOUT = durationOUT - speed;
    }
    if (bcounterclockwise == 1) {
        document.getElementById("pointOut").style.transform = "translate(-50%,-50%) rotate(" + positionOUT + "deg)";
        positionOUT = positionOUT - (360 / 111);
        durationOUT = durationOUT - speed;
    }
    if (durationOUT <= 0) {
        bclockwise = 0;
        bcounterclockwise = 0;
        document.getElementById("pointOut").style.transform = "translate(-50%,-50%) rotate(" + positionOUT + "deg)";
        clearInterval(myVar2);
    }
}

function alertFunc3() {
    if (wclockwise == 1) {
        document.getElementById("pointOut1").style.transform = "translate(-50%,-50%) rotate(" + positionIN + "deg)";
        positionIN = positionIN + (360 / 111);
        durationIN = durationIN - speed;
    }
    if (wcounterclockwise == 1) {
        document.getElementById("pointOut1").style.transform = "translate(-50%,-50%) rotate(" + positionIN + "deg)";
        positionIN = positionIN - (360 / 111);
        durationIN = durationIN - speed;
    }
    if (durationIN <= 0) {
        wclockwise = 0;
        wcounterclockwise = 0;
        document.getElementById("pointOut1").style.transform = "translate(-50%,-50%) rotate(" + positionIN + "deg)";
        clearInterval(myVar3);
    }
}

function alertFunc() {
    var outsektormath = ((positionOUT % 360) / (360 / 111));
    if (outsektormath >= ((90 % 360) / (360 / 111))) {
        outsektormath = outsektormath - ((90 % 360) / (360 / 111));
    } else {
        outsektormath = Math.abs(outsektormath) + 3 * (((90 % 360) / (360 / 111)));
    }
    var insektormath = ((positionIN % 360) / (360 / 111));
    if (insektormath >= ((90 % 360) / (360 / 111))) {
        insektormath = insektormath - ((90 % 360) / (360 / 111));
    } else {
        insektormath = Math.abs(insektormath) + 3 * (((90 % 360) / (360 / 111)));
    }

    document.getElementById("insertoutsektor").innerHTML = Math.round(outsektormath + 0.5);
    document.getElementById("insertinsektor").innerHTML = Math.round(insektormath + 0.5);;

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

    }
}

function testinputSpeed() {
    if (speed < 0.01 || speed > 10000) {
        alert('Geschwindigkeit außerhalb der Animationsgeschwindigkeit!\nBitte einen Wert größer/gleich 0.01 eingeben und niedriger als 10000!');
    }
}

function Bcounterclockwise() {
    speed = document.getElementById("speedInputField").value;
    duration = document.getElementById("durationInputField").value;
    durationOUT = duration;
    testinputSpeed();
    bcounterclockwise = 1;
    myFunction2();
}

function Bclockwise() {
    speed = document.getElementById("speedInputField").value;
    duration = document.getElementById("durationInputField").value;
    durationOUT = duration;
    testinputSpeed();
    bclockwise = 1;
    myFunction2();
}

function reset() {
    clearInterval(myVar2);
    clearInterval(myVar3);
    resetvar = 1;
}

function Wcounterclockwise() {
    speed = document.getElementById("speedInputField").value;
    duration = document.getElementById("durationInputField").value;
    durationIN = duration;
    testinputSpeed();
    wcounterclockwise = 1;
    myFunction3();
}

function Wclockwise() {
    speed = document.getElementById("speedInputField").value;
    duration = document.getElementById("durationInputField").value;
    durationIN = duration;
    testinputSpeed();
    wclockwise = 1;
    myFunction3();
}