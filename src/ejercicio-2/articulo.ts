/**
 * Clase que almacena la información de un artículo.
 */
export class Articulo {
    /**
     * Constructor
     * @param titulo titulo del articulo
     * @param autor autor / autores del articulo
     * @param email email del autor / autores
     * @param keywords palabras clave del articulo
     * @param resumen resumen o abstract del articulo
     * @param fecha fecha de publicación del articulo
     * @param editorial editorial en la que se publicó el articulo
     * @param numCitas cantidad de veces que el articulo ha sido referenciado en otros trabajos
     */
    constructor(private titulo: string, private autor: string[], private email: string[], private keywords: string[], private resumen: string, private fecha: number,private editorial: string, private numCitas: number) {
    }

    /**
     * Funcion getTitulo
     * @returns titulo
     */
    public getTitulo() {
        return this.titulo;
    }

    /**
     * Funcion setTitulo
     * @param titulo titulo a asignar
     */
    public setTitulo(titulo: string) {
        this.titulo = titulo;
    }

    /**
     * Funcion getAutor
     * @returns autor
     */
    public getAutor() {
        return this.autor;
    }

    /**
     * Funcion setAutor
     * @param autor autor a asignar
     */
    public setAutor(autor: string) {
        this.autor.push(autor);
    }

    /**
     * Funcion getEmail
     * @returns  email
     */
    public getEmail() {
        return this.email;
    }

    /**
     * Funcion setEmail
     * @param email titulo a asignar
     */
    public setEmail(email: string) {
        this.email.push(email);
    }

    /**
     * Funcion getKeywords
     * @returns keywords
     */
    public getKeywords() {
        return this.keywords;
    }

    /**
     * Funcion setKeywords
     * @param keywords keywords a asignar
     */
    public setKeywords(keywords: string[]) {
        this.keywords = keywords
    }

    /**
     * Funcion getResumen
     * @returns resumen
     */
    public getResumen() {
        return this.resumen;
    }

    /**
     * Funcion setResumen
     * @param resumen resumen a asignar
     */
    public setResumen(resumen: string) {
        this.resumen = resumen;
    }

    /**
     * Funcion getFecha
     * @returns fecha
     */
    public getFecha() {
        return this.fecha;
    }

    /**
     * Funcion setFecha
     * @param fecha fecha a asignar
     */
    public setFecha(fecha: number) {
        this.fecha = fecha;
    }

    /**
     * Funcion getEditorial
     * @returns editorial
     */
    public getEditorial() {
        return this.editorial;
    }

    /**
     * Funcion setEditorial
     * @param editorial editorial a asignar
     */
    public setEditorial(editorial: string) {
        this.editorial = editorial;
    }

    /**
     * Funcion getNumCitas
     * @returns numCitas
     */
    public getNumCitas() {
        return this.numCitas;
    }

    /**
     * Funcion setCitas
     * @param num numero de citas a asignar
     */
    public setCitas(num: number) {
        this.numCitas = num;
    }

    /**
     * Funcion toAPA
     * Formatea el articulo para que sea de tipo APA
     */
    public toAPA(){
        var articulosCoinciden :string = ""
        articulosCoinciden = articulosCoinciden + this.autor[0]
        for (var i :number = 1; i < this.autor.length-1; i++){
            articulosCoinciden = articulosCoinciden + ", " + this.autor[i] + "."
        }
        articulosCoinciden = articulosCoinciden + " y " + + "."
        articulosCoinciden = articulosCoinciden + ' (' + this.fecha + '). ' + this.titulo + '. ' + this.editorial + '.';
        return articulosCoinciden;
    }
}
