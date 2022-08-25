function dibujarTarjetas(arreglo){

    document.querySelector("#resultados").innerHTML="";

    arreglo.forEach(elemento => {
        
        let col = document.createElement("div");
        col.classList.add("col", "mt-4");

        let tar = document.createElement("div");
        tar.classList.add("tarjeta", "rotar2");
        tar.setAttribute("data-flip", `${elemento.id}`);

        let box = document.createElement("div");
        box.classList.add("box");

        // Frente de la tarjeta
        let cardf = document.createElement("div");
        cardf.classList.add("card", "front");

        cardf.innerHTML = `
        <button class="buttonFav" data-type="favoritos" id="${elemento.id}">💛</button>
        <img src="${elemento.image}" data-girar="${elemento.id}">
        <div class="card-body">
            <p class="card-title fs-3">${elemento.name}</p>
            <p class="card-text fs-6">${elemento.house}</p>
        </div>
        `;

        //Cara trasera de la tarjeta
        let cardb = document.createElement("div");
        cardb.classList.add("card", "back");

        let cardbody = document.createElement("div");
        cardbody.classList.add("card-body");
        cardbody.setAttribute("style", "text-align: left");
        cardbody.setAttribute("data-girar", `${elemento.id}`);
        cardb.append(cardbody);

        let card1 = document.createElement("div");
        card1.innerHTML = `
            <p class="card-title fs-4">${elemento.name}</p>
            <p class="card-title fs-5">${elemento.house}</p>
        `;
        cardbody.append(card1);

        if(elemento.age){
            let card2 = document.createElement("div");
            card2.innerHTML = `
                <p class="card-title fs-6">Age: ${elemento.age.age} years old</p>
            `;
            cardbody.append(card2);
        }

        let card3 = document.createElement("div");
        card3.innerHTML = `
            <p class="card-title fs-6">Gender: ${elemento.gender}</p>
            <p class="card-title fs-6">Father: ${elemento.father}</p>
            <p class="card-title fs-6">Origin: ${elemento.origin}</p>
            <p class="card-title fs-6">Spouse: ${elemento.spouse}</p>
            <p class="card-title fs-6">Religion: ${elemento.religion}</p>
            <p class="card-title fs-6">Culture: ${elemento.culture}</p>
            <p class="card-title fs-6">Siblings: ${elemento.siblings}</p>
            <p class="card-title fs-6">Titles: ${elemento.titles}</p>
        `;
        cardbody.append(card3);
        
        box.append(cardf);
        box.append(cardb);
        tar.append(box);
        col.append(tar);

        document.querySelector("#resultados").append(col);

        //pinta favoritos
        if(favoritosStorage && favoritosStorage.includes(elemento.id)){
            document.getElementById(elemento.id).innerHTML = "❤️";
        }
    });
}