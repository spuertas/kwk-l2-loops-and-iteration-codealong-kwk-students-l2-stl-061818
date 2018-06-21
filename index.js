// Code your solutions in this file
function tailsNeverFails() {
  let tails = 0;
  while (Math.random() >= 0.5) {
    tails++
  }
  console.log(`You got ${tails} tails in a row!`);
}
for (let t = 0; t <= 1000000; t++) {
  tailsNeverFails();
}
