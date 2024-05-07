let c = 0
function incr() {
	console.log(document.querySelectorAll('#counter button'))
	if (c < 25) {
		c++
		document.getElementsByClassName("para")[0].textContent = c
	} else {
		alert("don't cross 25")
	}
}
function decr() {
	c--
	document.getElementById("count").textContent = c
}
function reset() {
	document.getElementById("count").textContent = 0
}
/* implement counter which have incr--> incr 1, decr-- minus 1 and reset --> makes 0 buttons, but valess should not go over 25 or less than -10 */



document.getElementById('btn1').addEventListener('click', incr);
document.getElementById("btn2").addEventListener("click", decr);
document.getElementById("btn3").addEventListener("click", reset)










