import 'mocha';
import {expect} from 'chai';
import {Pokemon} from '../src/ejercicio-1/pokemon';
import {Combat} from '../src/ejercicio-1/pokedex';
import {Pokedex} from '../src/ejercicio-1/combat';

describe('Ejercicio 1: Pokedex', () => {
    var bulbasaur = new Pokemon("Bulbasaur",6.9, 0.7,"hierba",[49,49,45,45])
    var pikachu = new Pokemon("Pikachu",6.0, 0.4,"electrico",[49,49,45,45])
    var charmander = new Pokemon("Charmander",8.5, 0.6,"fuego",[55,40,90,35])
    var psyduck = new Pokemon("Psyduck",19.6,0.8,"agua",[52,48,55,50])
    var gastrodon = new Pokemon("Gastrodon",29.9,0.9,"agua",[83,68,39,111])

    var pokedex = new Pokedex([bulbasaur,pikachu,charmander,psyduck,gastrodon])

    var combate1 = new Combat(pokedex.getPokemons()[0],pokedex.getPokemons()[2])
    var combate2 = new Combat(pokedex.getPokemons()[1],pokedex.getPokemons()[4])
    var combate3 = new Combat(pokedex.getPokemons()[2],pokedex.getPokemons()[3])

    describe('Probar llamadas a las funciones de la clase Pokemon', () => {
        it('bulbasaur.getNombre() returns value Bulbasur', () => {
          expect(bulbasaur.getNombre()).to.be.equal(`Bulbasaur`);
        });
    
        it('bulbasaur.getPeso() returns value 6.9', () => {
          expect(bulbasaur.getPeso()).to.be.equal(6.9);
        });
    
        it('bulbasaur.getAltura() returns value 0.7', () => {
          expect(bulbasaur.getAltura()).to.be.equal(0.7);
        });
    
        it('bulbasaur.getTipo() returns Hierba', () => {
          expect(bulbasaur.getTipo()).to.be.equal('Hierba');
        });
    
        it('bulbasaur.getEstadisticas() returns [49,49,45,45]', () => {
          expect(bulbasaur.getEstadisticas()).to.be.equal([49,49,45,45]);
        });

    });

    describe('Probar llamadas a las funciones de la clase Combat', () => {
        it('combate1.getP1() returns value bulbasur', () => {
          expect(combate1.getP1()).to.be.equal(bulbasaur);
        });

        it('combate1.getP2() returns value charmander', () => {
            expect(combate1.getP2()).to.be.equal(charmander);
        });
    
    });

    describe('Probar llamadas a las funciones de la clase Pokedex', () => {
        it('pokedex.getPokemons() returns [bulbasaur,pikachu,charmander,psyduck,gastrodon]', () => {
          expect(pokedex.getPokemons()).to.be.equal([bulbasaur,pikachu,charmander,psyduck,gastrodon]);
        });

    });  
    
    describe('Prueba para mostrar por pantalla', () => {
        it('Mostrar 3 combates:', () => {
            console.log("\n","--Empieza el primer combate--","\n")
            console.log(combate1.start());
            console.log("\n","--Empieza el segundo combate--","\n")
            console.log(combate2.start());
            console.log("\n","--Empieza el tercer combate--","\n")
            console.log(combate3.start());
        });       
    });


});