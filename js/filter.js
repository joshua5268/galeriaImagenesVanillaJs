let inputBusqueda = document.querySelector("#inputBusqueda");
let filtroAb = document.querySelector("#filtroAb");
let filtroGender = document.querySelector("#filtroGender");
let filtroFav = document.querySelector("#filtroFav");

inputBusqueda.addEventListener('keyup', (evt) => {
    let name = inputBusqueda.value.toLowerCase();
    let nameFound = personajes.filter( personaje => personaje.name.toLowerCase().includes(name));
    let houses = personajes.filter( house => house.house);
    let housesFound = houses.filter(house => house.house.toLowerCase().includes(name) && !house.name.toLowerCase().includes(name));
    let resultado = nameFound.concat(housesFound);

    dibujarTarjetas(resultado);
});


filtroAb.addEventListener("click", () => {
    if(filtroAb.getAttribute("data-ab") == "asc"){
        let arrayAz = personajes.sort(function (a, b) {
            if (a.name > b.name) {
              return 1;
            }
            if (a.name < b.name) {
              return -1;
            }
    
            return 0;
          });
        dibujarTarjetas(arrayAz);
        document.querySelector("#pAb").innerHTML = "Z - A";
        filtroAb.setAttribute("data-ab", "des");
    }else{
        let arrayAz = personajes.sort(function (a, b) {
            if (b.name > a.name) {
              return 1;
            }
            if (b.name < a.name) {
              return -1;
            }
    
            return 0;
          });
        dibujarTarjetas(arrayAz);
        document.querySelector("#pAb").innerHTML = "A - Z";
        filtroAb.setAttribute("data-ab", "asc");
    }
});

filtroGender.addEventListener("click", () => {
    if(filtroGender.getAttribute("data-gender") == "male"){
        let arrayFem = personajes.filter(personaje => personaje.gender == "male");
        dibujarTarjetas(arrayFem);
        document.querySelector("#pGender").innerHTML = "Female";
        filtroGender.setAttribute("data-gender", "female");
    }else{
        let arrayMal = personajes.filter(personaje => personaje.gender == "female");
        dibujarTarjetas(arrayMal);
        document.querySelector("#pGender").innerHTML = "Male";
        filtroGender.setAttribute("data-gender", "male");
    }
});

filtroFav.addEventListener("click", () => {
    let arrayFav = personajes.filter(personaje => favoritosStorage.includes(personaje.id));
    dibujarTarjetas(arrayFav);
});