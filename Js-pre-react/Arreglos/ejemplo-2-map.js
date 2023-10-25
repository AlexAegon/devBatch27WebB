//CONVERTIR UN ARREGLO DE NOMBRES EN UN ARREGLO DE SALUDOS

const nombres =["juan", "Maria", "Lucia"]

const saludos = nombres.map(nombre =>{
    return `HOLA!! ${nombre}`
})
console.log("Arreglo de Nombres " ,nombres);
console.log("Arreglo de Saludos" , saludos);