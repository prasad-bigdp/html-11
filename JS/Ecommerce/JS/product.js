import { cartLogic } from "./common.js"

let url = new URLSearchParams(window.location.search)
let id = url.get("pid")
const product= document.getElementById('product')
const fetchData = async () =>
{
     try {
				const res = await fetch(`https://dummyjson.com/products/${id}`)
				if (res.ok) {
					const data = await res.json()
					displayData(data)
				} else {
					console.log("error in fetching")
				}
			} catch (err) {
				console.log("error is" + err)
			}
   
}
fetchData();
const displayData = (data) =>
{
    console.log(data.thumbnail)
    const leftDiv = document.createElement('div')
    const image = document.createElement('img')
    image.src = data.thumbnail;
    image.alt = data.title;
        console.log(data.thumbnail)
 const imgDiv = document.createElement("div")
 data.images.forEach((i) => {
     const image1 = document.createElement("img")
		image1.src = i
     image1.alt = data.title
	 image1.style.height = "50px"
	 image1.addEventListener('click', function ()
	 {
		 image.src = image1.src;
		 image.alt = image1.alt;
	 })
		imgDiv.appendChild(image1)
 })
    leftDiv.append(image,imgDiv)
    const rightDiv = document.createElement("div")
    const title = document.createElement("h2")
		title.textContent = data.title
		const link = document.createElement("a")
		link.href = `./Pages/product.html?pid=${data.id}`
		link.target = "_blank"
		link.appendChild(title)
		const price = document.createElement("p")
    price.textContent = "$ " + data.price
   
		const addCart = document.createElement("button")
	addCart.textContent = "Add To Cart"
	addCart.addEventListener('click',cartLogic)
    rightDiv.append(link, price, addCart)
    product.append(leftDiv,rightDiv)
    
}