
import {Articulo} from '../ejercicio-2/articulo';
/**
 * Clase que contiene la información del Gestor Bibliográfico.
 */
export class Gestor {
    /**
     * Constructor
     * @param articulos conjunto de articulos
     */
    constructor(private articulos: Articulo[]) {
    }
  
    /**
     * Funcion muestraArticulos
     * Muestra los articulos por pantalla
     */  
    public muestraArticulos() {
      console.table(this.articulos);
    }
  
    /**
     * Funcion addArticulo
     * @param articulo articulo a añadir al conjunto
     */  
    public addArticulo(articulo: Articulo) {
      this.articulos.push(articulo);
    }

    /**
   * Funcion buscaArticulos
   * Arroja los articulos que coinciden con los filtros de búsqueda
   * @param keywords palabras claves por las que buscar
   * @param filtrar campo por el que filtrar
   * @returns El articulo/articulos filtrar en formato APA
   */
    public buscaArticulos(keywords: string[], filtrar: string[]) {
        var numero: number[] = [];
        for (var i: number = 0; i < keywords.length; i++) {
            for (var j: number = 0; j < this.articulos.length; j++) {
                for (var k: number = 0; k < filtrar.length; k++) {
                    if (filtrar[k] == 'keywords') {
                        for (var l: number = 0; l < this.articulos[j].getKeywords().length; l++) {
                            if (this.articulos[j].getKeywords()[l] == keywords[i]) {
                                numero.push(j);
                            }
                        }
                    }
                    if (filtrar[k] == 'fecha') {
                        if (this.articulos[j].getFecha().toFixed() == keywords[i]) {
                            numero.push(j);
                        }
                    }
                    if (filtrar[k] == 'autor') {
                        for (var l: number = 0; l < this.articulos[j].getAutor().length; l++) {
                            if (this.articulos[j].getAutor()[l] == keywords[i]) {
                                numero.push(j);
                            }
                        }
                    }

                    if (filtrar[k] == 'editorial') {
                        if (this.articulos[j].getEditorial() == keywords[i]) {
                            numero.push(j);
                        }
                    }
                }
            }
        }
        for (var i = numero.length -1; i >=0; i--) {
            if (numero.indexOf(numero[i]) !== i){
                numero.splice(i, 1);
            }
        }
        var articulosCoinciden: Articulo[] = [];
        var i :number = 0;
        while (i < numero.length) {
            articulosCoinciden.push(this.articulos[numero[i]]);
        }
        var resultado: string[] = [];
        for (var i: number = 0; i < articulosCoinciden.length; i++) {
            resultado.push(articulosCoinciden[i].toAPA());
            console.log(resultado[i]);
        }
        return resultado;    
    }
}
