//DESESTRUCTURACION DE OBJETOS COMO PARAMETROS DE FUNCIONES 

// estamos pasando un objeto como argumento a la funcion ImprimirInformacion y luego desestructuramos el objeto
// directamente en los parametros de la funcion para acceder a las propiedades dentro de la funcion 

function imprimirInformacion({nombre,edad}){
    console.log(`Nombre : ${nombre}, Edad : ${edad}`);

}
const persona= {
    nombre: "Enrique",
    edad: 20,
    ciudad: "Tampico"
}
imprimirInformacion(persona)