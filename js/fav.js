
let favoritos = [];
let favoritosStorage = localStorage.getItem("@favoritos");

if (favoritosStorage) {
  favoritos = JSON.parse(favoritosStorage);
}

document.querySelector("#resultados").addEventListener('click', (evt) => {
    let fav = evt.target;

    if(fav.getAttribute("data-type") == "favoritos"){
        let id = evt.target.getAttribute("id");

        if(favoritos.includes(id)){
            fav.innerHTML = "💛";
            favoritos.splice(favoritos.indexOf(id), 1);
            localStorage.setItem("@favoritos", JSON.stringify(favoritos));
        }else{
            fav.innerHTML = "❤️";
            favoritos.push(id);
            localStorage.setItem("@favoritos", JSON.stringify(favoritos));
        }
    }
});