/**
 * Created by Daniel on 27/02/2016.
 */

'use strict';
var resultado = {
    gana : 0,
    pierde : 0,

};
var tiempo=0;
var vectorImg=new array(16);
var click1=0;
var click2=0;
var turno=0;


function cargarImagenes() {
    var i = 0;
    for (i = 0; i <= 7; i++) {
        vectorImg[i] = i + ".png"
    }
    var j = 1;
    for (i = 8; i <= 16; i++) {
        vectorImg[i] = k + ".png"
        k++
    }

    var auxiliar = 0;
    //Cambiar las imagenes quedene aleatorias

    for (i = 1; i <= 16; i++) {
        var aleatorio = math.round(math.random() * 14) + 1;
        auxiliar = vectorImg[i];
        vectorImg[i] = vectorImg[aleatorio];
        vectorImg[aleatorio] = auxiliar;
    }


    //Cargo las imagenes

    for (i = 1; i <= 16; i++) {
        document.getElementById(i + "i").src = "imagenes/" + vectorImg[i];
    }
}

function voltiarACero(){
    var k=0;
    for(k=0;k<16;k++){
        document.getElementById(i+"i").src="imagenes/0.png";
    }
}

function memoria(parametro){
    if (turno==0){
        click1=parametro;//primer click
        turno=1
        document.getElementById(click1+"i").src="imagenes/"+vectorImg[click1];
    }else{
        click2=parametro;//segundo click
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
