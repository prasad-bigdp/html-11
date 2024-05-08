const mainDiv = document.getElementById('results');
const input = document.getElementById('inp');
const button = document.getElementById('btn')
input.addEventListener('input', fetchData)
function fetchData ()
{
    fetch(`https://omdbapi.com/?s=${input.value}&apikey=c5b1cbfc`)
        .then(function (res) { return res.json() })
        .then(function (data) { displayData(data.Search) })
    .catch(function(err){console.log(err)})
}
function displayData (data)
{
    mainDiv.textContent=""
    data.forEach(function (m)
    {
        const movie = document.createElement('div')
        movie.classList.add('movie');
        const image = document.createElement('img');
        image.src = m.Poster;
        image.alt = m.Title;
        const title = document.createElement('h2')
        title.textContent = m.Title;
        const link = document.createElement('a')
        link.href = `https://www.imdb.com/title/${m.imdbID}`
        link.target = "_blank";
        link.appendChild(title)
        movie.append(image, link);
        
        mainDiv.appendChild(movie)
  })
}
//API-key="c5b1cbfc"