// DESTRUCTURACION ANIDADA

const persona =  {
    nombre: "ALEX",
    edad: 20,
    ciudad: "Tampico",
    direccion: {
        calle: "123 calle principal",
        colonia : "colonia Bonita" 
    }
    }
    const {nombre , direccion :{calle}} =persona
    console.log(calle);