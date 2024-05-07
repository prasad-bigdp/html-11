const mainDiv = document.getElementById('receipes')
function fetchData ()
{
    fetch("https://dummyjson.com/recipes")
        .then(function (res) { return res.json() })
        .then(function (data) { displayData(data.recipes) });

}
fetchData()
function displayData (data)
{
    data.forEach(function (r)
    {
        const receipe = document.createElement('div');
        receipe.classList.add('receipe');
        const image = document.createElement('img')
        image.src = r.image;
        image.alt = r.name;
        const title = document.createElement('h3')
        title.textContent = r.name
        receipe.append(image, title)
        mainDiv.appendChild(receipe)
    })
}