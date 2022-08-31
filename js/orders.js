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
        return;
    }
    if(filtroAb.getAttribute("data-ab") == "des"){
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
        return;
    }
});

filtroAge.addEventListener("click", () => {
  if(filtroAge.getAttribute("data-age") == "mayor"){
      let arrayAz = personajesFiltrado.sort(function (a, b) {
          if (a.age === null || a.age.age === undefined) {
            return 1;
          }
          if (b.age === null || b.age.age === undefined) {
            return -1;
          }  
          if (a.age === null && b.age === null) {
            return 0;
          }
          if (a.age.age > b.age.age) {
            return 1;
          }
          if (a.age.age < b.age.age) {
            return -1;
          }
          if (a.age.age === b.age.age) {
            return 0;
          }
      });
      dibujarTarjetas(arrayAz);
      document.querySelector("#pAge").innerHTML = "A menor";
      filtroAge.setAttribute("data-age", "menor");
      return;
  }

  if(filtroAge.getAttribute("data-age") == "menor"){
      let arrayAz = personajesFiltrado.sort(function (a, b) {
        console.log(a)
        if (a.age === null) {
          return 1;
        }
        if (b.age === null) {
          return -1;
        }
        if (a.age === null && b.age === null) {
          return 0;
        }
        if (a.age.age < b.age.age) {
          return 1;
        }
        if (a.age.age > b.age.age) {
          return -1;
        }
        if (a.age.age === b.age.age) {
          return 0;
        }
      });
      dibujarTarjetas(arrayAz);
      document.querySelector("#pAge").innerHTML = "A mayor";
      filtroAge.setAttribute("data-age", "mayor");
      return;
  }
});

filtroHouse.addEventListener("click", () => {
      let arrayAz = personajesFiltrado.sort(function (a, b) {
          if(a.house === null) {
            return 1;
          }
          if(b.house === null) {
            return -1;
          }
          if(a.house === null && b.age === null) {
            return 0;
          }
          if (a.house > b.house) {
            return 1;
          }
          if (a.house < b.house) {
            return -1;
          }
          if (a.house === b.house) {
            return 0;
          }
        });
        dibujarTarjetas(arrayAz);
});