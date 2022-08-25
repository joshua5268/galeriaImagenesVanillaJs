let personajes = [];

fetch("https://api.got.show/api/show/characters/")
.then(respuesta => respuesta.json())
.then(info => {
    personajes = info;
    filtrarFavoritos(personajes);
    dibujarTarjetas(personajes);
});