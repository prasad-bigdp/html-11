let cart = []

document.getElementById("count").textContent = JSON.parse(localStorage.getItem('cart')).length
const cartLogic = (p) => {
	cart.push(p)
	localStorage.setItem("cart", JSON.stringify(cart))
	document.getElementById("count").textContent = cart.length
}
export {cart,cartLogic}
