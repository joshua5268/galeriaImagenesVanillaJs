let personajes = [];

fetch("https://api.got.show/api/show/characters/")
.then(respuesta => respuesta.json())
.then(info => {
    personajes = info;
    filtrarFavoritos(personajes);
    tarjetas(personajes);
});

function filtrarFavoritos(personajes){
    personajes.forEach(element => {
        if(favoritosStorage && favoritosStorage.includes(element.id)){
            let item = element;
            personajes.splice(personajes.indexOf(element), 1);
            personajes.unshift(item);
        }
    });
}

function tarjetas(arreglo){

    document.querySelector("#resultados").innerHTML="";

    arreglo.forEach(elemento => {
        let col = document.createElement("div");
        col.classList.add("col", "mt-4");

        let tar = document.createElement("div");
        tar.classList.add("tarjeta");

        let box = document.createElement("div");
        box.classList.add("box");

        let cardf = document.createElement("div");
        cardf.classList.add("card", "front");

        cardf.innerHTML = `
        <button class="buttonFav" data-type="favoritos" id="${elemento.id}">💛</button>
        <img src="${elemento.image}" alt="">
        <div class="card-body">
            <p class="card-title fs-3">${elemento.name}</p>
            <p class="card-text fs-6">${elemento.house}</p>
        </div>
        `;

        let cardb = document.createElement("div");
        cardb.classList.add("card", "back");

        let cardbody = document.createElement("div");
        cardbody.classList.add("card-body", "pt-0");
        cardbody.setAttribute("style", "text-align: left");

        let eleName = document.createElement("p");
        eleName.classList.add("card-title", "fs-4");
        eleName.innerHTML = elemento.name;
        cardbody.append(eleName);

        let eleGender = document.createElement("p");
        eleGender.classList.add("card-text", "fs-6");
        eleGender.innerHTML = `Gender: ${elemento.gender}`;
        cardbody.append(eleGender);

        let eleHouse = document.createElement("p");
        eleHouse.classList.add("card-text", "fs-6");
        eleHouse.innerHTML = `House: ${elemento.house}`;
        cardbody.append(eleHouse);

        if(elemento.age && elemento.age.age != undefined){
            let eleAge = document.createElement("p");
            eleAge.classList.add("card-text", "fs-6");
            eleAge.innerHTML = `Age: ${elemento.age.age} years old`;
            cardbody.append(eleAge);
        }

        let eleFather = document.createElement("p");
        eleFather.classList.add("card-text", "fs-6");
        eleFather.innerHTML = `Father: ${elemento.father}`;
        cardbody.append(eleFather);

        let eleOrigin = document.createElement("p");
        eleOrigin.classList.add("card-text", "fs-6");
        eleOrigin.innerHTML = `Origin: ${elemento.origin}`;
        cardbody.append(eleOrigin);

        let eleSpouse = document.createElement("p");
        eleSpouse.classList.add("card-text", "fs-6");
        eleSpouse.innerHTML = `Spouse: ${elemento.spouse}`;
        cardbody.append(eleSpouse);

        let eleReligion = document.createElement("p");
        eleReligion.classList.add("card-text", "fs-6");
        eleReligion.innerHTML = `Religion: ${elemento.religion}`;
        cardbody.append(eleReligion);

        let eleCulture = document.createElement("p");
        eleCulture.classList.add("card-text", "fs-6");
        eleCulture.innerHTML = `Culture: ${elemento.culture}`;
        cardbody.append(eleCulture);

        let eleSiblings = document.createElement("p");
        eleSiblings.classList.add("card-text", "fs-6");
        eleSiblings.innerHTML = `Siblings: ${elemento.siblings}`;
        cardbody.append(eleSiblings);

        let eleTitles = document.createElement("p");
        eleTitles.classList.add("card-text", "fs-6");
        eleTitles.innerHTML = `Titles: ${elemento.titles}`;
        cardbody.append(eleTitles);

        cardb.append(cardbody);
        box.append(cardf);
        box.append(cardb);
        tar.append(box);
        col.append(tar);

        document.querySelector("#resultados").append(col);

        if(favoritosStorage && favoritosStorage.includes(elemento.id)){
            document.getElementById(elemento.id).innerHTML = "❤️";
        }
    });
}