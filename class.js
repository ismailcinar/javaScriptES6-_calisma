class Personel{
    constructor(ad,soyad){
        this.ad=ad;

        this.soyad=soyad;

    }
    kaydet(){
        console.log("Personel kaydedildi."+this.ad);
    }
}
const personel =new Personel("Kazim","Karabekir")
personel.kaydet();
personel.ad="Kazim"
console.log(personel.ad);

