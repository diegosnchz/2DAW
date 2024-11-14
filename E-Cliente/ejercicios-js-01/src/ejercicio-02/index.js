  // ## Ejercicio 2: Operadores y Condicionales

  // 1. Declara una variable `puntuacion` y asígnale un valor entre 0 y 100 para representar una calificación.
    let puntuacion = 71;
  // 2. Utiliza un condicional `if` para verificar si la `puntuacion` es mayor o igual a 70. Si es verdadero, muestra en la consola "Aprobado", de lo contrario, muestra "Reprobado".
  if (puntuacion > 70) {
      console.log('Aprobado');
    } else {
      console.log('Suspenso');
    }
  // 3. Declara una variable `dia` y asígnale un número del 1 al 7 para representar un día de la semana (1: Lunes, 2: Martes, ..., 7: Domingo).
    let dia;
  // 4. Utiliza una estructura `switch` para mostrar en la consola el nombre del día correspondiente al número asignado a `dia`.
  //En vez de poner dia1 poner 1 directamente
  switch(dia){
    case dia1:
        console.log('Lunes');
    case dia2:
        console.log('Martes');
    case dia3:
        console.log('Miércoles');
    case dia4:
        console.log('Jueves');
    case dia5:
        console.log('Viernes');
    case dia6:
        console.log('Sábado');
    case dia7:
        console.log('Domingo');
  }
  // 5. Crea una función llamada `convertirFahrenheit` que tome la `temperatura` en grados Celsius como argumento y devuelva la temperatura equivalente en grados Fahrenheit utilizando la fórmula: `(C × 9/5) + 32`.
  let temperatura; //hay que pedir al usuario que meta la temperatura
  function convertirFahrenheit (temperatura){
    return (temperatura * 9)/5+32;
  }
  // 6. Utiliza la función `convertirFahrenheit` para mostrar la temperatura en grados Fahrenheit en la consola.
  console.log(convertirFahrenheit);
  // 7. Crea una funcion llamada `esPar` que tome un numero como argumento y devuelva true o false si el numero es par. Puedes utilizar el operador modulo `%` para ver si tiene resto la operación y saber si es par o no.
  function esPar(number1){
    if (number1%2==0){
      true;
    } else{
      false;
    }
  }
  // 8. Utiliza la función esPar

  //Aquí metes tú un número para probar... pero lo que mola sería poder pedirselo al usuario pero para ello necesitas codigo HTML
  const esPar1 =22;
  if(esPar === true)
  console.log('El número es PAR');
    else {
      console.log('El número es IMPAR');
    }