var a = 3;
// simple if
if (a > 15)
{
    console.log("a is greater than 15")
}
// if-else
if (a > 5)
    console.log("a is greter than 5")
else
    console.log("a is less than 5")
// if-else-if ladder
if (a > 0)
{
    console.log(`${a} is positive`)
}
else if(a<0)
{
   console.log(a+'is negitive')
}
else
{
    console.log(`${a} is zero`)
}
/* nested if */
if (a > 10)
{
    if (a<20)
        console.log("success")
    else
        console.log("fail")
}

/*
1. write a js code to find given number even or odd
2. write a js code to find min and max values from three values without max or min methods
*/
var num = 25;
if (num % 2 == 1)
    console.log(`${num} is odd`)
else
    console.log(`${num} is even`)

var p = 5, q = 10, r = 20;
if ((p > q) && (p > r))
{
    console.log(`${p} is maxium`);
    (q > r) ? console.log(`${r} is minimum`) : console.log(`${q} is minimum`);
}
else if ((q > p) && (q > r))
{
    console.log(`${q} is maxium`)
		p > r ? console.log(`${r} is minimum`) : console.log(`${p} is minimum`)
}
else
{
    console.log(`${r} is maximum`)
    p > q ? console.log(`${q} is minimum`) : console.log(`${p} is minimum`)
}
    






