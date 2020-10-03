let fechaNacimiento=ingresarNumeroValido(`Ingrese el año de nacimiento`);


//Función para ingresar un numero valido
function ingresarNumeroValido(texto){
    let lecturaPromt
    do {
        lecturaPromt= parseFloat(prompt(`${texto}`));
        isNumero=validacionNumero(lecturaPromt);
        isRangoOK=validarRango(lecturaPromt,1900,2100)
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

const fecha=new Date();
let añoActual=fecha.getFullYear()

let edadPostulante=añoActual-fechaNacimiento

alert(`El postulante tiene: ${edadPostulante} años`)
