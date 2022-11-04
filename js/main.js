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
const btnIndietro = document.getElementById("btn2");

btnAvanti.addEventListener("click" , 
function (){
    if(z<4) {
        const oldImg = document.querySelector(`.containerimage :nth-child(${z + 1})`);
        oldImg.classList.add( "none" );
        z++;
        
        const newImg = document.querySelector(`.containerimage :nth-child(${x + 1})`);
        newImg.classList.remove( "none" );
        x++;
    } else {
        z = 4;
        const oldImg = document.querySelector(`.containerimage :nth-child(${z + 1})`);
        oldImg.classList.add( "none" );
        z = 0;
        x = 0;
        const newImg = document.querySelector(`.containerimage :nth-child(${x + 1})`);
        newImg.classList.remove( "none" );
        x++;
        
    }
})

btnIndietro.addEventListener("click" , 
function (){
    if(z>0){ 
        const oldImg = document.querySelector(`.containerimage :nth-child(${z + 1})`);
        oldImg.classList.add( "none" );
        z--;

        const newImg = document.querySelector(`.containerimage :nth-child(${x - 1})`);
        newImg.classList.remove( "none" );
        x--;
    } else{
        z=0;
        const oldImg = document.querySelector(`.containerimage :nth-child(${z + 1})`);
        oldImg.classList.add( "none" );
        z = 4;
        x = 4;
        const newImg = document.querySelector(`.containerimage :nth-child(${x - 1})`);
        newImg.classList.remove( "none" );
        x--;
    }

})