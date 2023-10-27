//CREAR UNA PROMESA Y CONSUMIRLA PARA LLEVARLE UN HELADO A UN AMIGO SI LA HELADERIA ESTA ABIERTA 
let heladeriaAbierta= false
//FORMAS DE USAR PROMESAS 
//1.- CREAR LAS REGLAS DE LAS PROMESAS  NOS PUEDE TOCAR HACERLO O NO 

const traerHelado = new Promise(function(resolve ,reject){

//LOGICA DE LA PROMESA
if(heladeriaAbierta){
    resolve("Te traje un helado por que estaba abierta la heladeria")
} else{
    reject("No te traje el helado por que no estaba abierta la heladeria")
}

})

// 2.- RECIBIR PROMESAS COMO RESPUESTAS
traerHelado.then(function(response){
    //codigo
    console.log(response);
}).catch(function(error){
    console.error("Heladeria Bonita" + error);
})