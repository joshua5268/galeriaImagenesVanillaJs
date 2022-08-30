
let filtroAb = document.querySelector("#filtroAb");

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