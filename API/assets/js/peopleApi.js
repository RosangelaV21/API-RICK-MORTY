// URL API - el http que vamos a consumir, guarda URL
const API = "https://jsonplaceholder.typicode.com/users"; 
const btnSearch = document.getElementById("btnSearch");

//Obtener los resultados de la API
const getData = (api) => {
  //fetch es ese request - es decir GET (trae la informacion de la api)
  //parametro (api) tiene la url, "https://jso
  // y esa URL tiene el array  con los 10 JSON como tal la url trae json
  //return para que retome lo que me respondio la peticion 
  //return: pedir (get: es fetch) (get trae lo de la url) y responde.
  //return: se encarga de retomar lo que devuelve la promesa
  return (
    fetch(api)
      // promesas: nos promete traernos lo que tenga si o si la API
      // si sale bien
      //la promesa responde algo (response)
      .then((response) => response.json())
      .then((json) => {
        //guardo en la palabra json los 10 (10 json que me trajo la api)
        //   console.log(json);

        fillData(json); //esta invocando (los json)le envio los datos con el parametro json (10 json de la api) para que los utilice //filldata es la funcion que va mostrar lo que se haga en java scrip en el html
      })
      .catch((error) =>{ //otra promesa
          console.log("Error in the API", error)

      })
  );
};

//tomar los datos de las personas es decir esos (10 json)
//llenar datos, recibiendo los datos

const fillData = (data) => {
 //crear codigo html dentro del js
    let html = "";
 //forEach es más rapido a la hora de recorrer ese array
 //pp (people) esta guardando cada item que recorre el foreach(recorre lo que haya) - porque se va a guardar

data.forEach(pp => {
   //concatena los datos a la variable para mostrarlos cuando sean invocados
html += '<div class="col">';
html += '<div class="card h-100" style="width: 12rem;">';
     html += `<h5 class="card-title">${pp.name}</h5>`;
     html += '<div class="card-body">';
     html += `<h5 class="text-muted">${pp.address.suite}<h5>`;
     html += `<p class="card-title">${pp.email}</p>`;
     html += `<p class="card-text">Episodes: ${pp.phone}</p>`;
     html += `<p class="card-text"> <a  href="${pp.website}" target="_blank">Web personal</a></p>`;
     html += "</div>";
     html += "</div>";
     html += "</div>";
    });

    //id de html, div, 
    // innerHTML va esccibir los que tenga la variable html
    document.getElementById("dataPeople").innerHTML = html
};

btnSearch.onclick = function () {
  //Un parametro recibe un valor - variables
  //se ejecuta la API
  getData(API);
};
