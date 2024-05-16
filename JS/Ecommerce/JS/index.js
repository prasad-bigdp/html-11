const mainDiv = document.getElementById('main')
let cart = [];

document.getElementById("count").textContent = cart.length
const fetchData = async () =>
{
    try
    {
         const res = await fetch("https://dummyjson.com/products");
        if (res.ok)
        {
            const data = await res.json()
						displayData(data.products)
        }
        else
        {
            console.log("error in fetching")
        }
    }
    catch (err)
    {
        console.log("erroer is" + err)
    }
   
    
}
fetchData();
const displayData = (arr) =>
{
    arr.forEach((p) =>
    {
        const proDiv = document.createElement('div');
        proDiv.classList.add('product')
        const image = document.createElement('img');
        image.src = p.thumbnail;
        image.alt = p.title;
        const title = document.createElement('h2');
        title.textContent = p.title;
        const link = document.createElement('a');
        link.href = `./Pages/product.html?pid=${p.id}`
        link.target="_blank"
        link.appendChild(title)
        const price = document.createElement('p');
        price.textContent = "$ " + p.price
        
        const addCart = document.createElement('button')
        addCart.textContent = "Add To Cart";
        addCart.addEventListener('click',()=> cartLogic(p))
        proDiv.append(image, link, price, addCart);
        mainDiv.appendChild(proDiv)
    })
}
const cartLogic = (p) =>
{
    cart.push(p)
    localStorage.setItem('cart', JSON.stringify(cart));
    document.getElementById('count').textContent=cart.length
    
}