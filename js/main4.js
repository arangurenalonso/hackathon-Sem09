let base=ingresarNumeroValido(`Ingrese la Base del triangulo en cm`);
let altura=ingresarNumeroValido(`Ingrese la altura del triangulo en cm`);
let areaTriangulo=base*altura/2;

//Función para ingresar un numero valido
function ingresarNumeroValido(texto){
    let lecturaPromt
    do {
        lecturaPromt= parseFloat(prompt(`${texto}`));
        isNumero=validacionNumero(lecturaPromt);
        isRangoOK=validarRango(lecturaPromt,0)
    } while (!(isNumero&&isRangoOK));
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


alert(`El área del triangulo es ${areaTriangulo} cm^2`)