import {Pokemon} from '../ejercicio-1/pokemon';

/**
 * Clase que almacena un conjunto de pokemons
 */
export class Pokedex {
    /**
     * Constructor
     * @param pokemons conjunto de pokemons
     */
    constructor(private pokemons :Pokemon[]){}

    /**
     * Funcion getPokemon
     * @returns pokemon a obtener
     */
    public getPokemons(){
        return this.pokemons
    }

    /**
     * Funcion setPokemon
     * @param pokemos conjunto de pokemons a asignar
     */
    public setPokemon(pokemons :Pokemon []){
        this.pokemons = pokemons
    }

    /**
     * Funcion addPokemon
     * @param pokemon pokemon a añadir al conjunto
     */
    public addPokemon(pokemon :Pokemon){
        this.pokemons.push(pokemon)
    }
}