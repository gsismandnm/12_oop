class Bildirim {
    gonder = () => {
        var eposta = new EpostaBildirim();
        eposta.gonder();
        console.log('Bildirim yapildi');
    }
}

class EpostaBildirim {
    gonder = () => {
        console.log ('Eposta gönderildi.');
    }
}

//BUTANA BASILILARAK ÇALIŞTIRDIK.

var bildirim = new Bildirim();
bildirim.gonder();

//ŞİRKET POLİTİKASI DEĞİŞTİ VE SMS GÖNDERME KARARI ALDI.
