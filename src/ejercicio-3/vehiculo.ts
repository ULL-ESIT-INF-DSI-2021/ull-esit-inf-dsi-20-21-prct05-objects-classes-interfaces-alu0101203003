import {Movable} from "./movable";
/**
 * Clase padre Vehiculo
 * Implementa la interfaz Movable
 */
export class Vehiculo implements Movable {
    /**
     * Constructor
     * @param velocidad velocidad en km/h a la que se mueve
     * @param dimensiones "largoXancho" en metros del vehiculo
     */
    constructor (public velocidad :number,public dimensiones :string){
    }
}