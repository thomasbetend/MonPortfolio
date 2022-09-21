

let menuD = document.getElementById('menu-deroulant');
let menuH = document.getElementById('menu-hide');

menuD.addEventListener("onclick", ()=>{
        if(menuH.style.display = 'none'){
            menuH.style.display = 'block';
        }
        else {
            menuH.style.display = 'none';
        })