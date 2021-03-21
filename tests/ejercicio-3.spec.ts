
import 'mocha';
import {expect} from 'chai';
import {Vehiculo} from "../src/ejercicio-3/vehiculo";
import {Peaton} from '../src/ejercicio-3/peaton';
import {Bicicleta} from '../src/ejercicio-3/bicicleta';
import {Patinete} from '../src/ejercicio-3/patinete';
import {Coche} from '../src/ejercicio-3/coche';
import {Moto} from '../src/ejercicio-3/moto';
import {Guagua} from '../src/ejercicio-3/guagua';
import {Tren} from '../src/ejercicio-3/tren';
import {Street} from '../src/ejercicio-3/street';

describe('Ejercicio 3: Medios de transporte', () => {
    var calle1 = new Street("Fifth Avenue", "New York", ["Coche","Moto", "Bicicleta","Peaton", "Tren"])

    var coche1 = new Coche(62,"4.8x1.7",112,"9237 DFB")
    var coche2 = new Coche(46,"3.6x1.8",98,"4522 LHC")
    var coche3 = new Coche(50,"3.6x1.8",101,"1009 KGL")
    var moto1 = new Moto(70,"2.0x0.7",74,"2301 HGG")
    var bicicleta1 = new Bicicleta(16,"1.7x0.6")
    var peaton1 = new Peaton(3,"0.5x0.6")
    var peaton2 = new Peaton(2,"0.4x0.6")
    var peaton3 = new Peaton(4,"0.5x0.5")
    var peaton4 = new Peaton(3,"0.6x0.5")
    var tren1 = new Tren(67,"30x4",20)
    
    calle1.addVehiculo(coche1)
    calle1.addVehiculo(coche2)
    calle1.addVehiculo(coche3)
    calle1.addVehiculo(moto1)
    calle1.addVehiculo(bicicleta1)
    calle1.addVehiculo(peaton1)
    calle1.addVehiculo(peaton2)
    calle1.addVehiculo(peaton3)
    calle1.addVehiculo(peaton4)
    calle1.addVehiculo(tren1)

    describe('Probar llamadas a algunas funciones', () => {
        it('Se puede obtener la matricula de un coche', () => {
            expect(coche1.getMatricula()).to.be.equal("9237 DFB");
        });
        it('Se puede obtener las emisiones de una moto', () => {
            expect(coche1.getEmisiones()).to.be.equal(112);
        });
    });
    describe('Prueba para mostrar por pantalla', () => {
        it('funcion contar los vehículos de cada tipo', () => {
            calle1.contarVehiculos();
        }); 
        it('mostrar vehiculos en circulación', () => {
            calle1.mostrarVehiculos();
        });            
    });
});