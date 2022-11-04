const listaimage = [
    "img/01.webp",
    "img/02.webp",
    "img/03.webp",
    "img/04.webp",
    "img/05.webp",
]

let i=0;
let z=0;
let x=1;
const image1 = document.getElementById("imgcontainer");
image1.innerHTML += `<img src="${listaimage[i]}" class="image" id="">`;

for (i=1;i<listaimage.length;i++ ){
    image1.innerHTML += `<img src="${listaimage[i]}" class="image none" id="" >`;
    console.log(image1);
}


const btnAvanti = document.getElementById("btn1");

btnAvanti.addEventListener("click" , 
function (){
    const oldImg = document.querySelector(`.containerimage :nth-child(${z + 1})`);
    oldImg.classList.add( "none" );
    z++;
    
    const newImg = document.querySelector(`.containerimage :nth-child(${x + 1})`);
    newImg.classList.remove( "none" );
    x++;
})