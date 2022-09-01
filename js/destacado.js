let btnDestacado = document.querySelector("#btnDestacado");
let aleatorio = Math.floor(Math.random() * 215);

btnDestacado.addEventListener("click", () => {
    let destacado = personajes[aleatorio];
    divMostrarResultados.innerHTML="";

    let contenido = document.createElement("div")
    contenido.classList.add("col-lg-12", "bg-1", "py-4", "rounded", "text-white");
    contenido.innerHTML = `
        <div class="row">
            <div class="col-lg-4 d-flex justify-content-center align-items-center">
                <img src="${destacado.image}" class="img-fluid rounded" alt="...">
            </div>
            <div class="col-lg-8 px-2">
                <div class="card-body">
                <h3 class="card-title text-center">${destacado.name}</h3>
                <h4 class="card-title text-center">${destacado.house}</h4>
                <p class="card-title fs-5">Alive: ${destacado.alive}</p>
                <p class="card-title fs-5">Gender: ${destacado.gender}</p>
                <p class="card-title fs-5">Actor: ${destacado.actor}</p>
                <p class="card-title fs-5">Father: ${destacado.father}</p>
                <p class="card-title fs-5">Origin: ${destacado.origin}</p>
                <p class="card-title fs-5">Spouse: ${destacado.spouse}</p>
                <p class="card-title fs-5">Religion: ${destacado.religion}</p>
                <p class="card-title fs-5">Culture: ${destacado.culture}</p>
                <p class="card-title fs-5">Siblings: ${destacado.siblings}</p>
                <p class="card-title fs-5">Titles: ${destacado.titles}</p>
                <p class="card-title fs-5">Allegiances: ${destacado.allegiances}</p>
                </div>
            </div>
        </div>
    `;



    divMostrarResultados.append(contenido);
});
