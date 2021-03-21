import {Vehiculo} from "./vehiculo";

/**
 * Clase Tren
 * Hereda de la clase Vehiculo
 */
export  class Tren extends Vehiculo {
    /**
     * Constructor
     * @param velocidad velocidad en km/h a la que se mueve (heredada de vehiculo)
     * @param dimensiones "largoXancho" en metros del vehiculo (heredada de vehiculo)
     * @param emisiones gramos de CO2 por kilometro que emite el vehiculo
     */
    constructor (public velocidad :number,public dimensiones :string, private emisiones :number){
        super(velocidad,dimensiones)
    }

    /**
     * Funcion getEmisiones
     * @returns emisiones
     */
     public getEmisiones(){
        return this.emisiones
    }
}