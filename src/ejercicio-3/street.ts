import {Vehiculo} from "./vehiculo";
import {Coche} from './coche';
import {Moto} from './moto';
import {Patinete} from './patinete';
import {Tren} from './tren';
import {Guagua} from './guagua';
import {Bicicleta} from './bicicleta';
import {Peaton} from './peaton';

/**
 * Clase Street
 */
export class Street {
    /**
     * Constructor
     * @param nombre nombre de la calle
     * @param localizacion localizacion de la calle
     * @param tipos tipos de vehiculos que pueden circular por la calle
     */
    constructor (private nombre :string, private localizacion :string, private tipos :string[]){
    }

    private vehiculos :Vehiculo[] = []

    /**
     * Funcion addVehiculo
     * Comprueba que el vehiculo pueda circular por la calle y, si es así, lo añade
     * @param vehiculo vehiculo a añadir
     */
    public addVehiculo(vehiculo :Vehiculo){
        var i :number = 0;
        while(i<this.tipos.length){
            if(this.tipos[i] == vehiculo.constructor.name){
                this.vehiculos.push(vehiculo);
                break;
            } else {
                i++
            }
        }
        if (i == this.tipos.length){
            console.log("Un vehiculo tipo:", vehiculo.constructor.name, " no puede circular por la calle", this.nombre)
        }
    }

    /**
     * Funcion removeVehiculo
     * Elimina el vehículo de la pocisión indicada
     * @param i posición
     */
    public removeVehiculo(i :number){
        this.vehiculos.splice(i,1)
    }

    /**
     * Funcion contarVehiculos
     * Muestra por consola la cantidad de vehículos de cada tipo circulando
     */
    public contarVehiculos(){

        var contador :number[] = [0,0,0,0,0,0,0];
        for (var i :number = 0; i < this.vehiculos.length; i++){

            switch(true){
                case this.vehiculos[i] instanceof Peaton:
                    contador[0] = contador[0]+1;
                    break;
                case this.vehiculos[i] instanceof Bicicleta:
                    contador[1] = contador[1]+1;
                    break;
                case this.vehiculos[i] instanceof Patinete:
                    contador[2] = contador[2]+1;
                    break;
                case this.vehiculos[i] instanceof Coche:
                    contador[3] = contador[3]+1;
                    break;
                case this.vehiculos[i] instanceof Moto:
                    contador[4] = contador[4]+1;
                    break;
                case this.vehiculos[i] instanceof Guagua:
                    contador[5] = contador[5]+1;
                    break;
                case this.vehiculos[i] instanceof Tren:
                    contador[6] = contador[6]+1;
                    break;

                default: 
                break;
            }
        }
        var resultado = "En la calle " + this.nombre + " hay";
        var tipos_p :string[] = ["peatones","bicicletas","patinetes","coches","motos","guaguas","trenes"]
        var tipos_s :string[] = ["peaton","bicicleta","patinete","coche","moto","guagua","tren"]
        for (var i :number = 0; i<contador.length; i++){
            if (contador[i] == 1){
                resultado = resultado + " 1 " + tipos_s[i] + ",";
            }
            if (contador[i] > 1){
                resultado = resultado + " " + contador[i] + " " + tipos_p[i] + ",";
            }
        }
        resultado = resultado.slice(0,-1)
        console.log(resultado)
    }

    /**
     * Funcion MostrarVehiculos
     * Muestra por consola los vehículos circulando ordenados de mayor a menor velocidad
     */
    public mostrarVehiculos() {
        var resultado :string[] = []
        var ordenados :Vehiculo[] = this.vehiculos.sort((a, b) => b.velocidad - a.velocidad);
        for (var i :number = 0; i < ordenados.length; i++){
            resultado.push((ordenados[i].constructor.name))
        }
        console.table(ordenados)
    }
}