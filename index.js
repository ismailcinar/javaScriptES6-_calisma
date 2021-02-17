var kullanicilar= [
    {email:"ismailcinar@gmail.com",sifre:"12345"},
    {email:"ismailciiiinar@gmail.com",sifre:"12345"}
]
var tivitler =[
    {email:"ismailcinar@gmail.com",tivit:"Bugün hava güzel"},
    {email:"ismailciiiinar@gmail.com",tivit:"hava güzel"}

]

var email =prompt("email?")
var sifre =prompt("sifre?")

function giris(){
    if(email ==kullanicilar[0].email&& sifre==kullanicilar[0].sifre||
        email ==kullanicilar[1].email&& sifre==kullanicilar[1].sifre){
            console.log(tivitler)
        }
else{
    console.log("şifre hatalı")
}
}
giris(email,sifre)