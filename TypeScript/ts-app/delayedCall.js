"use strict";
function delayedCall(fn) {
    setTimeout(fn, 1000);
}
function input() {
    console.log("Hey There...");
}
delayedCall(input);
