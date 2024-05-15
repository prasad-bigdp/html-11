/* JS follows modular/function programming*/
class myClass
{
   static a=50;
    b;
    constructor(x,y)
    {
        this.a = x;
        this.b = y;
    }
    print ()
    {
        console.log(this.a,this.b)
    }
}
function fun ()
{
    console.log("hi everyone")
}
let name = "raj"
export default myClass;
export {fun,name}