class Bildirim {
    gonder = () => {
        var eposta = new EpostaBildirim();
        eposta.gonder();

        console.log('Bildirim yapildi');
    }
}

class Mesaj {
    constructor (mesaj){
        this.mesaj = mesaj;

    }
}



class EpostaBildirim  extends Mesaj{
    gonder = () => {
        console.log ('Eposta gönderildi.');
    }
    gonder = () => {
        console.log ('_________________');
        console.log (`Bu mesaj bir ${this.mesaj}dir.`)

    }
}


//BUTANA BASILILARAK ÇALIŞTIRDIK.

const buttonClicked = () => {
    var bildirim =new Bildirim ();
    bildirim.gonder();
}

buttonClicked();

var bildirim = new Bildirim();
bildirim.gonder();

//ŞİRKET POLİTİKASI DEĞİŞTİ VE SMS GÖNDERME KARARI ALDI.
