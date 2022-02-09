const selectToEl = document.querySelector(".select-to");
const selectFromEl = document.querySelector(".select-from");
const inputEl = document.querySelector(".input-from");
const outputEl = document.querySelector(".output-to");

const bin = "01";
const oct = "01234567";
const dec = "0123456789";
const hex = "0123456789ABCDEF";

function convert() {
  const input = inputEl.value;
  if (input == "") {
    alert("Please enter an input!");
    return;
  }
  if (selectFromEl.value === "2") {
    if (!check(input, bin)) {
      return;
    }
  } else if (selectFromEl.value === "10") {
    if (!check(input, dec)) {
      return;
    }
  } else if (selectFromEl.value === "16") {
    if (!check(input, hex)) {
      return;
    }
  } else if (selectFromEl.value === "8") {
    if (!check(input, oct)) {
      return;
    }
  }
  let baseDigits;
  if (selectToEl.value === "2") {
    baseDigits = bin;
  } else if (selectToEl === "8") {
    baseDigits = oct;
  } else if (selectToEl === "10") {
    baseDigits = dec;
  } else {
    baseDigits = hex;
  }
  const output = convertTo(
    parseInt(selectFromEl.value),
    parseInt(selectToEl.value),
    input,
    baseDigits
  );
  outputEl.value = output;
}

function check(input, base) {
  for (let i = 0; i < input.length; i++) {
    if (!base.includes(input.charAt(i))) {
      alert("Invalid input!");
      return false;
    }
  }
  return true;
}

function convertTo(fromBase, toBase, input, baseDigits) {
  let num = parseInt(input, fromBase);
  let rev = "";
  while (num != 0) {
    let digit = baseDigits.charAt(num % toBase);
    rev += digit;
    num = Math.floor(num / toBase);
  }
  rev = "" + rev;
  let ans = "";
  for (let i = rev.length - 1; i >= 0; i--) {
    ans += rev.charAt(i);
  }
  console.log(ans);
  return ans;
}
