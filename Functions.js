let heads = ["img/head1.png", "img/head2.png", "img/head3.png", "img/head4.png"];
let currentHead = 0;

let body = ["img/body1.png", "img/body2.png", "img/body3.png", "img/body4.png" ];
let currentbody = 0;

let legs = ["img/legs1.png", "img/legs2.png", "img/legs3.png", "img/legs4.png" ];
let currentlegs = 0;

function nexthead(){
    currentHead++;
    if (currentHead == 4) {
        currentHead = 0;
    }
    headImage = document.getElementById("head");
    headImage.src = heads[currentHead];
}
function prevhead(){
    currentHead--;
    if (currentHead == -1) {
        currentHead = 3;
    }
    headImage = document.getElementById("head");
    headImage.src = heads[currentHead];
}
function nextbody(){
    currentbody++;
    if (currentbody == 4) {
        currentbody = 0;
    }
    bodyImage = document.getElementById("body");
    bodyImage.src = body[currentbody];
}
function prevbody(){
    currentbody--;
    if (currentbody == -1) {
        currentbody = 3;
    }
    bodyImage = document.getElementById("body");
    bodyImage.src = body[currentbody];
}
function nextlegs(){
    currentlegs++;
    if (currentlegs == 4) {
        currentlegs = 0;
    }
    legsImage = document.getElementById("legs");
    legsImage.src = legs[currentlegs];
}
function prevlegs(){
    currentlegs--;
    if (currentlegs == -1) {
        currentlegs = 3;
    }
    legsImage = document.getElementById("legs");
    legsImage.src = legs[currentlegs];
}


function toggleVisibility(elementId) {
    let element = document.getElementById(elementId);
    if (element.style.display === 'none' || element.style.display === '') {
        element.style.display = 'block';
    } else {
        element.style.display = 'none';
    }
}

function toggleFlex(elementId) {
    let element = document.getElementById(elementId);
    if (element.style.display === 'none' || element.style.display === '') {
        element.style.display = 'flex';
    } else {
        element.style.display = 'none';
    }
}

function ingenlayout(elementId){
    document.getElementById(ingenlayout);
}

function vertikallayout(elementId){
    let element = document.getElementById(elementId);
    if (element.style.display === 'none' || element.style.display === '') {
            element.style.display = 'flex';
    } else {
            element.style.display = 'none';
    }
}

