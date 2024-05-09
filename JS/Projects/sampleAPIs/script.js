const mainDiv = document.getElementById('results');
const obj={
    "title": "Star vs the Forces of Evil",
    "year": 1999,
    "creator": [
      "Stephen Hillenburg"
    ],
    "rating": "TV-Y7",
    "genre": [
      "Action",
      "Adventure"
    ],
    "runtime_in_minutes": 22,
    "episodes": 77,
    "image": "https://m.media-amazon.com/images/M/MV5BYjFkMTlkYWUtZWFhNy00M2FmLThiOTYtYTRiYjVlZWYxNmJkXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SY1000_CR0,0,666,1000_AL_.jpg",
    "id": 3
  }
 
let fetchData = async () =>
{
    axios.post("https://api.sampleapis.com/cartoons/cartoons2D",obj)
    .then((res)=>console.log(res))
    // const res = await fetch('https://api.sampleapis.com/cartoons/cartoons2D',{meth});
    // const data = await res.json();
    // display(data)

}
fetchData();
let display = (data) =>
{
    data.forEach(function (cartoon)
    {
        const c = document.createElement('div');
    c.classList.add('cartoon')
    const image = document.createElement('img');
        image.src = cartoon.image;
        image.alt = cartoon.title;
        const title = document.createElement('h2');
        title.textContent = cartoon.title;
        c.append(image, title);
        mainDiv.appendChild(c)
   })
}