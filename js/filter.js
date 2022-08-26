let inputBusqueda = document.querySelector("#inputBusqueda");
let filtroAb = document.querySelector("#filtroAb");

inputBusqueda.addEventListener('keyup', (evt) => {
    let name = inputBusqueda.value.toLowerCase();
    let nameFound = personajes.filter( personaje => personaje.name.toLowerCase().includes(name));
    let houses = personajes.filter( house => house.house);
    let housesFound = houses.filter(house => house.house.toLowerCase().includes(name) && !house.name.toLowerCase().includes(name));
    let resultado = nameFound.concat(housesFound);

    dibujarTarjetas(resultado);
});


filtroAb.addEventListener("click", () => {
    
});