let num1=ingreseNumero(1) ;
let num2=ingreseNumero(2) ;

//Función para ingresar un numero
function ingreseNumero(correlativodatoIngresado){
    let lecturaPromt
    do {
        lecturaPromt= parseInt(prompt(`Ingrese el número Nº ${correlativodatoIngresado}`));
        validacionNumero(lecturaPromt);
    } while (Number.isNaN(lecturaPromt));
    return lecturaPromt;
}
//Validación si el valor ingresado es un numero
function validacionNumero(valorIngresado){
    if(Number.isNaN(valorIngresado)){
        alert("Ingrese un número válido")
    }else{
        alert(
            `Número Valido:
            El Número ingresado es ----------->  ${valorIngresado}`)
            }
}



let suma=num1 + num2;


alert(`La suma de los dos números ingresados es ${suma}`)