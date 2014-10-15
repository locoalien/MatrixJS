//*--------------------------------------*
//* Desarrollado por Locoalien           *
//* Twitter @locoalien                   *
//* Sitio web: www.locoaliensoft.com     *
//*--------------------------------------*

//+++++++++++++++++++++++++++++++++++++
// El objetivo de este ejemplo es aprender a dar animacion y utilizar las propiedades
// Mas comunes de JavaScript. Veremos el poder que tiene HTML5 implementando el Canvas
// Espero les guste este ejemplo
// Para mas informacion visitar nuestra pagina de Facebook: http://www.facebook.com/CulturaInformatica
//+++++++++++++++++++++++++++++++++++++




window.onload = matrixjs;//Llamamos a la funcion despues de que el documento ha sido cargado completamente
function matrixjs(){
	var c = document.getElementById("locoalien");
	c.height = window.innerHeight;  //innerHeight se utiliza para saber la altura de la pantalla
	c.width = window.innerWidth;    //innerHeight se utiliza para saber la altura de la pantalla


	var letraTam=15; //Tamaño de la letras por pixel
	var columnas=c.width/letraTam; //El ancho dividido por el tamano que tendra las letras

	var letras=[];
	for(var i=0; i<columnas;i++){
		letras[i]=1;//Siver para saber la cantidad de letras que tendra en la pantalla
	}
	contexto= c.getContext('2d');//Muy importante especificar el contexto en el cual vamos a trabajar

	function dibujar(){
		contexto.fillStyle="rgba(0,0,0,0.05)";//Damos el color que tendra el recuadro en el que estara la animacion. en este caso sera transparente 0.05
		contexto.fillRect(0,0,c.width,c.height);//Damos las dimensiones alto y ancho que tendra el cuadrado, que en este caso es de toda la pantalla

		contexto.fillStyle= "#0f0";//Color de las letras
		contexto.font= letraTam+"px arial";//Tamaño de la letra

		for(var i=0;i<letras.length;i++){
			text=elegirTexto();
			Texto=text.split("");
			contexto.fillText(Texto,i*letraTam, letras[i]*letraTam);//Para imprimir texto disponesmos de fillText(texto,x,y)


			if(letras[i]*letraTam > c.height && Math.random()>0.975){
				letras[i]=0;
			}
			letras[i]++;

		}

	}
	//La funcion elegirTexto me permite elegir aleatoriamente el texto a utilizar en un cajon o columna
	//Esto lo conseguimos gracias a la tabla de caracteres ASCII con los cuales podremos convertir el valor
	//Numerico al valor real.
		function elegirTexto(){
		var numTexto=Math.floor((Math.random()*94)+33);//Elegimos un caso en base a un numero aleatorio
				return String.fromCharCode(parseInt(numTexto));//Convertimos el valor a entero y despues a su valor correspondiente ASCII
			}
	setInterval(dibujar,120);//velocidad a la que se ejecuta la funcion en milisegundos

}
