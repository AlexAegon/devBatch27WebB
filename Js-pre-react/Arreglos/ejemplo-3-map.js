// CREAR UN ARREGLO DE LAS LONGITUDES DE LAS PALABRAS DE OTRO ARREGLO 

const palabras= ["Linterna", "Llanta"]

//SALIDA ESPERADA  OTRO ARREGLO [8,6]
/*const longitudes = palabras.map(palabra => {
    return palabra.length

    
    
});*/

const longitudes= palabras.map(palabra => `palabra: ${palabra} - longitud${palabra.length} letras`)
console.log("palabras" , palabras);
console.log("longitudes", longitudes);