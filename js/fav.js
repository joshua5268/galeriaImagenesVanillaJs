
let favoritos = [];
let favoritosStorage = localStorage.getItem("@favoritos");

if (favoritosStorage) {
  favoritos = JSON.parse(favoritosStorage);
}

function modificarFavoritos(fav){
    let id = fav.getAttribute("id");
    if(favoritos.includes(id)){
        fav.innerHTML = "💛";
        favoritos.splice(favoritos.indexOf(id), 1);
        localStorage.setItem("@favoritos", JSON.stringify(favoritos));
    }else{
        fav.innerHTML = "❤️";
        favoritos.push(id);
        localStorage.setItem("@favoritos", JSON.stringify(favoritos));
    }

    favoritos = [];
    favoritosStorage = localStorage.getItem("@favoritos");

    if (favoritosStorage) {
    favoritos = JSON.parse(favoritosStorage);
    }

}

function filtrarFavoritos(personajes){
    personajes.forEach(element => {
        if(favoritosStorage && favoritosStorage.includes(element.id)){
            let item = element;
            personajes.splice(personajes.indexOf(element), 1);
            personajes.unshift(item);
        }
    });
}