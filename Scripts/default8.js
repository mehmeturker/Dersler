var jant1 = document.getElementById("jant1");
var jant2 = document.getElementById("jant2");
var far_arka = document.getElementById("far_arka");
var sinyal_on= document.getElementById("sinyal_on");
var sinyal_arka = document.getElementById("sinyal_arka");
var selektor1 = document.getElementById("selektor1");
var selektor2 = document.getElementById("selektor2");
var selektor3 = document.getElementById("selektor3");

 document.addEventListener("keyup", Stop);
 document.addEventListener("keydown",checkKey);

function checkKey(e) {
 
    e = e || window.event;
    //38 yukarı ok  
    if (e.keyCode == '38') {
        HizliGit() ;
    }
    //39 sağ ok
    if (e.keyCode == '39') {
        sinyal() ;
    }
    
  // l selektor
  if (e.key == 'l') {
    selektor () ; 
    
}


    // d sinyal
    if (e.key == 'd') {
        if(dorluleracikmi)
        {
            dorluleracikmi=false;
            sinyalkapat();
        }
        else    {
            dorluleracikmi=true;
        }
    }


    //40 aşağı ok 
    else if (e.keyCode == '40') {
        YavasGit(); 
    }
    //32 space
    else if(e.keyCode == '32'  ){  
        Stop();
    }
}

function Stop() {
    jant1.classList.remove("yavasGit");
    jant2.classList.remove("yavasGit");
    jant1.classList.remove("hizliGit");
    jant2.classList.remove("hizliGit");
    far_arka.classList.add("acik");
}

function HizliGit() {
    jant1.classList.remove("yavasGit");
    jant2.classList.remove("yavasGit");
    far_arka.classList.remove("acik");  
    jant1.classList.add("hizliGit");
    jant2.classList.add("hizliGit");
}

function YavasGit() {
    jant1.classList.remove("hizliGit");
    jant2.classList.remove("hizliGit");
    far_arka.classList.remove("acik");
    jant1.classList.add("yavasGit");
    jant2.classList.add("yavasGit");
}

function sinyal () {
    if(sinyal_on.className.indexOf("acik")!=-1)
    {
        sinyal_on.classList.remove("acik");
        sinyal_arka.classList.remove("acik");
    }
    else{
        sinyal_on.classList.add("acik");
        sinyal_arka.classList.add("acik");
    }
}
function sinyalkapat () {
    if(sinyal_on.className.indexOf("acik")!=-1)
    {
        sinyal_on.classList.remove("acik");
        sinyal_arka.classList.remove("acik");
    }
}
var dorluleracikmi=false;
setInterval(function(){
    if(dorluleracikmi)
    {
        sinyal()
    }},1000);
 
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

    
