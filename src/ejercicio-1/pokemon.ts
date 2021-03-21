/**
 * Clase que almacena la información de un pokemon
 */
 export class Pokemon {
    private EstadisticasBasicas = {
        ataque : 0,
        defensa : 0,
        velocidad :0,
        hp : 0,
    }

    /**
     * Constructor
     * @param nombre nombre del pokemon
     * @param peso peso del pokemon
     * @param altura altura del pokemon
     * @param tipo tipo del pokemon
     * @param estadisticas estadisticas asignables al atributo "EstadisticasBasicas" del pokemon
     */
    constructor (private nombre :string, private peso :number, private altura :number, private tipo :string, estadisticas :number[]){
        this.EstadisticasBasicas.ataque = estadisticas[0];
        this.EstadisticasBasicas.defensa = estadisticas[1];
        this.EstadisticasBasicas.velocidad = estadisticas[2];
        this.EstadisticasBasicas.hp = estadisticas[3];
    }

    /**
     * Funcion getNombre
     * @returns nombre
     */
    public getNombre(){
        return this.nombre
    }

    /**
     * Funcion setNombre
     * @param nombre nombre a asignar
     */
    public setNombre(nombre :string){
        this.nombre = nombre
    }

    /**
     * Funcion getPeso
     * @returns peso
     */
    public getPeso(){
        return this.peso
    }

    /**
     * Funcion setPeso
     * @param peso peso a asignar
     */
    public setPeso(peso :number){
        this.peso = peso
    }

    /**
     * Funcion getAltura
     * @returns altura
     */
    public getAltura(){
        return this.altura
    }

    /**
     * Funcion setAltura
     * @param altura altura a asignar
     */
    public setAltura(altura :number){
        this.altura = altura
    }

    /**
     * Funcion getTipo
     * @returns tipo
     */
    public getTipo(){
        return this.tipo
    }

    /**
     * Funcion setTipo
     * @param tipo tipo a asignar
     */
    public setTipo(tipo :string){
        this.tipo = tipo
    }

    /**
     * Funcion getEstadisticas
     * @returns EstadisticasBasicas
     */
    public getEstadisticas(){
        return this.EstadisticasBasicas
    }

    /**
     * Funcion setHp
     * @param hp vida a asignar
     */
    public setHp(hp :number){
        this.EstadisticasBasicas.hp = hp;
    }
}