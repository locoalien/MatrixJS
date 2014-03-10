

function hacking(){
	var c = document.getElementById("locoalien");
	c.height = window.innerHeight;  //innerHeight se utiliza para saber la altura de la pantalla
	c.width = window.innerWidth;    //innerHeight se utiliza para saber la altura de la pantalla

	
	var letraTam=15; //Tamaño de la letras por pixel
	var columnas=c.width/letraTam; //El ancho dividido por el tamano que tendra las letras
	
	var Texto="01"; //El testo que aparecera en pantalla
	Texto=Texto.split("");//La función split() permite dividir una cadena de caracteres (string) en varios bloques y crear un array con estos

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
			text=Texto; //Le asigno el texto que definimos en la parte de arriba
			//El ciclo for me permite darle las coordenadas correctas para posicionar el text x, y 
			contexto.fillText(text,i*letraTam, letras[i]*letraTam);//Para imprimir texto disponesmos de fillText(texto,x,y)

			if(letras[i]*letraTam > c.height && Math.random()>0.975){
				letras[i]=0;
			}
			letras[i]++;

		}

	}
	setInterval(dibujar,120);//velocidad a la que se ejecuta la funcion en milisegundos

}