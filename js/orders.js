let personajesFiltrado = [];
let filtroAb = document.querySelector("#filtroAb");
let filtroAge = document.querySelector("#filtroAge");
let filtroHouse = document.querySelector("#filtroHouse");

filtroAb.addEventListener("click", () => {
    if(filtroAb.getAttribute("data-ab") == "asc"){
        let arrayAz = personajesFiltrado.sort(function (a, b) {
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
        let arrayAz = personajesFiltrado.sort(function (a, b) {
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

filtroAge.addEventListener("click", () => {
  if(filtroAge.getAttribute("data-age") == "mayor"){
      let arrayAz = personajesFiltrado.sort(function (a, b) {
          if (a.age === null) {
            return 1;
          }else{
            if (b.age === null) {
              return -1;
            }else{
              if (a.age === null && b.age === null) {
                return 0;
              }else{
                if (a.age.age > b.age.age) {
                  return 1;
                }
                if (a.age.age < b.age.age) {
                  return -1;
                }
                return 0;
              }
            }
          }
        });
      dibujarTarjetas(arrayAz);
      document.querySelector("#pAge").innerHTML = "A menor";
      filtroAge.setAttribute("data-age", "menor");
  }else{
      let arrayAz = personajesFiltrado.sort(function (a, b) {
        if (a.age === null) {
          return 1;
        }else{
          if (b.age === null) {
            return -1;
          }else{
            if (a.age === null && b.age === null) {
              return 0;
            }else{
              if (a.age.age < b.age.age) {
                return 1;
              }
              if (a.age.age > b.age.age) {
                return -1;
              }
              return 0;
            }
          }
        }
        });
      dibujarTarjetas(arrayAz);
      document.querySelector("#pAge").innerHTML = "A mayor";
      filtroAge.setAttribute("data-age", "mayor");
  }
});

filtroHouse.addEventListener("click", () => {
      let arrayAz = personajesFiltrado.sort(function (a, b) {
          if (a.house === null) {
            return 1;
          }else{
            if (b.house === null) {
              return -1;
            }else{
              if (a.house === null && b.age === null) {
                return 0;
              }else{
                if (a.house > b.house) {
                  return 1;
                }
                if (a.house < b.house) {
                  return -1;
                }
                return 0;
              }
            }
          }
        });
      dibujarTarjetas(arrayAz);
});