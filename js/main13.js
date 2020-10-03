let arrayNotas=[];
let arrayAlumnos=[];
let aprobados=0;
let desaprobados=0;
let numAlumnos=ingresarNumeroValido(`Cuantos alumnos va a ingresar`)

for(i=1;i<=numAlumnos;i++){
    arrayAlumnos.push(prompt(`Ingrese el nombre del Alumno ${i}`))
    
    let nota=ingresarNotaValida(`Ingrese la nota del Alumno ${arrayAlumnos[i-1]}`) ;
        
            if(nota>=13){
                aprobados++;
            }else{
                desaprobados++;
            }
    
    arrayNotas.push(nota)
}
console.table(arrayNotas)
console.log(`La cantidad de aprobados es ${aprobados}`)
console.log(`La cantidad de reprobados es ${desaprobados}`)
alert(`La cantidad de aprobados es ${aprobados}
La cantidad de reprobados es ${desaprobados}`)

//Función para ingresar un numero valido
function ingresarNotaValida(texto){
    let lecturaPromt
    do {
        lecturaPromt= parseFloat(prompt(`${texto}`));
        isNumero=validacionNumero(lecturaPromt);
        isRangoOK=validarRangoEntre(lecturaPromt,0,20)
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
//Funcion para validar rango Entre
function validarRangoEntre(valor,rangoMin, rangoMax){
    if(valor<rangoMin || valor>rangoMax){
        alert(`ingrese un número válido
                El rango debe ser entre ${rangoMin} a ${rangoMax}`)
                return false;
    }
    return true;
}
//Funcion para validar superior a
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
