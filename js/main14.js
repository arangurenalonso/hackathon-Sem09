let focosTotales=ingresarNumeroValido(`Cuanto focos total hay?`)
let focosVerdes=0;
let focosBlancos=0;
let focosRojos=0;

for(i=1;i<=focosTotales;i++){
    let foco=ingresarNumeroColor(`Ingrese de que color es el foco ${i}
        1: Verde;
        2: Blanco;
        3: Rojo;`)
    
        switch(foco){
            case 1: focosVerdes++;
            break;
            case 2: focosBlancos++;
            break;
            default: focosRojos++;
        }
           
 
       }
console.log(`La cantidad de focos según su color`)

console.log(`Focos Verdes: ${focosVerdes}`)
console.log(`Focos Blancos: ${focosBlancos}`)
console.log(`Focos Rojos: ${focosRojos}`)
alert(`
La cantidad de focos según su color:
Focos Verdes: ${focosVerdes}
Focos Blancos: ${focosBlancos}
Focos Rojos: ${focosRojos}
`)

//Función para ingresar un numero valido
function ingresarNumeroColor(texto){
    let lecturaPromt
    do {
        lecturaPromt= parseFloat(prompt(`${texto}`));
        isNumero=validacionNumero(lecturaPromt);
        isRangoOK=validarRangoEntre(lecturaPromt,1,3)
        isEntero=validarEntero(lecturaPromt);
    } while (!(isNumero&&isRangoOK&&isEntero));
    return lecturaPromt;
}
function ingresarNumeroValido(texto){
    let lecturaPromt
    do {
        lecturaPromt= parseFloat(prompt(`${texto}`));
        isNumero=validacionNumero(lecturaPromt);
        isRangoOK=validarRangoSuperiorA(lecturaPromt,0)
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
function validarRangoEntre(valor,rangoMin, rangoMax){
    if(valor<rangoMin || valor>rangoMax){
        alert(`ingrese un número válido
                El rango debe ser entre ${rangoMin} a ${rangoMax}`)
                return false;
    }
    return true;
}

//Funcion para validar rango superior a
function validarRangoSuperiorA(valor,rangoMin){
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



