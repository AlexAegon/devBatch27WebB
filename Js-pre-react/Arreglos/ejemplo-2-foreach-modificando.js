// MODIFICANDO EL ARREGLO ORIGINAL

const numeros = [1,2,3,4,5]
console.log("Original" , numeros);
numeros.forEach((numero , indice,arregloCompleto) => {

    //console.log(`${indice}.- ${numero} ======= ${arregloCompleto}`);

    arregloCompleto[indice] = numero * 2
});
console.log("Original Mopdificado" , numeros);