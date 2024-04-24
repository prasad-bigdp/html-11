console.log("hello")

/* generate 4 digit OTP and print with console eg:1234, 5265 */

var x = Math.round(Math.random() * 10000);
console.log(x);
var a = +prompt("enter a value");
var b = +prompt("enter b value");
var c = Number(prompt("enter c value"));
var d = (-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a);
var e = (-b - Math.sqrt(b * b - 4 * a * c)) / (2 * a);
alert("results are "+ d +", "+e)