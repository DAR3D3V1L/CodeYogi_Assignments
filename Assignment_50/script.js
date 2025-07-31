let numbers = [3, 23, 7, 17, 42, 9, 22, 4, 33, 88, 13, 27, 10, 64];
function isEven(number) {
  let remainder = number % 2;
  return remainder === 0;
}
function isOdd(number) {
  let remainder = number % 2;
  return remainder !== 0;
}
function display1() {
  let res = document.getElementById("result");
  let evennum = numbers.filter(isEven);
  res.innerHTML=evennum;
}
function display2() {
  let res = document.getElementById("result");
  let oddnum = numbers.filter(isOdd);
  res.innerHTML=oddnum;
} 