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

Paso a explicar la resolución de cada ejercicio y a adjuntar su código y expectativa. Se mostrará una versión simplificada de los enunciados de los ejercicios (para verlos al completo con aclaraciones y pistas, consultar la [guía de la práctica](https://ull-esit-inf-dsi-2021.github.io/prct05-objects-classes-interfaces/)

#### 1.1 Ejercicio 1

**Enunciado:**
A partir del Ejercicio 9 realizado en la Práctica 3, cree la estructura de clases e interfaces que considere oportuna para representar el siguiente escenario.

Se pide crear una Pokedex donde se almacene la información relacionada con distintos Pokemons. Para cada Pokemon, se deben almacenar los siguientes elementos de información en la Pokedex:

    Nombre del Pokemon
    Peso y altura
    Tipo
    Estadísticas básicas: ataque, defensa, velocidad, daño máximo (HP). Puede encontrar información relativa aquí.

Por último, diseñe una clase Combat que simule el combate entre dos Pokemons. Para ello, un objeto de dicha clase deberá ser construido con dos contrincantes. Además, reescriba la función del ejercicio 9 de la práctica 3 como un método de esta clase. Incluya también un método start dentro de la clase Combat que realice la simulación del combate. Este método se basará en lo siguiente:

    Se realizarán ataques entre los contrincantes hasta que el daño sufrido por uno de ellos sea igual o superior a su HP.
    Se considera que el primero de los contrincantes que recibe un objeto de la clase Combat será siempre el primero en realizar un ataque.
    El método deberá mostrar por pantalla la evolución del combate. Esto es, después de cada ataque se debe mostrar el estado de HP de cada contrincante.

**Resolución:**
