/**
 * Created by Daniel on 27/02/2016.
 */

'use strict';

var tiempo=0;
var vectorImg=[];
var click1=0;
var click2=0;
var turno=0;
var parejas=0;

function cargarImagenes() {
    parejas=0;
    document.getElementById('parejas').innerHTML = parejas;
    var i = 0;
    for (i = 0; i <=12; i++) {
        vectorImg[i] = i + ".png";
    }
    var p=0;
    var q=1;
    for(p=13;p<=24;p++){
        vectorImg[p]= q + ".png";
        q++;
    }

    var auxiliar = "";
    //Cambiar las imagenes quedene aleatorias

    for (i = 1; i <= 24; i++) {
        var aleatorio = Math.random()*24;
        var num = Math.ceil(aleatorio);
        auxiliar = vectorImg[i];
        vectorImg[i] = vectorImg[num];
        vectorImg[num] = auxiliar;
    }

    //Cargo las imagenes

    for (i = 1; i <= 24; i++) {
        document.getElementById(i + "i").src= "imagenes/" + vectorImg[i];
    }
    var z=0;
    for(z=1;z<=24;z++){
        //document.getElementById('imag').innerHTML=vectorImg[z];
        console.log(vectorImg[z]);
    }
        limpiar();
        //


}

function limpiar(){
    var k=0;
    for(k=1;k<=24;k++){
        document.getElementById(k+"i").src="imagenes/0.png";
        parejas=0;
        document.getElementById('parejas').innerHTML = parejas;
        tiempo=80;
    }
}

function memoria(valor){
    if (turno==0){
        click1=valor;//primer click
        turno=1;
        document.getElementById(click1+"i").src="imagenes/"+vectorImg[click1];
    }else{
        //if (document.getElementById(click2+"i").id==document.getElementById(click2+"i").id){
        //    alert("No se puede voltiar 2 veces la misma imagen");
        //    turno=1;
        //}else
        //{
        click2=valor; //segundo click
        turno=0;
        document.getElementById(click2+"i").src="imagenes/"+vectorImg[click2];


        //Comparamos si las dos imagenes son iguales

        if(vectorImg[click1]===vectorImg[click2]){
            parejas+=1;
            document.getElementById('parejas').innerHTML = parejas;

        }else{
            document.getElementById(click1+"i").src="imagenes/0.png";
            document.getElementById(click2+"i").src="imagenes/0.png";
        }
        //}

        if(parejas==12){
            document.getElementById('win').innerHTML = "Ganaste";
            alert("Ganaste!!");
        }

    }

}

var tiempo=80;

var contador=setInterval(timer, 1000);

function timer()
{
    tiempo=tiempo-1;
    if (tiempo <= 0)
    {
        alert("Perdiste");
        clearInterval(contador);
        cargarImagenes();
        timer();
        return;
    }

    document.getElementById("tiempo").innerHTML=tiempo + " segundos";


}
