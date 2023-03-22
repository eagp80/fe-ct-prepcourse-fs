var str1="perroArabe";
var a= str1.indexOf("a");
console.log(a);

//ayuda en https://desarrolloweb.com/articulos/funciones-validacion-alfanumerica-string-javascript.html
var minusculas="abcdefghijklmnñopqrstuvwyz";

function tiene_minusculas(texto){
   for(i=0; i<texto.length; i++){
      if (minusculas.indexOf(texto.charAt(i),0)!=-1){
         return 1;
      }
   }
   return 0;
}

var mayusculas="ABCDEFGHIJKLMNÑOPQRSTUVWYZ";

function tiene_mayusculas(texto){
   for(i=0; i<texto.length; i++){
      if (mayusculas.indexOf(texto.charAt(i),0)!=-1){
         return 1;
      }
   }
   return 0;
}
console.log(tiene_minusculas("ABCDEASKJFGIEGFñA"));
console.log(tiene_mayusculas("ajksfhdsgfiyL"));
