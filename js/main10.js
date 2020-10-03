
arrayNombre=[];
arrayEdad=[];

let numPersonas=ingresarNumeroValido(`Ingrese el número de personas a jugar`);

for(let i=1;i<=numPersonas;i++){
        arrayNombre.push(prompt(`Ingrese el nombre de la persona ${i}`)) ;
        arrayEdad.push(ingresarNumeroValido(`Ingrese la edad de la persona ${i}`)) ;
}

    console.log(arrayNombre)
    console.log(arrayEdad)

    edadMayor=Math.max(...arrayEdad)
    edadMenor=Math.min(...arrayEdad)
    console.log(`La edad Mayor es ${edadMayor}`)
    console.log(`La edad Menor es ${edadMenor}`)

    let posicionEdadMayor=arrayEdad.findIndex(function(position){
        return edadMayor==position;
    })

    let posicionEdadMenor=arrayEdad.findIndex(function(position){
        return edadMenor==position;
    })

    console.log(`${arrayNombre[posicionEdadMayor]} es el mayor con una edad de ${arrayEdad[posicionEdadMayor]} años`)
    console.log(`${arrayNombre[posicionEdadMenor]} es el menor con una edad de ${arrayEdad[posicionEdadMenor]} años`)

alert(`${arrayNombre[posicionEdadMayor]} es el mayor con una edad de ${arrayEdad[posicionEdadMayor]} años
${arrayNombre[posicionEdadMenor]} es el menor con una edad de ${arrayEdad[posicionEdadMenor]} años`)


//Función para ingresar un numero valido
function ingresarNumeroValido(texto){
    let lecturaPromt
    do {
        lecturaPromt= parseFloat(prompt(`${texto}`));
        isNumero=validacionNumero(lecturaPromt);
        isRangoOK=validarRango(lecturaPromt,0,110)
        isEntero=validarEntero(lecturaPromt);
    } while (!(isNumero&&isRangoOK&&isEntero));
    return lecturaPromt;
}
//Validación si el valor ingresado es un numero
function validacionNumero(valorIngresado){
    if(Number.isNaN(valorIngresado)){
        alert("Ingrese un Número válido; el valor ingresado no es un número")
        return false
    }
    return true
}
//Funcion para validar rango
function validarRango(valor,rangoMin, rangoMax){
    if(valor<rangoMin || valor>rangoMax){
        alert(`ingrese un número válido
                El rango debe ser entre ${rangoMin} a ${rangoMax}`)
                return false;
    }
    return true;
}
//Funcion para validar Entero
function validarEntero(valor){
    if(!Number.isInteger(valor)){
        alert("Número inválido; el valor ingresado no es un ENTERO")
        return false
    }
    return true
}