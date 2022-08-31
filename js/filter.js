let inputBusqueda = document.querySelector("#inputBusqueda");
let filtroAll = document.querySelector("#filtroAll");
let filtroFav = document.querySelector("#filtroFav");
let filtroMale = document.querySelector("#filtroMale");
let filtroFemale = document.querySelector("#filtroFemale");
let filtroAlive = document.querySelector("#filtroAlive");
let filtroDead = document.querySelector("#filtroDead");

inputBusqueda.addEventListener('keyup', (evt) => {
    let name = inputBusqueda.value.toLowerCase();
    let nameFound = personajes.filter( personaje => personaje.name.toLowerCase().includes(name));
    let houses = personajes.filter( house => house.house);
    let housesFound = houses.filter(house => house.house.toLowerCase().includes(name) && !house.name.toLowerCase().includes(name));
    let resultado = nameFound.concat(housesFound);
    personajesFiltrado = resultado;
    dibujarTarjetas(resultado);
});

filtroAll.addEventListener("click", () => {
  filtrarFavoritos(personajes);
  dibujarTarjetas(personajes);
  personajesFiltrado = personajes;
});

filtroMale.addEventListener("click", () => {
  let arrayMale = personajes.filter(personaje => personaje.gender == "male");
  dibujarTarjetas(arrayMale);
  personajesFiltrado = arrayMale;
});

filtroFemale.addEventListener("click", () => {
  let arrayFem = personajes.filter(personaje => personaje.gender == "female");
  dibujarTarjetas(arrayFem);
  personajesFiltrado = arrayFem;
});

filtroFav.addEventListener("click", () => {
  let arrayFav = personajes.filter(personaje => favoritosStorage.includes(personaje.id));
  dibujarTarjetas(arrayFav);
  personajesFiltrado = arrayFav;
});

filtroAlive.addEventListener("click", () => {
  let arrayAlive = personajes.filter(personaje => personaje.alive === true);
  dibujarTarjetas(arrayAlive);
  personajesFiltrado = arrayAlive;
});

filtroDead.addEventListener("click", () => {
  let arrayDead = personajes.filter(personaje => personaje.alive === false);
  dibujarTarjetas(arrayDead);
  personajesFiltrado = arrayDead;
});