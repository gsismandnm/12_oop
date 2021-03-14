var  araba ={
    rengi:'kirmizi',
    model:'tofas',
    calistir:function(){
        console.log ('araba calisti');
    }
}

console.log (araba.rengi)
console.log(araba['modeli']);

console.log(araba.calistir());

//js'de nesneleri üç şekilde üretiyoruz. Bunlardan birisi function'lardan üretme, diğeri class'larden nesne üretmedir.

// İSİM VERİRKEN İLK HARFİ BÜYÜK SONRASI KÜÇÜKSE BUNUN BİR OBJE OLDUĞUNU VE NESNELER ÜRETİLDİĞİNİ GÖSTERİR.
// function Araba (marka, modeli, yasi){
//     this.marka =marka;
//     this.modeli =model;
//     this.yasi=yasi;
//     this.bilgi=function(){
//         return `Bu araba bir ${this.marka}'dir`
//     }
// }


// var araba1 = new Araba ('Audi', 'A3', 2015);
// var araba2 = new Araba (('Tofas', 'Sahin', 1995));

// console.log (araba1);
// araba1.rengi = 'Kirmizi';

// araba1.calistir =function (){
//     console.log('Araba calişti')
// }

// araba1.calistir();


//class = nesne

class Araba {
    constructor(marka, modeli, yasi){
        this.marka=marka;
        this.modeli=modeli;
        this.yasi=yasi;

    }
    bilgi =() =>{
        return `Bu araba bir ${this.marka} dir.`
    }
    method1 =() => 'Başka bir method';
}

var araba1 =new Araba ('Audi', 'A3', 2015);
var araba2 =new Araba ('Audi', 'A3', 1995);


