console.log("ES6")
//ECMASCRIPT used to put rules nd updations to JS
//ES6 releassed in 2015 with somany new features for JS
//Arrow functions
//template literals
//let,const
//rest,spread operators
//spreading
//OOP concepts
//lexical scoping

/* we know what is meant by local scope,global scope */
var x = 20; // global scope
// function display ()
// {
//     var a = 30;//local function
//     if (true)
//     {
//         let y = 50;// block
//          }
//     console.log(a,x)
// }
// display()

/* lexical scoping means the scope of "this" */
/* this means current calling object  but this works only in normal functions, in arrow functions, where ever you write , what ever object calls, always this means window only */
var na="prasad"
let obj = {
    na: "raj",
    age: 25,
     //method
}
let obj2 = {
    na: "vani",
    age: 55
}
const display= function ()
    {
        console.log(this)
        console.log(this.na)
    }
display.call(obj)
display.apply(obj)
display.call(obj2)
/* if u have to print 10 times this/na as raj in different places,
instead of writing display.call(obj) 10 time, u have a method bind*/
//call,apply,bind

let myFun = display.bind(obj)
myFun()
myFun()
myFun()





/*  rest,spread operator */
function sum (a,b,c,...d)
{
    console.log(d);
    let arr = ["dghjs", 558, ...d,49] //spread operator
    console.log(arr)
    let sum = d.reduce((p, c) => p * c, 1)
    console.log(sum)
}
sum(5, 6, 8, 5, 5, 8, 9, 11)
// create an example which uses,rest nd spread nd show the differenc
put(1, 2, 3, 4, 5, 6)
function put(a, b, ...c) {
	console.log(c)
	let spill = [a, ...c, 10]
	console.log(spill)
}


// destructuring
let obj4 = {
    title: "Salaar",
    year:2024
}
let obj5 = {
	title: "rrr",
	year: 2024,
}
let { title, year } = obj5
const arr5 = [3, 5];
const [a,b]=arr5

console.log(title2)





































