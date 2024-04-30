//HOISTING
console.log(a)
console.log(b)



var a = 25;
console.log(a)
function sum (x, y)
{
    console.log(p)
    var p = 50;
	console.log(x + y,p)
}
sum(2, 3)
var b = 20;
console.log(b)