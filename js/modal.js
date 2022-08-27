let modal = document.querySelector(".modal1");
let cerrarModal = document.querySelector(".close")

cerrarModal.addEventListener("click", (e) => {
    e.preventDefault();
    modal.classList.remove('modal1--show');
    document.querySelector("#imageImg").setAttribute("src", "");
    document.querySelector("#nameNam").innerHTML = "";
});