
let favoritos = [];
let favoritosStorage = localStorage.getItem("@favoritos");

if (favoritosStorage) {
  favoritos = JSON.parse(favoritosStorage);
}


//eventos de #resultados
document.querySelector("#resultados").addEventListener('click', (evt) => {
    let fav = evt.target;

    //Favoritos
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
    
    favoritos = [];
    favoritosStorage = localStorage.getItem("@favoritos");
    if (favoritosStorage) {
        favoritos = JSON.parse(favoritosStorage);
    }

    //Flip
    if(fav.getAttribute("data-girar")){
        let id = evt.target.getAttribute("data-girar");
        let tarj = document.querySelector(`[data-flip="${id}"]`);
        if(tarj.classList.contains('rotar2')){
            tarj.classList.replace('rotar2', 'rotar1');
        }else{
            tarj.classList.replace('rotar1', 'rotar2');
        }
    }
});

function filtrarFavoritos(personajes){
    personajes.forEach(element => {
        if(favoritosStorage && favoritosStorage.includes(element.id)){
            let item = element;
            personajes.splice(personajes.indexOf(element), 1);
            personajes.unshift(item);
        }
    });
}