let nombreTrabajador=prompt(`Ingrese el nombre del trabajador para el calculo de las horas trabajadas`);
let horasTrabajadas=ingresarNumeroValido(`Ingrese las horas trabajadas`);
let salarioHoraHombre=ingresarNumeroValido(`Ingrese el sueldo horario`);

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


let sueldoSemanal=salarioHoraHombre*horasTrabajadas;

alert(`${nombreTrabajador} le corresponde ${sueldoSemanal} de sueldo semanal`)
