let number1 = document.getElementById("number1");
let counter1 = 0;
setInterval(() => {
  if (counter1 == 75) {
    clearInterval();
  } else {
    counter1 += 1;
    number1.innerHTML = counter1 + "%";
  }
}, 30);

let number2 = document.getElementById("number2");
let counter2 = 0;
setInterval(() => {
  if (counter2 == 65) {
    clearInterval();
  } else {
    counter2 += 1;
    number2.innerHTML = counter2 + "%";
  }
}, 30);

let number3 = document.getElementById("number3");
let counter3 = 0;
setInterval(() => {
  if (counter3 == 85) {
    clearInterval();
  } else {
    counter3 += 1;
    number3.innerHTML = counter3 + "%";
  }
}, 30);

let number4 = document.getElementById("number4");
let counter4 = 0;
setInterval(() => {
  if (counter4 == 85) {
    clearInterval();
  } else {
    counter4 += 1;
    number4.innerHTML = counter4 + "%";
  }
}, 30);

let number5 = document.getElementById("number5");
let counter5 = 0;
setInterval(() => {
  if (counter5 == 90) {
    clearInterval();
  } else {
    counter5 += 1;
    number5.innerHTML = counter5 + "%";
  }
}, 30);
