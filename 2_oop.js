//clastan başka bir class üretme

class Araba {
    constructor(marka, modeli, yasi){
        this.marka=marka;
        this.modeli=modeli;
        this.yasi=yasi;

    }
    bilgi =() =>{
        return `Bu araba bir ${this.marka} dir.`
    }
}

class Motosiklet extends Araba{

}

var moto1 = new Motosiklet ('Honda', 'S3', 2015)
console.log (moto1)
//Bir Motosiklet oluşturduk. Bu tüm özelliklerini araba'dan aldı.

