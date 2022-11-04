const listaimage = [
    "img/01.webp",
    "img/02.webp",
    "img/03.webp",
    "img/04.webp",
    "img/05.webp",
]


let x=0;

const image1 = document.getElementById("imgcontainer");
//image1.innerHTML += `<img src="${listaimage[x]}" class="image active" id="immagine">`;

for (i=0;i<listaimage.length;i++ ){
    image1.innerHTML += `<img src="${listaimage[i]}" class="image" id="" >`;
    console.log(image1);
}

const oldImg = document.querySelector(`.containerimage :nth-child(${(x + 1)})`);
oldImg.classList.add( "active" );

const btnAvanti = document.getElementById("btn1");
const btnIndietro = document.getElementById("btn2");

btnAvanti.addEventListener("click" , 
function (){
    
    // x è il valore vecchio
    // es. vale x = 0
    // è l'indice dlel'immagine che devi cancellare
    const oldImg = document.querySelector(`.containerimage :nth-child(${x + 1})`);
    oldImg.classList.remove( "active" );

    // x = 1
    x++;
    if(x> (listaimage.length - 1) ){
        x = 0;
    }
    const newImg = document.querySelector(`.containerimage :nth-child(${x + 1})`);
    newImg.classList.add( "active" );
})

btnIndietro.addEventListener("click" , 
function (){
    const oldImg = document.querySelector(`.containerimage :nth-child(${x + 1})`);
    oldImg.classList.remove( "active" );
    x--;
    if(x<0){
        x=4
    }
    const newImg = document.querySelector(`.containerimage :nth-child(${x + 1})`);
    newImg.classList.add( "active" );
})

