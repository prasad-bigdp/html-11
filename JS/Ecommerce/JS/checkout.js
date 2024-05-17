const cartArray = JSON.parse(localStorage.getItem("cart"))
console.log(cartArray)
const checkoutDiv = document.getElementById('checkoutDiv');
function displayItems ()
{
    checkoutDiv.textContent=""
    cartArray.forEach((p,i) => {
			const proDiv = document.createElement("div")
			proDiv.classList.add("item")
			const image = document.createElement("img")
			image.src = p.thumbnail
			image.alt = p.title
			const title = document.createElement("h2")
			title.textContent = p.title
			const link = document.createElement("a")
			link.href = `./Pages/product.html?pid=${p.id}`
			link.target = "_blank"
			link.appendChild(title)
			const price = document.createElement("p")
			price.textContent = "$ " + p.price

			const deleteCart = document.createElement("button")
			deleteCart.textContent = "❎"
			deleteCart.addEventListener("click", ()=>deleteCartLogic(i))
			proDiv.append(image, link, price, deleteCart)
			checkoutDiv.appendChild(proDiv)
    })
    calculateTotal();
}
displayItems();
function calculateTotal ()
{
    let res = cartArray.reduce((p, c) => p + c.price, 0)
    document.getElementById('total').textContent="$"+res
}
const deleteCartLogic = (i) =>
{
    cartArray.splice(i, 1)
    localStorage.setItem("cart", JSON.stringify(cartArray))
    displayItems();
}