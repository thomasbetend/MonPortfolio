let pictureFullPage = document.getElementById('image-central');

pictureFullPage.addEventListener("mouseover", ()=>{
    console.log("photo")
}
)

let menuD = document.getElementById('menu-deroulant');
let menuH = document.getElementById('menu-hide');

menuD.addEventListener("onclick", ()=>{
        menuH.style.display = 'none';
        console.log("hello")
}
)