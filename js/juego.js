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
    for (i = 0; i <=8; i++) {
        vectorImg[i] = i + ".png";
    }
    var p=0;
    var q=1;
    for(p=9;p<=16;p++){
        vectorImg[p]= q + ".png";
        q++;
    }

    var auxiliar = "";
    //Cambiar las imagenes quedene aleatorias

    for (i = 1; i <= 16; i++) {
        var aleatorio = Math.random()*16;
        var num = Math.ceil(aleatorio);
        auxiliar = vectorImg[i];
        vectorImg[i] = vectorImg[num];
        vectorImg[num] = auxiliar;
    }

    //Cargo las imagenes

    for (i = 1; i <= 16; i++) {
        document.getElementById(i + "i").src= "imagenes/" + vectorImg[i];
    }
    var z=0;
    for(z=1;z<=16;z++){
        //document.getElementById('imag').innerHTML=vectorImg[z];
        console.log(vectorImg[z]);
    }
        limpiar();
}

function limpiar(){
    var k=0;
    for(k=1;k<=16;k++){
        document.getElementById(k+"i").src="imagenes/0.png";
        parejas=0;
        document.getElementById('parejas').innerHTML = parejas;
    }
}

function memoria(valor){
    if (turno===0){
        click1=valor;//primer click
        turno=1;
        document.getElementById(click1+"i").src="imagenes/"+vectorImg[click1];
    }else{
        click2=valor;
        //segundo click
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

    }

}
