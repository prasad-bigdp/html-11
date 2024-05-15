import x from "./script.js";
import * as z from './script.js'
class myClass2 extends x
{
    c;
	constructor(a, b, c) {
		super(a, b)
		this.c = c
	}
	print2() {
		console.log(this.a, this.b, this.c)
	}
}
console.log(typeof x)
let obj = new myClass2(5, 6, 7)
obj.print2()
z.fun()
console.log(x.a)
/*create a class with data methods, n create another class with inheritance,imagine both r in different files,
create object for class2 and access class1 methods*/
/* browser object model */
let myValue = 20;
console.log(window.localStorage.setItem('x', myValue))











