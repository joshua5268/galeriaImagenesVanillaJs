let modal = document.querySelector(".modal1");
let cerrarModal = document.querySelector(".close");
let btnUp = document.querySelector("#btnDespUp");
let btnDown = document.querySelector("#btnDespDown");

cerrarModal.addEventListener("click", (e) => {
    e.preventDefault();
    modal.classList.remove('modal1--show');
    document.querySelector("#imageImg").setAttribute("src", "");
    document.querySelector("#nameNam").innerHTML = "";
});

function mostrarModal(elemento){
    let imagen = elemento.getAttribute("data-image");
    let nombre = elemento.getAttribute("data-name");
    let modal = document.querySelector(".modal1");

    document.querySelector("#imageImg").setAttribute("src", imagen);
    document.querySelector("#nameNam").innerHTML = nombre;
    modal.classList.add('modal1--show');
}

btnUp.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});

btnDown.addEventListener("click", () => {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
    });
});