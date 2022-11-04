const listaimage = [
    "img/01.webp",
    "img/02.webp",
    "img/03.webp",
    "img/04.webp",
    "img/05.webp",
]


let x=0;

const image1 = document.getElementById("imgcontainer");
const imagelaterali = document.getElementById("containerlaterale");

for (i=0;i<listaimage.length;i++ ){
    image1.innerHTML += `<img src="${listaimage[i]}" class="image" id="imgs" >`;
    console.log(image1);
    imagelaterali.innerHTML += `<img src="${listaimage[i]}" class="imagelaterali" id="imgslaterali" >`;
}



const oldImg = document.querySelector(`.containerimage :nth-child(${(x + 1)})`);
oldImg.classList.add( "active" );
const oldImgLaterale = document.querySelector(`.container-laterale :nth-child(${(x + 1)})`);
oldImgLaterale.classList.add( "opac" );

const btnAvanti = document.getElementById("btn1");
const btnIndietro = document.getElementById("btn2");

btnAvanti.addEventListener("click" , 
function (){
    
    // x è il valore vecchio
    // es. vale x = 0
    // è l'indice dlel'immagine che devi cancellare
    const oldImg = document.querySelector(`.containerimage :nth-child(${x + 1})`);
    oldImg.classList.remove( "active" );
    const oldImgLaterale = document.querySelector(`.container-laterale :nth-child(${(x + 1)})`);
    oldImgLaterale.classList.remove( "opac" );

    // x = 1
    x++;
    if(x> (listaimage.length - 1) ){
        x = 0;
    }
    const newImg = document.querySelector(`.containerimage :nth-child(${x + 1})`);
    newImg.classList.add( "active" );
    const newImgLaterale = document.querySelector(`.container-laterale :nth-child(${(x + 1)})`);
    newImgLaterale.classList.add( "opac" );
})

btnIndietro.addEventListener("click" , 
function (){
    const oldImg = document.querySelector(`.containerimage :nth-child(${x + 1})`);
    oldImg.classList.remove( "active" );
    const oldImgLaterale = document.querySelector(`.container-laterale :nth-child(${(x + 1)})`);
    oldImgLaterale.classList.remove( "opac" );
    x--;
    if(x<0){
        x=4
    }
    const newImg = document.querySelector(`.containerimage :nth-child(${x + 1})`);
    newImg.classList.add( "active" );
    const newImgLaterale = document.querySelector(`.container-laterale :nth-child(${(x + 1)})`);
    newImgLaterale.classList.add( "opac" );
})

