//UTILIZAR FOREACH , PARA REALIZAR UNA OPERACION MATEMATICA CON LOS VALORES DE UN ARREGLO

const valores =[10,20,30,40,50]

let suma = 0;

valores.forEach(valor => {
    suma += valor
    
});
console.log(suma)