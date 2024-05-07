// There are two timers available in webAPI's
// setInterval(myWish,5000)
// function myWish ()
// {
//     console.log("hiii")
// }
// console.log("hello")
setInterval(function ()
{
    let cTime = new Date().toLocaleTimeString()
    //hr,min,sec

    document.getElementById("time").textContent = cTime;  
},1000)
