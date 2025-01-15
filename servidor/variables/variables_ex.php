<?php
// Ejercicios Variables

/*
1. Declara variables para almacenar tu nombre, edad, altura (en metros) y si eres estudiante. 
Luego, utilice echo para mostrar los valores.
*/
$nombre = "Diego";
echo $nombre . "\n";

$edad = 21;

$altura = 1.8;

$isEstudiante = false;
/*
2. Suma de números enteros: Declara dos variables para almacenar números enteros y muestra su suma, resto, multiplicación y división.
*/
$num1 = 1;
$num2= 20;

echo $num1 + $num2 . "\n";
echo $num1 * $num2 . "\n";
echo $num1 / $num2 . "\n";
/*
3. Declara una variable para tu nombre y otra para tu apellido. 
Crea una nueva variable que concatene ambos valores con un espacio en medio, y muestra el resultado.
*/
$nombre = "Diego";
$apellido = "Sánchez";

$nombre_Completo = $nombre . " " . $apellido;
echo $nombre_Completo . "\n";
/*
4. Declara una variable booleana que sea true si el número 10 es mayor que 5 y false si no lo es. 
Utilice un operador lógico para realizar esta comparación y mostrar el resultado.
*/
$isNumber = 10 > 5;
echo $isNumber ? true : false . "\n";
/*
5. Crea un array con tus personajes favoritos (al menos 3). Acceda a cada personajes y muestre su nombre.
*/
$pjFav = ["Franko", "I-Hate-Nigg", "MrKeroro"];

for ($i = 0; $i < count($pjFav); $i++) {
  echo $pjFav[$i] . "\n";
}
/*
6. Declara variables para almacenar el precio original de un producto y un porcentaje de descuento. 
Calcula y muestra el precio final después del descuento. 
*/
$precio = 20;
$porcentaje = 0.20;

$descuento =  $precio * $porcentaje . "\n";

echo $precio - $descuento . "\n";
/*
7. Declara dos números. Usa operadores de comparación ( >, <, ==, !=, >=, <=) para verificar diferentes condiciones
y muestra si son verdaderas o falsas. 
*/
$number1 = 20;
$number = 50;

  if ($number1 > $number2){
    echo "El primer número es menor";
  } else {
    echo "El segundo número es mayor";
  };
/*
8. Declara dos variables booleanas ( $isAdminy $isLoggedIn). Usa operadores lógicos ( &&, ||, !) para verificar:
Si el usuario es administrador y está logueado.
Si el usuario no está logueado. 
*/
$isAdminy = true;
$isLoggedIn = false;


/*
9. Declara una variable que almacene un número como cadena ( "100"). Convierte este valor a un entero
y calcula su multiplicación por 2. 
*/

/*
10. Crea un array asociativo que simule los datos de un formulario con campos como name, emaily age. 
Luego, accede y muestra cada valor. 
*/













 