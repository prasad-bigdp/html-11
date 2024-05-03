//Arrays are used to store the values.
// non primitive data types are mutable
let arr = [2, 5, "raj", true]
console.log(arr[0])
/* arrays stores values based on index, indexes starts with 0*/
console.log(arr[0] + arr[1])
console.log(arr.length)
arr.push(2,3,5,7) //adds element to last
console.log(arr)
arr.pop() //removes last element
console.log(arr)
arr.shift() // removes first element
console.log(arr)
arr.unshift(8) //adds first element
console.log(arr)
arr.splice(2, 1)// delete 1 element from 2nd index
console.log(arr)
arr.splice(2, 0, 11, 12, 13) // adds 11, 12,13 to 2nd index and 0 delete
// splice(startingindex, deleteCount, any adding elements)
console.log(arr)
arr.reverse();
console.log(arr)
str="raj";
str1="raj"
str.toUpperCase();
console.log(str==str1)

/* primtive data types compares value, non primitve data types compare address*/
let arr1 = [2, 3];
let arr2 = [2, 3];
console.log(arr1==arr2)

/* array print values*/
for (let i = 0; i < arr1.length; i++)
{
    console.log(arr1[i])
}
for (let i of arr1)
{
    console.log(i)
}
let arr3 = [2,3,5]
arr3.forEach(function (x)
{
	console.log(x)
})
let newArray = arr3.forEach(
    function (val)
    {
        console.log(val)
        return val * val;   
        }
);
console.log(newArray);
let newArray2 = arr3.map(function (val) {
	console.log(val)
	return val * val
})
console.log(newArray2)
let arrEO = [5, 8, 9, 25, 69, 74];
let newArray3 = arrEO.map(function (val) {
	return val%2==0
})
console.log(newArray3)
let newArray4 = arrEO.filter(function (val) {
	return val % 2 == 0
})
console.log(newArray4)

let r1=["raj", "bad", "mad", "shekhar"].filter(function (val)
{
    return val.length == 3;
})
console.log(r1)

/* reduce is used for cumulative summation */

let r2=[3, 5, 8, 9].reduce(function (prev,current)
{
    console.log(prev,current)
    return prev + current;
},0)
console.log(r2)

/* for Each is used to iterate into the array but it will not return anything*/

/* to iterate into the array and return a new array , we can use map */

/* if we use a condition in a map , it returns new array with every possibe values for each element */

/* always in map input array length will be equal to output array length */

/* if we use filter , only the elemnets that satisfies the condition will be returned as new array */

/* reduce is used for summation purposes where previous value will be updated every time */


let r3=arrEO.concat(arr1)
console.log(r3)


let r4=arrEO.find(function (x)
{
    return x%2==0
})
console.log(r4)

/* explore more array methods */

let obj = {
    name: "raj",
    place:"hyd"
}
console.log(obj['place'])











