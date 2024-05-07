document.getElementById('btn3').addEventListener('click', function ()
{
    alert("button called")
})

document.getElementById("f").addEventListener("click", function () {
	alert("father called")
})
document.getElementById("c").addEventListener("click", function () {
	alert("child called")
})
document.getElementById("gf").addEventListener("click", function () {
	alert("grand father called")
} )

// instead of id you can use class and for loop
document.getElementById('buttons').addEventListener('click', function (x)
{
    alert(x.target.textContent+" clicked")
})