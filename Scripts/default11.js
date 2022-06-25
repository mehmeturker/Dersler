document.addEventListener("keyup", checkKey);

function checkKey(e) {

   e = e || window.event;
   //38 yukarı ok  
   if (e.key == 'a') {
      alert("A'ya bastım");
      document.documentElement.style.backgroundColor = "red";
   }

   if (e.key == 'b') {
    alert("B'ye bastım");
    document.getElementById("test").style.color ="red";
    document.documentElement.style.backgroundColor = "gray";
 }
 if (e.key == 'c') {
    alert("C'ye bastım");
    document.getElementById("test").style.border ="1px solid yellow";
    document.documentElement.style.backgroundColor = "green";
 }

 if (e.key == 'd') {
    alert("D'ya bastım");
    document.getElementById("test").style.color ="blue";
 }
 if (e.key == 'e') {
    alert("E'ya bastım");
    document.getElementById("test").style.fontSize ="100pt";
 }
 if (e.key == 'f') {
    alert("F'ya bastım");
    document.getElementById("test").style.marginLeft ="100px";
 }0
 if (e.key == 'g') {
    alert("G'ya bastım");
    document.getElementById("test").style.borderRadius ="100px";
 }
 if (e.key == 'ğ') {
    alert("Ğ'ya bastım");
    document.getElementById("test").style.fontFamily="ariel";
 }
 if (e.key == 'h') {
    alert("H'ya bastım");
    document.getElementById("test").style.color ="white";
 }
 if (e.key == 'ı') {
    alert("I'ya bastım");
 }
 if (e.key == 'i') {
    alert("İ'ya bastım");
 }
 if (e.key == 'u') {
    alert("U'ya bastım");
 }
 if (e.key == 'ü') {
    alert("Ü'ya bastım");
 }
 if (e.key == 'J') {
    alert("j'ya bastım");
 }
 if (e.key == 'k') {
    alert("K'ya bastım");
 }
 if (e.key == 'l') {
    alert("L'ya bastım");
 }
 if (e.key == 'm') {
    alert("M'ya bastım");
 }
 if (e.key == 'n') {
    alert("N'ya bastım");
 }
 if (e.key == 'p') {
    alert("P'ya bastım");
 }
 if (e.key == 'r') {
    alert("R'ya bastım");
 }
 if (e.key == 's') {
    alert("S'ya bastım");
 }
 if (e.key == 'ş') {
    alert("Ş'ya bastım");
 }
 if (e.key == 't') {
    alert("T'ya bastım");
 }
 if (e.key == 'z') {
    alert("Z'ya bastım");
 }
 
 if (e.key == 'q') {
    alert("Q'ya bastım");
 }
 if (e.key == 'ç') {
    alert("Ç'ya bastım");
 }


 }
 
  