const num01 = document.getElementById("num01");
const num02 = document.getElementById("num02");
const num03 = document.getElementById("num03");
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const num3 = document.getElementById("num3");
const num11 = document.getElementById("num11");
const num12 = document.getElementById("num12");
const num13 = document.getElementById("num13");

//スロットに最初に表示される数値
num01.textContent = "9";
num02.textContent = "9";
num03.textContent = "9";
num1.textContent = "0";
num2.textContent = "0";
num3.textContent = "0";
num11.textContent = "1";
num12.textContent = "1";
num13.textContent = "1";

const startBtn = document.getElementById("startBtn");
const stopBtn1 = document.getElementById("stopBtn1");
const stopBtn2 = document.getElementById("stopBtn2");
const stopBtn3 = document.getElementById("stopBtn3");

startBtn.addEventListener("click", slot_start1);
startBtn.addEventListener("click", slot_start2);
startBtn.addEventListener("click", slot_start3);
stopBtn1.addEventListener("click", slot_stop1);
stopBtn2.addEventListener("click", slot_stop2);
stopBtn3.addEventListener("click", slot_stop3);

let timer1;
let timer2;
let timer3;
let sec01 = 9;
let sec02 = 9;
let sec03 = 9;
let sec1 = 0;
let sec2 = 0;
let sec3 = 0;
let sec11 = 1;
let sec12 = 1;
let sec13 = 1;

//ストップボタンが3つ全て押されたかどうかを判定する変数
let stop1 = false;
let stop2 = false;
let stop3 = false;

//スタートボタンが押されたかどうかを判定する変数
let start = false;

//スロットを動かすタイマーの開始関数（setInterval）
function slot_start1() {
    clearInterval(timer1);
    timer1 = setInterval(cahnge_num1, 100);
    stopBtn1.disabled = false;
};

function slot_start2() {
    clearInterval(timer2);
    timer2 = setInterval(cahnge_num2, 100);
    stopBtn2.disabled = false;
};

function slot_start3() {
    clearInterval(timer3);
    timer3 = setInterval(cahnge_num3, 100);
    stopBtn3.disabled = false;
};

//実際に数字を1~9で動かす関数
function cahnge_num1() {
    start = true;
    stop1 = false;
    num01.textContent = sec01;
    num1.textContent = sec1;
    num11.textContent = sec11;
    sec01 += 1;
    sec1 += 1;
    sec11 += 1;
    if (sec01 === 10) {
        sec01 = 0
    };
    if (sec1 === 10) {
        sec1 = 0
    };
    if (sec11 === 10) {
        sec11 = 0
    };
};

function cahnge_num2() {
    stop2 = false;
    num02.textContent = sec02;
    num2.textContent = sec2;
    num12.textContent = sec12;
    sec02 += 1;
    sec2 += 1;
    sec12 += 1;
    if (sec02 === 10) {
        sec02 = 0
    };
    if (sec2 === 10) {
        sec2 = 0
    };
    if (sec12 === 10) {
        sec12 = 0
    };
};

function cahnge_num3() {
    stop3 = false;
    num03.textContent = sec03;
    num3.textContent = sec3;
    num13.textContent = sec13;
    sec03 += 1;
    sec3 += 1;
    sec13 += 1;
    if (sec03 === 10) {
        sec03 = 0
    };
    if (sec3 === 10) {
        sec3 = 0
    };
    if (sec13 === 10) {
        sec13 = 0
    };
};

//スロットを動かすタイマーの停止関数（setInterval）
function slot_stop1() {
    if (start = true) {
        clearInterval(timer1);
        stopBtn1.disabled = true;
        stop1 = true;
        if (stop1 == stop2 && stop2 == stop3) {
            judge();
        };
    };
};

function slot_stop2() {
    if (start = true) {
        clearInterval(timer2);
        stopBtn2.disabled = true;
        stop2 = true;
        if (stop1 == stop2 && stop2 == stop3) {
            judge();
        };
    };
};

function slot_stop3() {
    if (start = true) {
        clearInterval(timer3);
        stopBtn3.disabled = true;
        stop3 = true;
        if (stop1 == stop2 && stop2 == stop3) {
            judge();
        };
    };
};

//全てのタイマーが停止した際にスロットの結果を判定する関数
function judge() {
    if (sec1 == sec2 && sec2 == sec3) {
        alert("おめでとう！");
    } else {
        alert("残念！再挑戦！");
    };
    startBtn.disabled = false;
    stop1 = false;
    stop2 = false;
    stop3 = false;
};