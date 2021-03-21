import 'mocha';
import {expect} from 'chai';
import {Articulo} from '../src/ejercicio-2/articulo';
import {Gestor} from '../src/ejercicio-2/gestor';

describe('Ejercicio 2: Gestor bibliográfico', () => {
    var articulo1 = new Articulo("A modified descent method-based heuristic for binary quadratic knapsack problems with conflict graphs", ["Isma Dahmani"], ["isma@gmail.com"], ["heuristic", "binary"],
    "The knapsack problem arises in a variety of real world applications, including flexible manufacturing systems, railway stations, hydrological studies and others.",
    2021, "SpringerLink", 298);

    var articulo2 = new Articulo("Tax Default Prediction Using Feature Transformation-Based Machine Learning", ["Mohammad Zoynul","Guotai Chi"], ["Moha@gmail.com","Guotai@gmail.com"], ["tax"],
    "This study proposes to address the economic significance of unpaid taxes by using an automatic system for predicting a tax default.",
    2020, "IEEE", 128);

    var gestor1 = new Gestor([articulo1,articulo2])

    describe('Probar llamadas a las funciones de la clase Articulo', () => {
        it('Titulo del articulo funciona', () => {
            expect(articulo1.getTitulo()).to.be.equal("A modified descent method-based heuristic for binary quadratic knapsack problems with conflict graphs");
        });
        it('Autor / autores del articulo funciona', () => {
            expect(articulo1.getAutor()).to.deep.equal(["Isma Dahmani"]);
        });
        it('Email del autor del articulo funciona', () => {
            expect(articulo1.getEmail()).to.deep.equal(["isma@gmail.com"]);
        });
        it('Keywords del articulo funciona', () => {
            expect(articulo1.getKeywords()).to.deep.equal(["heuristic","binary"]);
        });
        it('Resumen del articulo funciona', () => {
            expect(articulo1.getResumen()).to.be.equal("The knapsack problem arises in a variety of real world applications, including flexible manufacturing systems, railway stations, hydrological studies and others.");
        });
        it('Fecha de publicacion del articulo funciona', () => {
            expect(articulo1.getFecha()).to.be.equal(2021);
        });
        it('Editorial del articulo funciona', () => {
            expect(articulo1.getEditorial()).to.be.equal("SpringerLink");
        });
        it('Numero de citas del articulo funciona', () => {
            expect(articulo1.getNumCitas()).to.be.equal(298);
        });
    });

    describe('Prueba para mostrar articulos por pantalla', () => {
        it('funcion muestraArticulos', () => {
            gestor1.muestraArticulos();
        });            
    });
    /*
    describe('Prueba para el buscador', () => {
        it('buscar por autor', () => {
            gestor1.buscaArticulos(["Isma Dahmani"], ["autor"]);
        }); 
        it('buscar por keyword', () => {
            gestor1.buscaArticulos(["tax"], ["keyword"]);
        });    
    });
    */
});

