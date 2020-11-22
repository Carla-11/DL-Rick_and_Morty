export default class Personajes {

  constructor(id){
      
      let _id = id;
      this.getId = () => _id;
      this.setId = (new_id) => _id = new_id;
  }

  get id(){
      return this.getId();
  }
  set id(new_id){
      this.setId(new_id);
  }


  

};

//Crear un archivo con el nombre de “personajes.js” que exporte una clase padre con el
//nombre de “Personajes” y reciba en su constructor un id de personaje. Agregando
//métodos get y set para obtener el atributo, además de closures para proteger el
//atributo id.