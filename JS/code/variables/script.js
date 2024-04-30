console.log(a)
var a = 20;
var a = 50;

a = 100;
let b = 20;
b = 50;

const c = 20;


function xyz ()
{
   
    if(true)
    {
         var x = 20// scope depeneds on fn
        let y = 20;
    }
    console.log(x)
     console.log(y)
}
xyz()


// redeclaration
/*1. var can be redeclared, but let and const cannot be redeclared 
2. var and let can change the value but const values should not be changed
3. let and const values cannot be accessed befpre initialization. In let and const hoisting wil happen but those values will store in temporal dead zone.. 

4. var is function scoped variable and let, const is a block scoped variable.
ES6 features- let nd const 

*/