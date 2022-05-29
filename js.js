
//animacion de la barra de menu
document.querySelector(".bars__menu").addEventListener("click", animateBars );
let line1__bars = document.querySelector(".line1__bars-menu");
let line2__bars = document.querySelector(".line2__bars-menu");
let line3__bars = document.querySelector(".line3__bars-menu");
function animateBars(){
    line1__bars.classList.toggle("activeline1__bars-menu")
    line2__bars.classList.toggle("activeline2__bars-menu")
    line3__bars.classList.toggle("activeline3__bars-menu")
}

//menu visible
const botonBar = document.querySelector(".bars__menu")
const item = document.querySelector(".menu-menu")
botonBar.addEventListener("click" , () => {
    item.classList.toggle("visible")
})







let rango = document.getElementById("numero");
        let rangoValor = document.getElementById("rangovalor");
        rango.oninput=()=>{
            rangoValor.innerHTML = rango.value;
        }
        
		// 	numeros.push(i);
       function boton()  {
           
           const tam = parseInt(document.getElementById("numero").value);
		  texto = document.getElementById("texto").value;
          const numeros  = texto.split(",");
          function obtenerNumero(coleccion){
              if(coleccion.length > 0){
                  //Primero obtenemos un índice aleatorio dentro de los posibles que haya en el array
                  let indice = Math.floor(Math.random() * coleccion.length);
                  let numero = coleccion[indice];
                  coleccion.splice(indice,1);
                  return numero;
                }
            }
            
           
		function obtenerColeccion(){
			//Generamos un saco nuevo lleno de números del que buscaremos los números para la colección
			let subColeccion = [];
			for(let i = 0; i < numeros.length; i++)
				subColeccion.push(numeros[i]);
			//En lote guardaremos los números obtenidos al buscar en la colección anterior
			let lote = [];
			for(let i = 0; i < numeros.length; i++){
				lote.push(obtenerNumero(subColeccion)); //El número aleatorio se obtiene usando la función de obtener número, indicando que tiene que buscar en el nuevo "saco"
			}
			//Se devuelve el lote
			return lote;
		}
        let obtenerColec = obtenerColeccion();
       //dividimoa la coleccion en grupos de array
          let array=[];
           for( i=0; i < obtenerColec.length; i+=tam){
           a = obtenerColec.slice(i,i+tam);
           array.push(a);
        }
    if(numeros != ""){   //aqui se valida que el textarea no este vacio 
        let resultado = document.getElementById("resultadO");
        resultado.innerHTML = ""
        for(i=0;i<array.length;i++){                        
        let datoparrafo = document.createElement("p");
        datoparrafo.innerHTML = "<h3>Grupo</h3> " +"<h3>"+(i+1)+"</h3>" +"<br>"+ "" + array[i].join("<br>");
        resultado.appendChild(datoparrafo);    }
    } 
 



}     