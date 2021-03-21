import {Vehiculo} from "./vehiculo";

/**
 * Clase Patinete
 * Hereda de la clase Vehiculo
 */
export class Patinete extends Vehiculo {
    /**
     * Constructor
     * @param velocidad velocidad en km/h a la que se mueve (heredada de vehiculo)
     * @param dimensiones "largoXancho" en metros del vehiculo (heredada de vehiculo)
     */
    constructor (public velocidad :number,public dimensiones :string){
        super(velocidad,dimensiones)
    }
}