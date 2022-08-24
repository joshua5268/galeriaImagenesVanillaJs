let personajes = [];


fetch("https://api.got.show/api/show/characters/")
.then(respuesta => respuesta.json())
.then(info => {
    personajes = info;
    tarjetas(personajes);
});


function tarjetas(arreglo){

    document.querySelector("#resultados").innerHTML="";

    arreglo.forEach(elemento => {
        // let col = document.createElement("div");
        // col.classList.add("col", "mt-4");

        // let tar = document.createElement("div");
        // tar.classList.add("tarjeta");

        // let box = document.createElement("div");
        // col.classList.add("box");

        // let cardf = document.createElement("div");
        // cardf.classList.add("card", "front");

        // cardf.innerHTML = `
        // <img src="${elemento.image}">
        // <div class="card-body">
        //     <p class="card-title fs-3">Jon Snow</p>
        //     <p class="card-text fs-6">House Stark</p>
        // </div>
        // `;

        // let cardb = document.createElement("div");
        // cardb.classList.add("card", "back");

        // cardb.innerHTML = `
        // <div class="card-body">
        //     <p class="card-title fs-3">Jon Snow</p>
        //     <p class="card-text fs-6">House Stark</p>
        // </div>
        // `;

        // box.append(cardf);
        // tar.append(box);
        // col.append(tar);

        let prueba = document.createElement("div");
        prueba.innerHTML = `
        <div class="col mt-4">
            <div class="tarjeta">
                <div class="box">
                    <div class="card front">
                        <img src="${elemento.image}" alt="">
                        <div class="card-body">
                            <p class="card-title fs-3">${elemento.name}</p>
                            <p class="card-text fs-6">${elemento.house}</p>
                        </div>
                    </div>
                    <div class="card back">
                        <div class="card-body pt-0" style="text-align: left;">
                            <p class="card-title fs-4">${elemento.name}</p>
                            <p class="card-text fs-6">Gender: ${elemento.gender}</p>
                            <p class="card-text fs-6">House: ${elemento.house}</p>
                            <p class="card-text fs-6">Age: ${elemento.age.age} years old</p>
                            <p class="card-text fs-6">Father: ${elemento.father}</p>
                            <p class="card-text fs-6">Origin: ${elemento.origin}</p>
                            <p class="card-text fs-6">Spouse: ${elemento.spouse}</p>
                            <p class="card-text fs-6">Religion: ${elemento.religion}</p>
                            <p class="card-text fs-6">Culture: ${elemento.culture}</p>
                            <p class="card-text fs-6">Siblings: ${elemento.siblings}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;

        document.querySelector("#resultados").append(prueba);
    });
}

{/* <div class="col mt-4">
    <div class="tarjeta">
        <div class="box">
            <div class="card front">
                <img src="" alt="">
                <div class="card-body">
                    <p class="card-title fs-3">Jon Snow</p>
                    <p class="card-text fs-6">House Stark</p>
                </div>
            </div>
            <div class="card back">
                <div class="card-body">
                    <p class="card-title fs-3">Jon Snow</p>
                    <p class="card-text fs-6">House Stark</p>
                </div>
            </div>
        </div>
    </div>
</div> */}