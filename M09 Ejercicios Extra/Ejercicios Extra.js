/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   var arrDeArreglosPares=[];
   for(let x in objeto){
      var arregloUnPar=[x,objeto[x]];//  x es nombre de propiedad
      arrDeArreglosPares.push(arregloUnPar);
   }
   return arrDeArreglosPares; //arreglo con arreglos de dos valores [propiedad,valor]
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   var arr1=[];
   arr1= string.split("").sort();// pasado a arreglo y ordenado
   var objAux={};
   var excluir=0;
   var cuenta=0;
      
   for(i=0;i< arr1.length;i++){
      if(i<excluir){continue};      
      cuenta=1;
      for(j=i+1;j<arr1.length;j++){
         if(arr1[i]===arr1[j]){
            cuenta=cuenta+1;           
         }         
      }
      excluir=i+cuenta;
      objAux[arr1[i]]=cuenta;
   }
return objAux; 

}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var text1="";
   var text2="";
   var mayusculas="ABCDEFGHIJKLMNÑOPQRSTUVWYZ";
   var minusculas="abcdefghijklmnñopqrstuvwyz";

   for(i=0;i<string.length;i++){      
      if(mayusculas.indexOf(string.charAt(i))!==-1){
         text1=""+text1+string.charAt(i);
      }   
      console.log(text1);   
   }
   for(i=0;i<string.length;i++){      
      if(minusculas.indexOf(string.charAt(i))!==-1){
         text2=""+ text2+string.charAt(i);
      }      
   }
   console.log(text1);
   return text1+text2;

}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   let arr1=[];
    let arr2=[];
    let arr3=[];
    let arr4=[];
    arr1 =frase.split(" ");
    arr1.forEach(element=>{arr4.unshift(element)});
    arr1=arr4;   
    for(i=0;i<arr1.length;i++){
        arr2=arr1[i].split("");
        for(j=0;j<arr2.length;j++){
            arr3.unshift(arr2[j]);
        }
        if(i!== arr1.length-1){
         arr3.unshift(" ");
         }        
    }
    return arr3.join("");
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var arr1=[];
   var arr2=[];
   var aviso=0;
   arr1= numero.toFixed().split("");
   arr1.forEach(element=>{arr2.unshift(element)});
   for(i=0;i<arr1.length;i++){
        if(arr1[i]!==arr2[i]){
            aviso=1;
        }

   }
   if(aviso===1){return "No es capicua"} else {return "Es capicua"};

}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   arr1=[];
   arr2=[];
   ref="abc";
   arr1=string.split("");
   arr1.forEach(element=>{
      if(element==="a"||element==="b"||element==="c"){

      } else {
         arr2.push(element);
      }
   });
   return arr2.join("");

}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
