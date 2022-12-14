let divMostrarResultados = document.querySelector("#resultados");
let alertDiv = document.querySelector("#alertDiv");
let alertResultados = document.querySelector("#alertResultados");

function dibujarTarjetas(arreglo){
    
    divMostrarResultados.innerHTML="";
    
    if(arreglo.length !== 0){
        arreglo.forEach(elemento => {

            alertDiv.classList.replace("alert-danger","alert-dark");
        
            let col = document.createElement("div");
            col.classList.add("col" , "my-2");
    
            let tar = document.createElement("div");
            tar.classList.add("tarjeta", "rotar2");
            tar.setAttribute("data-flip", `${elemento.id}`);
    
            let box = document.createElement("div");
            box.classList.add("box");
    
            // Frente de la tarjeta
            let cardf = document.createElement("div");
            cardf.classList.add("card", "front", "bg-1", "card1");
    
            cardf.innerHTML = `
            <button class="buttonFav" data-type="favoritos" id="${elemento.id}">💛</button>
            <i class="bi bi-arrows-fullscreen expandirImage" data-modal="show" data-image="${elemento.image}" data-name="${elemento.name}"></i>
            <img src="${elemento.image}" data-girar="${elemento.id}" class="imgPhoto">
            <div class="card-body">
                <p class="card-title fs-4">${elemento.name}</p>
                <p class="card-text fs-6">${elemento.house}</p>
            </div>
            `;
    
            //Cara trasera de la tarjeta
            let cardb = document.createElement("div");
            cardb.classList.add("card", "back", "bg-1", "card1");
    
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
                <p class="card-title fs-6" data-girar="${elemento.id}">Alive: ${elemento.alive}</p>
                <p class="card-title fs-6" data-girar="${elemento.id}">Gender: ${elemento.gender}</p>
                <p class="card-title fs-6" data-girar="${elemento.id}">Actor: ${elemento.actor}</p>
                <p class="card-title fs-6" data-girar="${elemento.id}">Father: ${elemento.father}</p>
                <p class="card-title fs-6" data-girar="${elemento.id}">Origin: ${elemento.origin}</p>
                <p class="card-title fs-6" data-girar="${elemento.id}">Spouse: ${elemento.spouse}</p>
                <p class="card-title fs-6" data-girar="${elemento.id}">Religion: ${elemento.religion}</p>
                <p class="card-title fs-6" data-girar="${elemento.id}">Culture: ${elemento.culture}</p>
                <p class="card-title fs-6" data-girar="${elemento.id}">Siblings: ${elemento.siblings}</p>
                <p class="card-title fs-6" data-girar="${elemento.id}">Titles: ${elemento.titles}</p>
                <p class="card-title fs-6" data-girar="${elemento.id}">Allegiances: ${elemento.allegiances}</p>
            `;
            cardbody.append(card3);
            
            box.append(cardf);
            box.append(cardb);
            tar.append(box);
            col.append(tar);
    
            divMostrarResultados.append(col);
    
            //pinta favoritos
            if(favoritosStorage && favoritosStorage.includes(elemento.id)){
                document.getElementById(elemento.id).innerHTML = "❤️";
            }
    
        });
    }else{
        alertDiv.classList.replace("alert-dark","alert-danger");
    }
    
    alertResultados.innerHTML = `${arreglo.length} Resultados encontrados`;
}