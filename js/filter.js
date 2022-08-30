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

    dibujarTarjetas(resultado);
});

filtroAll.addEventListener("click", () => {
  dibujarTarjetas(personajes);
});

filtroMale.addEventListener("click", () => {
  let arrayFem = personajes.filter(personaje => personaje.gender == "male");
  dibujarTarjetas(arrayFem);
});

filtroFemale.addEventListener("click", () => {
  let arrayFem = personajes.filter(personaje => personaje.gender == "female");
  dibujarTarjetas(arrayFem);
});

filtroFav.addEventListener("click", () => {
  let arrayFav = personajes.filter(personaje => favoritosStorage.includes(personaje.id));
  dibujarTarjetas(arrayFav);
});

filtroAlive.addEventListener("click", () => {
  let arrayAlive = personajes.filter(personaje => personaje.alive === true);
  dibujarTarjetas(arrayAlive);
});

filtroDead.addEventListener("click", () => {
  let arrayDead = personajes.filter(personaje => personaje.alive === false);
  dibujarTarjetas(arrayDead);
});