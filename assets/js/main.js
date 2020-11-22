import DetallesPersonajes from "./detallesPersonajes.js";

console.log(DetallesPersonajes);

//Punto 3: Crear un archivo “main.js” que importe la clase hija “DetallesPersonajes” y realice
//una función IIFE con el nombre de “llamadoPersonajes”

//Punto 4: Agregar tres variables privadas dentro de la función IIFE “llamadoPersonajes”, en
//donde la primera variable debe contener la URL base de la API, mientras que la
//segunda variable la captura del elemento donde se mostrarán los resultados, es
//decir, mediante el DOM traer el elemento con el identificador de resultados.
//Finalmente, la tercera variable sin valor alguno asignando para almacenar el
//resultado que retorne el llamado de la API, esta variable será una variable
//contenedora de datos de la API en los siguientes requerimientos. (1 Punto)

let llamadoPersonajes = (() => {

    let url = "https://rickandmortyapi.com/api/character";
    let data;
    let cantidadPersonajes = document.getElementById('cantidadPersonajes');//mostrar
    let resultados = document.querySelector('.resultados');


    let respuesta = async  (urlbase) => {
        try{
                let respuesta = await fetch(urlbase);
                data = await respuesta.json();
                return data;

        }catch(error){

          console.log(error)
            
        }
    };



  return{

    mostrarpersonajes: async () => {

        let datapers = await respuesta(url);
       console.log(datapers.results);
       datapers.results.forEach(element => {
           resultados.innerHTML += `
           <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
           <img src="${element.image}" type="button" data-toggle="modal" data-target="" alt="">
           <div id="char-${element.name}" class="d-inline-block">
             <h4>${element.name}</h4>
             <h4>${element.status}</h4>
          
           
           </div>

           </div>`;

           console.log(element);
       });


        
       // let personajes = new DetallesPersonajes(id, name,species,gender,created, origin, status);


    }


  }

})();

console.log(llamadoPersonajes.mostrarpersonajes());
