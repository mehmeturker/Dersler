var selektor1 = document.getElementById("selektor1");
var selektor2 = document.getElementById("selektor2");
var selektor3 = document.getElementById("selektor3");
var araba = document.getElementById("araba")

document.addEventListener("keydown",checkKey);
document.addEventListener("keyup",checkKeyUp);
var hiz=100;
var hizlan=false;
var sagadon=false;
var soladon=false;
function checkKey(e) {
      // l selektor
      e = e || window.event;
  if (e.key == 'f') {

    selektor() ; 
  }
  if (e.keyCode == '38') {
    hizlan=true;
  }
  if (e.keyCode == '39') {
    sagadon=true;
  }
  if (e.keyCode == '37') {
    soladon=true;
  }

}
function checkKeyUp(e) {
    // l selektor
    e = e || window.event;
if (e.key == 'f') {
    selektor() ;
}
if (e.keyCode == '38') {
    hizlan=false;
}
if (e.keyCode == '39') {
    sagadon=false;
}

if (e.keyCode == '37') {
    soladon=false;
}

}

for (let i = 0; i < 5; i++) {
    SeritEkle((i*150+20));
}
var ArabaLeft=25;
function ArabaKaydir() 
{
    if(ArabaLeft>10 && ArabaLeft<800)
    {
        araba.style.left=ArabaLeft+"px";
    }
}
function selektor () {
    if(selektor1.className.indexOf("gizle")!=-1)
    {
        selektor1.classList.remove("gizle");
        selektor2.classList.remove("gizle");
        selektor3.classList.remove("gizle");
    }
    else {

        selektor1.classList.add("gizle");
        selektor2.classList.add("gizle");
        selektor3.classList.add("gizle");

    }
}

function SeritleriArttir() 
{
    var Seritler=document.getElementsByClassName("serit");
    var _seritekle=false;
    for (let j = 0; j < Seritler.length; j++) {
       var top= parseInt(Seritler[j].style.top.replace("px",""));
       top=top+10;
       Seritler[j].style.top=top+"px";
       if(top==50)
       {
        _seritekle=true;
       }
    }
    if(_seritekle){
        SeritEkle(-100);
    }
}
function SeritEkle(top) {
    var Serit=document.createElement("div");
    Serit.className="serit";
    Serit.style.top=top+"px";
    Serit.style.left="300px";
    document.body.append(Serit);
    
    var Serit2=document.createElement("div");
    Serit2.className="serit";
    Serit2.style.top=top+"px";
    Serit2.style.left="500px";
    document.body.append(Serit2);
    
    var Serit3=document.createElement("div");
    Serit3.className="serit";
    Serit3.style.top=top+"px";
    Serit3.style.left="700px";
    document.body.append(Serit3);
    
    var Serit4=document.createElement("div");
    Serit4.className="serit";
    Serit4.style.top=top+"px";
    Serit4.style.left="900px";
    document.body.append(Serit4);

    var Serit5=document.createElement("div");
    Serit5.className="serit";
    Serit5.style.top=top+"px";
    Serit5.style.left="1100px";
    document.body.append(Serit5);


    var Seritler=document.getElementsByClassName("serit");
    for (let j = Seritler.length-1; j > 0; j--) {
        var t= parseInt(Seritler[j].style.top.replace("px",""));
        if(t>1000)
        {
            Seritler[j].remove();
        }
     }
}

function git(){
    hiz++;

    if(hizlan && hiz > 2){
        hiz= hiz - 2; 
    }
    if(sagadon)
    {
        ArabaLeft+=10;
        ArabaKaydir() ;
    }
    if(soladon)
    {
        ArabaLeft-=10;
        ArabaKaydir() ;
    }

    var gostergehiz=213-hiz;
    if (gostergehiz<5)
    {
        gostergehiz=5;
    }
    document.getElementById("hiz_gostergesi").innerHTML=gostergehiz+" km";
    SeritleriArttir();
    if (gostergehiz>180) {
        SeritleriArttir();
        SeritleriArttir();
        SeritleriArttir();
        SeritleriArttir();
        SeritleriArttir();
        Blur(3);
    }
    else
    if (gostergehiz>150) {
        SeritleriArttir();
        SeritleriArttir();
        SeritleriArttir();
        SeritleriArttir();
        Blur(2);
    }
    else
    if (gostergehiz>120) {
        SeritleriArttir();
        SeritleriArttir();
        SeritleriArttir();
        Blur(1);
    }
    else
    if (gostergehiz>100) {
        SeritleriArttir();
        SeritleriArttir();
        Blur(0);
            
    }
    else
    if (gostergehiz>10) {
        SeritleriArttir();
        Blur(0);
    }
    setTimeout(() => {
        git();
    }, hiz);
}
git();
function Blur(level)
{
    if(level==0)
    {
        if (document.body.className.indexOf("blur1")!=-1) {
            document.body.classList.remove("blur1");
        } 
        if (document.body.className.indexOf("blur2")!=-1) {
            document.body.classList.remove("blur2");
        }
        if (document.body.className.indexOf("blur3")!=-1) {
            document.body.classList.remove("blur3");
        }
    }
    else
    if(level==1)
    {
        document.body.classList.add("blur1");
        if (document.body.className.indexOf("blur2")!=-1) {
            document.body.classList.remove("blur2");
        }
        if (document.body.className.indexOf("blur3")!=-1) {
            document.body.classList.remove("blur3");
        }
    }
    else
    if(level==2)
    {
        document.body.classList.add("blur2");
        if (document.body.className.indexOf("blur1")!=-1) {
            document.body.classList.remove("blur1");
        }
        if (document.body.className.indexOf("blur3")!=-1) {
            document.body.classList.remove("blur3");
        }
    }
    else
    if(level==3)
    {
        document.body.classList.add("blur3");
        if (document.body.className.indexOf("blur1")!=-1) {
            document.body.classList.remove("blur1");
        }
        if (document.body.className.indexOf("blur2")!=-1) {
            document.body.classList.remove("blur2");
        }
    }
}