// En Js las promesas son objetos que representan un valor que puede estar disponible en un tiempo indefinido
// por Naruraleza son asincronas 

//1.- CREAR LA ESTRUCRURA DE UNA PROMESA
const promesa = new Promise(function(resolve,reject) {
    // LAS PROMESAS TIENEN DOS METODOS
    resolve()
    reject()
})

//2.- CONSUMIR LA PROMESA
promesa.then( function(response){
    // codigo
console.log(response);
}).catch(function(error){
    console.error(error)
})

}