let personajes = [];

fetch("https://api.got.show/api/show/characters/")
.then(respuesta => respuesta.json())
.then(info => {
    personajes1 = info;
    personajes = personajes1.filter(personaje => personaje.image);
    filtrarFavoritos(personajes);
    dibujarTarjetas(personajes);
});