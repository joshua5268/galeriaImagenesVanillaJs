let personajes = [];

fetch("https://api.got.show/api/show/characters/")
.then(respuesta => respuesta.json())
.then(info => {
    personajes1 = info;
    personajes = personajes1.filter(personaje => personaje.image);
    personajesFiltrado =personajes;
    filtrarFavoritos(personajes);
    dibujarTarjetas(personajes);
});

document.querySelector("#resultados").addEventListener('click', (evt) => {
    let trigger = evt.target;
    
    if(trigger.getAttribute("data-type") == "favoritos"){
        modificarFavoritos(trigger);
    }

    if(trigger.getAttribute("data-girar")){
        girarCard(trigger);
    }

    if(trigger.getAttribute("data-modal")){
        mostrarModal(trigger);
    }
});