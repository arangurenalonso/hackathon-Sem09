let arrayNotas=[]

for(i=1;i<=4;i++){
    let nota=ingresarNumeroValido(`Ingrese la nota Nº ${i}`);
    alert(`Número Valido:
      La nota ingresada es ----------->  ${nota}`)
    arrayNotas.push(nota)
}
console.log(arrayNotas)

//Función para ingresar un numero valido
function ingresarNumeroValido(texto){
    let lecturaPromt
    do {
        lecturaPromt= parseFloat(prompt(`${texto}`));
        isNumero=validacionNumero(lecturaPromt);
        isRangoOK=validarRango(lecturaPromt,0,20)
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
function validarRango(valor,rangoMin, rangoMax){
    if(valor<rangoMin || valor>rangoMax){
        alert(`ingrese un número válido
                El rango debe ser entre ${rangoMin} a ${rangoMax}`)
                return false;
    }
    return true;
}


let suma=0;

arrayNotas.forEach(function(element){
        suma+=element;
    }
    )

let prom=suma/arrayNotas.length
alert(`El promedio de las 4 notas es ${prom}`)