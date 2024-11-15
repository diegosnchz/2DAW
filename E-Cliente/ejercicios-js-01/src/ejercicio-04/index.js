// **Ejercicio 4: Condicionales Anidados y Operador Lógico**

// 1. Crea una variable `hora` y asígnale un valor numérico que represente una hora del día (en formato de 24 horas).
let hora = 12;
// 2. Utiliza condicionales anidados para mostrar en la consola un mensaje que indique el momento del día: "Buenos días" si la hora es menor a 12, "Buenas tardes" si la hora es mayor o igual a 12 y menor a 18, y "Buenas noches" si es igual o mayor a 18.
if (hora <=12 && hora >= 0){
  console.log('Buenos días');
} else if (hora >= 12 && hora <= 18){
  console.log('Buenas tardes');
} else {
  console.log('Buenas noches')
}
// 3. Crea una función llamada `esMayorDeEdad` que tome la `edad` como argumento y devuelva `true` si la edad es mayor o igual a 18, y `false` si es menor.
let edad = true;

function esMayorDeEdad(edad){
  if (edad >= 0 && edad <18){
    edad === true;
  } else {
    edad === false;
  }
}
// 4. Utiliza la función `esMayorDeEdad` y el operador lógico `&&` para mostrar en la consola si una persona es mayor de edad y estudiante o no.
  
// 5. Crea una función llamada `esVocal` que tome una letra como argumento y devuelva `true` si la letra es una vocal (mayúscula o minúscula), y `false` si no lo es.

// 6. Utiliza la función `esVocal` para mostrar en la consola si un carácter específico es una vocal.