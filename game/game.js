
var vp =document.getElementById("draw");
var papel= vp.getContext("2d");
var mapa= "tile.png";

var vaca ={
    url:"vaca.png",
    cargaOK:false
}

var fondo= new Image();
fondo.src = mapa;
fondo.addEventListener("load",Fdraw);
var vaca= new Image();
var cerdo= new Image();
var pollo= new Image();

vaca.src ="vaca.png"
cerdo.src ="cerdo.png"
pollo.src ="pollo.png"

vaca.addEventListener("load",drawV)
cerdo.addEventListener("load",drawC)
pollo.addEventListener("load",drawP)

function drawV(){
    papel.drawImage(vaca,10,0);
}
function drawC(){
    papel.drawImage(cerdo,20,0);
}
function drawP(){
    papel.drawImage(pollo,30,0);
}
 function Fdraw(){
     papel.drawImage(fondo,0,0);
 }
/*var rand = (ran(20 ,100));

function ran(mini, maxi){
    var res;
    res = Math.floor(Math.random()*(maxi-mini+1))+mini;
    return res;
}
document.write(rand);*/