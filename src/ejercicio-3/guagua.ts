import {Vehiculo} from "./vehiculo";

/**
 * Clase Guagua
 * Hereda de la clase Vehiculo
 */
 export class Guagua extends Vehiculo {
    /**
     * Constructor
     * @param velocidad velocidad en km/h a la que se mueve (heredada de vehiculo)
     * @param dimensiones "largoXancho" en metros del vehiculo (heredada de vehiculo)
     * @param emisiones gramos de CO2 por kilometro que emite el vehiculo
     * @param matricula matricula del vehiculo
     */
    constructor (public velocidad :number,public dimensiones :string, private emisiones :number, private matricula :string ){
        super(velocidad,dimensiones)
    }

    /**
     * Funcion getEmisiones
     * @returns emisiones
     */
     public getEmisiones(){
        return this.emisiones
    }

    /**
     * Funcion getMatricula
     * @returns matricula
     */
    public getMatricula(){
        return this.matricula
    }
}