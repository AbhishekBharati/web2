function delayedCall(fn: () => void): void {
  setTimeout(fn, 1000);
}

function input(): void {
  console.log("Hey There...");
}

delayedCall(input);
