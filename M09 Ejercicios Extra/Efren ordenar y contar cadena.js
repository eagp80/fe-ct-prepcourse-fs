var strPrueba="parangaricutirimicuaro";
var a= strPrueba.split("");//a es arreglo (que era texto antes)
var b=a.sort();// b es arreglo ordenado
c= b.join("");//c es string ordenado
var cuenta=0;
var arrCuenta=[];
var aux=0;
for(i=0;i<b.length;i++){
    if(i<aux){continue};// se deja de hacer las posiciones hechas mas las que se repiten
        cuenta=1;
        for(j=i+1;j<b.length;j++){
           
            if(b[i]===b[j]){
                cuenta=cuenta+1;
                aux=i+cuenta; // aux: las posiciones  a ignorar en prox iteracion 
                }               //incluyendo desde i hacia abajo                
        }
        arrCuenta.push([b[i]+":",cuenta +" veces."]);
   }
console.log(arrCuenta);
var ordenar1=function(str){
   return str.split("").sort().join("");
}
const strEjemplo= "fedcba";
console.log(ordenar1(strEjemplo));

var joinEfren=function(arr){
    var str1="";
    for(i=0;i<arr.length;i++){
        str1 +=   arr[i];        
    }
    return str1;
}
console.log(joinEfren(["caaa","a","rrr","a","c","a","s"]));

var splitEfren=function(str){
    var arr=[];
    for(i=0;i<str.length;i++){
        arr[i]=str[i];
    }
    return arr;
}

console.log(splitEfren("perro"));

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
   
    for(var i=0;i<arr1.length;i++){
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
 console.log(asAmirror("Perros calientes estrellas!"));
