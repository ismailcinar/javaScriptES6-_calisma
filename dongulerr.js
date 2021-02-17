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
function kullaniciVarmi(email,sifre){
    for(i=0;i<kullanicilar.length;i++){
        if(kullanicilar[i]==email && kullanicilar.sifre[i]==sifre){
            return true;
        }
    }
    return false;
}
function giris(){
    if(kullaniciVarmi(email,sifre)){
            console.log(tivitler)
        }
else{
    console.log("şifre hatalı")
}
}
giris(email,sifre)