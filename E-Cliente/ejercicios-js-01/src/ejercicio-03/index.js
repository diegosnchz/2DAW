// **Ejercicio 3: Operador Ternario y Tipos de Datos**

// 1. Crea una variable `numero` y asígnale un valor numérico cualquiera.
  let num1=10;
// 2. Utiliza el operador ternario para asignar a la variable `tipoNumero` el valor "positivo" si `numero` es mayor que 0, y "negativo o cero" si no lo es.
//No hace falta que esté metido en una función pero si está mejor que mejor
  num>0 ? "positivo" : "negativo";
// 3. Declara una variable `cadena` y asígnale un valor de tipo cadena de texto.
  let cadena = 'cadena';
// 4. Utiliza el operador ternario para asignar a la variable `longitudCadena` indicar que la cadena es "larga" si su longitud es mayor que 5, y "corta" si no lo es.

function lengthCadena(cadena){
  return cadena.length > 5 ? "larga" : "corta";
}
//Guardamos el resultado de la función en una variable para luego poder leerlo más facil con un console.log
let longitudCadena = lengthCadena(cadena);