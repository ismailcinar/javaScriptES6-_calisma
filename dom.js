
var intro1 = document.getElementById("intro1");

var mesaj = document.getElementById("mesaj");

mesaj.innerHTML = intro1.innerHTML;

var tumListeler = document.getElementsByTagName("ul");

var sehirler = tumListeler[0];

tumElemanlar = sehirler.getElementsByTagName("li");

for (i = 0; i < tumElemanlar.length; i++) {

  alert(tumElemanlar[i].innerHTML);

}
var classElemanlari = document.getElementsByClassName("intro1");
alert(classElemanlari[0].innerHTML)

var queryElemanlari = document.querySelectorAll("p.intro1");
alert(queryElemanlari.length);

var isimElemanlari = document.getElementsByName("musteriAdi")
alert(isimElemanlari[0].value);
var iso = document.getElementById("iso").addEventListener("click", rengiDegistir);
function rengiDegistir() {
    document.getElementById("div1").style.color = "blue";
    var isimElemanlari = document.getElementsByName("musteriAdi");
    isimElemanlari[0].value = "Kazım";
}

var baslik = document.createElement("h2");
var node = document.createTextNode("merbaha javascript");
baslik.appendChild(node)

var div1 = document.getElementById("div1");
var p2 = document.getElementById("p2");
div1.insertBefore(baslik,p2)
div1.removeChild(p2);
