/**
 * Created by Daniel on 27/02/2016.
 */

'use strict';

var tiempo=0;
var vectorImg=new Array(16);
var click1=0;
var click2=0;
var turno=0;
var imag=0;

function cargarImagenes() {
    var datos="";
    var i = 0;
    for (i = 0; i < 7; i++) {
        vectorImg[i] = i + ".png"
    }
    var j = 1;
    for (i = 7; i < 16; i++) {
        vectorImg[i] = k + ".png"
        k++
    }

    var auxiliar = "";
    //Cambiar las imagenes quedene aleatorias

    for (i = 1; i < 16; i++) {
        var aleatorio = math.round(math.random() * 14) + 1;
        auxiliar = vectorImg[i];
        vectorImg[i] = vectorImg[aleatorio];
        vectorImg[aleatorio] = auxiliar;
    }

    //Cargo las imagenes

    for (i = 1; i < 16; i++) {
        document.getElementById(i + "i").src = "imagenes/" + vectorImg[i];
    }
    imag=vectorImg.length;
    document.getElementById('imag').innerHTML = imag;
}

function limpiar(){
    var k=0;
    for(k=0;k<16;k++){
        document.getElementById(k+"i").src="imagenes/0.png";
    }
}

function memoria(valor){
    if (turno==0){
        click1=valor;//primer click
        turno=1;
        document.getElementById(click1+"i").src="imagenes/"+vectorImg[click1];
    }else{
        click2=valor;//segundo click
        turno=0;
        document.getElementById(click1+"i").src="imagenes/"+vectorImg[click2];

        //Comparamos si las dos imagenes son iguales

        if(vectorImg[click1]==vectorImg[click2]){

        }else{
            document.getElementById(click1+"i").src="imagenes/0.png";
            document.getElementById(click2+"i").src="imagenes/0.png";
        }

    }

}
