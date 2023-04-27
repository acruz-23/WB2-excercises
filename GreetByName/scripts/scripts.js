
"use strict";
window.onload = init;

function init() {
    const helloBtn = document.getElementById("helloBtn");
    helloBtn.onclick = onGreetBtnClicked;
}

function onGreetBtnClicked(input){
    let userName = document.getElementById("nameField").value;
    alert(`Hello there, ${userName}!`);
}