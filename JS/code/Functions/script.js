// function prasadPrint ()//declaration -- function keyword, name , parameters
// {
//     console.log("print prasad");//definition
// }
// prasadPrint() // call
// /* function to add two numbers */
// function add (a, b)
// {
// console.log(`addition is ${a+b}`)
// }
// add("hi","bye")
// /* write a simple function to add two strings*/
// /* callback functions -- one function inside the parameter of another function*/

// var xyz= function ()//anonymous function
// {
//     console.log("I'm bad")
// } // function expression
// function mad (a,something)
// {
//    console.log(something)
//     console.log("i'm mad")
// }
// mad(2, xyz)
// //bad is called callback function
// //mad is called Higher order function
// /* write a function which returns cube of a number */
// function cube (num)
// {
//     return num * num * num;
// }
// var result = cube(5);
// console.log(result)
// /* write  a function to find area of a circle using radius */
// function circle(a) {
// 	console.log(Math.PI* a * a)
// }
// function square (a)
// {
//     console.log(a*a)
// }
// console.log(square)
// /* implement a function which takes inputs and function to run */
// area(3,square) // callback functions

// function area (val, fn)
// {
//     fn(val);
// }






// var x = function () // anonymous fn
// {
//     console.log("something")
// }
    // function expression

(function ()
{
       console.log("hello IIFE - immediate invoke function expression")
})()

/* closure */

function outer(n) {
	function counter() {
		return n++
	}
	return counter
}
var result = outer(20)
console.log(result())
console.log(result())
console.log(result())
console.log(result())

// a. 21 21    b. 21 22

/* closure means inner function can able to rmeber outer function  previous  values */
/* in real time we will use closures for memorization */


/*  






















































