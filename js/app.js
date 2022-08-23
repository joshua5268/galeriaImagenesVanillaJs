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
        let col = document.createElement("div");
        col.classList.add("col", "mt-4");

        let box = document.createElement("div");
        col.classList.add("box");

        let card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
        <img src="${elemento.image}" class="card-img-top">
        <div class="card-body">
            <h5 class="card-title fs-3">${elemento.name}</h5>
            <p class="card-text fs-6">${elemento.house}</p>
        </div>
        `;

        box.append(card);
        col.append(box);
        document.querySelector("#resultados").append(col);
    });
}