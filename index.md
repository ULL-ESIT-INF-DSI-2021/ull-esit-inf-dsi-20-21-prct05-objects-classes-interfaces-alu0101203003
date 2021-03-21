# Práctica 5: Objetos, clases e interfaces. Informe.
## Desarrollo de Sistemas Informáticos 
## Raúl Martín Rigor - alu0101203003@ull.edu.es

### Introducción

En este informe se resumen las actividades realizadas en la **práctica 5** para poner en práctica nuestros conocimientos de TypeScript sobre tipos de datos que son utilizados para agrupar elementos (arrays, tuplas y enumerados) a través de la implementación de distintas funciones en una serie de ejercicios.

### Objetivos

Al finalizar la práctica, habremos completado los siguientes objetivos:

* Separar las clases de un mismo cógdigo en ficheros
* Crear y manipular con soltura clases y sus respectivos atributos
* Crear interfaces implementables en nuestras clases
* Manejo de instancias, constructores y constructores simplificados
* Crear espectativas que incluyan `console.table()` para mostrar nuestros resultados en forma de tabla

### 1. Creación y configuración del driectorio del proyecto.

#### 1.1. Estructura inicial

Para la creación de la estructura inicial, seguiremos los mismos pasos que en practicas anteriores ([práctica 4](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct04-arrays-tuples-enums-alu0101203003/blob/gh-pages/index.md)).

La estructura debería quedar similar a las siguientes fotos:

<img src="img/Captura1a.PNG" alt="" height="250"/> <img src="img/Captura1b.PNG" alt="" /> <img src="img/Captura1c.PNG" alt="" />

#### 1.2. Organización de los ejercicios

Será necesario implementar las clases de cada ejercicio en ficheros diferentes. Las clases que dependan de otras requeriran de un `import` de la clase que necesiten:

<img src="img/Captura1d.PNG" alt="" /> <img src="img/Captura1e.PNG" alt="" />

### 2. Ejercicios

Paso a explicar la resolución de cada ejercicio y a adjuntar su código y expectativa. Se mostrará una versión simplificada de los enunciados de los ejercicios (para verlos al completo con aclaraciones y pistas, consultar la [guía de la práctica](https://ull-esit-inf-dsi-2021.github.io/prct05-objects-classes-interfaces/).

(Para poder acceder a los atributos privados que creemos en las clases usaremos funciones *set* y *get*, las cuales se pueden encontrar en el código fuente.)

#### 1.1 Ejercicio 1

**Enunciado:**
A partir del Ejercicio 9 realizado en la Práctica 3, cree la estructura de clases e interfaces que considere oportuna para representar el siguiente escenario.

Se pide crear una Pokedex donde se almacene la información relacionada con distintos Pokemons. Para cada Pokemon, se deben almacenar los siguientes elementos de información en la Pokedex:

* Nombre del Pokemon
* Peso y altura
* Tipo
* Estadísticas básicas: ataque, defensa, velocidad, daño máximo (HP). Puede encontrar información relativa aquí.

Por último, diseñe una clase Combat que simule el combate entre dos Pokemons. Para ello, un objeto de dicha clase deberá ser construido con dos contrincantes. Además, reescriba la función del ejercicio 9 de la práctica 3 como un método de esta clase. Incluya también un método start dentro de la clase Combat que realice la simulación del combate. Este método se basará en lo siguiente:

* Se realizarán ataques entre los contrincantes hasta que el daño sufrido por uno de ellos sea igual o superior a su HP.
* Se considera que el primero de los contrincantes que recibe un objeto de la clase Combat será siempre el primero en realizar un ataque.
* El método deberá mostrar por pantalla la evolución del combate. Esto es, después de cada ataque se debe mostrar el estado de HP de cada contrincante.

**Resolución:**

La clase pokemon almacena la informacion de cada pokemon y se construye de la siguiente manera:

```ts
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
```

La clase pokedex almacena todos los pokemons y se construye de la siguiente manera:

```ts
   /**
    * Constructor
    * @param pokemons conjunto de pokemons
    */
   constructor(private pokemons :Pokemon[]){}
```

La clase combat nos servirá para implementar los combates y obtener información de ellos:


```ts
  /**
   * Constructor
   * @param pokemon1 pokemon que ataca primero
   * @param pokemon2 pokemon que ataca segundo
   */
  constructor (private pokemon1 :Pokemon, private pokemon2 :Pokemon){
    }
```

La función principal es start, ya que con ella empezamos los combates. Start se encargará de usar el daño de los ataques entre los pokemons rivales para restar puntos de vida al pokemon que recibe el ataque.

Cuando algún pokemon se quede a 0 de vida, se parará el combate y se proclamará vencedor el pokemon que quede con vida:


```ts
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
```

Como podemos comprobar, start necesita de la función pokemonDamage, la cual se encargará de calcular el daño provocado por cada ataque en funcion de la efectividad de tipo para cada turno del combate:

```ts
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
```
<img src="img/1.PNG" alt="" />
