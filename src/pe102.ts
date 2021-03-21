/**
 * 
 */

class Rational {
    private num :number;
    private den :number;
  
    constructor(num :number, den :number) {
    console.assert(den != 0);
      this.num = num;
      this.den = den;
    }


    public get_num(){
        return this.num
    }

    public get_den(){
        return this.den
    }

    public simplificar() {
        var i = this.num;
        while(1) {
            if (this.num%i != 0) {
                i++
            } else {
                i--;
            }
            
            if (i == 1) {
                break;
            }
        }
    
        return new Rational(this.num/i,this.den/i)
    }

    public invertir() {
        var aux = this.num;
        return new Rational(this.den,aux)
    }
       
}

function imprimir (r :Rational){
    console.log(r.get_num(), "/",r.get_den())
}

var r1 = new Rational(2,4)

imprimir(r1);

var r = r1.invertir()

imprimir(r);

r = r1.simplificar()

imprimir(r);


