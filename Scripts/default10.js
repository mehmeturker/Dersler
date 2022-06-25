document.getElementById("clickme").addEventListener("mouseover",function(){
    var rand=Math.random();
    var randtop=parseInt(rand * 600);
    var randleft=parseInt(rand * 1440);
    document.getElementById("clickme").style.top=randtop+"px";
    document.getElementById("clickme").style.left=randleft+"px";
})