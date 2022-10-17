const string = "hello world!";
let doubleString = "";
for (let i = 0; i < string.length; i++) {
  doubleString = doubleString + (string[i] + string[i]);
}
console.log(doubleString);
