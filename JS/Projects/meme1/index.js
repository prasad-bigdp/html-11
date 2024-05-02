let ftext = document.getElementById('ftext');
let stext = document.getElementById('stext');
let image = document.getElementById('imgInput');
let mainDiv = document.getElementById('output')

function generate ()
{
    // const img = document.createElement('img');
    // img.src = image.value ;
    // img.alt = "meme";
    // img.style.height = "150px";
    // img.style.width="150px"
    mainDiv.style.backgroundImage =
        `url(${image.value})`
    mainDiv.style.backgroundSize="cover"
    const para1 = document.createElement('p')
    para1.textContent=ftext.value
    mainDiv.append(para1)
   
}