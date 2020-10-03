let edad=ingresarNumeroValido(`Ingrese su edad`);

if (edad>=18){
    alert(`Puede votar`)
}else{
    alert(`No puede votar`)
}

//Función para ingresar un numero valido
function ingresarNumeroValido(texto){
    let lecturaPromt
    do {
        lecturaPromt= parseFloat(prompt(`${texto}`));
        isNumero=validacionNumero(lecturaPromt);
        isRangoOK=validarRango(lecturaPromt,0);
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
function validarRango(valor,rangoMin){
    if(valor<=rangoMin){
        alert(`ingrese un número válido
                El rango debe ser mayor que ${rangoMin}`)
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
