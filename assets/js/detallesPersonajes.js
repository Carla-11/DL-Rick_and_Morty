import Personajes from "./personajes.js";

export default class DetallesPersonajes extends Personajes{
     constructor(id, name,species, gender, created, origin,status){
          super(id);
          let _name = name;
          this.getName = () => _name
          this.setName = (newName) => _name = newName
          
          let _status = status;
          this.getStatus = () =>_status;
          this.setStatus = (newStatus) => _status = newStatus;

          let _species = species;
          this.getSpecies = () => _species
          this.setSpecies = (newSpecies) => _species = newSpecies

          let _gender = gender;
          this.getGender = () => _gender
          this.setGender = (newGender) => _gender = newGender

          let _origin = origin;
          this.getOrigin = () => _origin
          this.setOrigin = (newOrigin) => _origin = newOrigin

        
          this._created = created;
          this._location = location;
          this._episode = episode;

              //get name, status, species, gender;
    
    }

    get name(){
        return this.getName();
    }

    get status(){
        return this.getStatus();
    }



   mostrarpersonajes(){

    return ` <ul>
    <li>${this.id}</li>
    <li>${this.species}</li>
    </ul>`;
   }




     

}


//Crear un archivo con el nombre de “detallesPersonajes.js” que exporte una clase hija
//con el nombre de “DetallesPersonajes” y reciba en su constructor las propiedades
//indicadas en el diagrama de clases. Agregando métodos get y set para obtener los
//atributos name, status, species y gender. Además, utilizar closures solo para los
//atributos name y status