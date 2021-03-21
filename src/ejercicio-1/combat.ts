import {Pokemon} from '../ejercicio-1/pokemon';

/**
 * Clase para implementar los combates
 */
 export class Combat {
    /**
     * Constructor
     * @param pokemon1 pokemon que ataca primero
     * @param pokemon2 pokemon que ataca segundo
     */
    constructor (private pokemon1 :Pokemon, private pokemon2 :Pokemon){
    }

    /**
     * Funcion getP1
     * @returns pokemon1
     */
    public getP1(){
        return this.pokemon1
    }

    /**
     * Funcion setP1
     * @param pokemon pokemon a asignar como pokemon1
     */
    public setP1(pokemon :Pokemon){
        this.pokemon1 = pokemon
    }

    /**
     * Funcion getP2
     * @returns pokemon2
     */
    public getP2(){
        return this.pokemon2
    }

    /**
     * Funcion setP2
     * @param pokemon pokemon a asignar como pokemon2
     */
    public setP2(pokemon :Pokemon){
        this.pokemon2 = pokemon
    }

    /**
     * Funcion pokemonDamage
     * @param atacante pokemon que tiene el turno para atacar (1 o 2)
     * @returns daño realizado por el pokemon que ataca
     */
    public pokemonDamage(atacante :number){
        var tipo1 = this.pokemon1.getTipo();
        var tipo2 = this.pokemon2.getTipo();
        var at1 = this.pokemon1.getEstadisticas().ataque
        var df1 = this.pokemon1.getEstadisticas().defensa
        var at2 = this.pokemon2.getEstadisticas().ataque
        var df2 = this.pokemon2.getEstadisticas().defensa

        var efectividad1 :number = 0.0;
        var efectividad2 :number = 0.0;
    
        switch (true) {
            case tipo1 == "fuego" && tipo2 =="hierba":
            case tipo1 == "agua" && tipo2 =="fuego":
            case tipo1 == "hierba" && tipo2 =="agua":
            case tipo1 == "electrico" && tipo2 =="agua":
                efectividad1 = 2.0;
                efectividad2 = 0.5;
                break;
            case tipo1 == "fuego" && tipo2 =="electrico":
            case tipo1 == "electrico" && tipo2 =="fuego":
            case tipo1 == "hierba" && tipo2 =="electrico":
            case tipo1 == "electrico" && tipo2 =="hierba":
                efectividad1 = 1.0;
                efectividad2 = 1.0;
                break;
            case tipo1 == tipo2:
            case tipo1 == "hierba" && tipo2 =="fuego":
            case tipo1 == "fuego" && tipo2 =="agua":
            case tipo1 == "agua" && tipo2 =="hierba":
            case tipo1 == "hierba" && tipo2 =="fuego":
                efectividad1 = 0.5;
                efectividad2 = 2.0;
                break;
            default:
                break;
        }

        if (efectividad1 == 0 || efectividad2 == 0){
            return ("Error: Tipo mal especificado")
        }

        var damage :number = 0
        if (atacante == 1){
        damage = 50 * (at1/df2) * efectividad1;
        }
        if (atacante == 2){
        damage = 50 * (at2/df1) * efectividad2;
        }
        return damage;
    }

    /**
     * Funcion start
     * Inicia el combate e inidica las variaciones de las vidas de los pokemons enfrentados con cada ataque
     * @returns mensaje inidicando que pokemon resulta vencedor
     */
    public start(){

        while (this.pokemon1.getEstadisticas().hp > 0 && this.pokemon2.getEstadisticas().hp > 0){
            var ataque1 :(number|string) = this.pokemonDamage(1)
            var ataque2 :(number|string) = this.pokemonDamage(2)
            if (typeof ataque1 === "number" && typeof ataque2 === "number"){
                ataque1 = Math.round(ataque1);
                ataque2 = Math.round(ataque2);

            var vidaNueva2 : number = this.pokemon2.getEstadisticas().hp - ataque1;
            if (vidaNueva2 < 0){
                vidaNueva2 = 0;
            }
            this.pokemon2.setHp(vidaNueva2)
            console.log(this.pokemon1.getNombre(),"ha hecho",ataque1, "puntos de daño")
            console.log("A",this.pokemon2.getNombre(),"le quedan",this.pokemon2.getEstadisticas().hp,"puntos de vida")
            if (this.pokemon2.getEstadisticas().hp == 0){
                break;
            }

            var vidaNueva1 : number = this.pokemon1.getEstadisticas().hp - ataque2;
            if (vidaNueva1 < 0){
                vidaNueva1 = 0;
            }
            this.pokemon1.setHp(vidaNueva1)
            console.log(this.pokemon2.getNombre(),"ha hecho",ataque2, "puntos de daño")
            console.log("A",this.pokemon1.getNombre(),"le quedan",this.pokemon1.getEstadisticas().hp,"puntos de vida")
            if (this.pokemon1.getEstadisticas().hp == 0){
                break;
            }

            } else {
                return "Error: Tipo de algún pokemon mal especificado"
            }
        }

        if (this.pokemon1.getEstadisticas().hp <= 0){
            return ('\n' + this.pokemon2.getNombre() + ' ha vencido')
        } else{
            return ('\n' + this.pokemon1.getNombre() + ' ha vencido')
        }
    }
    
}