const API = "https://rickandmortyapi.com/api/character";

//obtener los resultados de la API osea la url
const getData = (api) => {
  //retorna el resultado de la API ya que el fetch se encarga de consumir la API ose (api) que tiene la url
  return fetch(api)
    .then((response) => response.json())
    .then((json) => {
      fillData(json);
    })

    .catch((error) => {
      console.log("Error:", error);
    });
};

const fillData = (data) => {
  //data es el mismo(json) aqui se reciben esas 5mil fotos
  
  let html = "";
  //let limit = 20; //aqui creamos un limite de 20 fotos porque si ponemos 5000 fotos se estalla todo
  // for (let i = 0; i < limit; i++) {
    data.results.forEach ((element) => {
    // utilizamos un for normal porte tiene limite, cuando no tiene limite es el foreach
    html += '<div class="col">';
    html += '<div class="card h-100" style="width: 12rem;">';
    html += `<img src="${element.image} " class="card-img-top" alt="${element.name}">`; //5mil fotos en la posicion i osea 0 1 2 3 4
    html += '<div class="card-body">';
    html += `<h5 class="card-title">${element.name}</h5>`;
    html += "</div>";
    html += "</div>";
    html += "</div>";
  });

  document.getElementById("dataAlbum").innerHTML = html;
};

//Se incova la funcion automaticamente, ya que no tenemos el boton

getData(API);
