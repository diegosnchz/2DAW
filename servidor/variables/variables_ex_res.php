<?php
//1.
$name = "Juan"; // Se asigna una cadena a la variable $name.
$age = 25; // Se asigna un número entero a la variable $age.
$height = 1.75; // Se asigna un número flotante a la variable $height.
$isStudent = true; // Se asigna un valor booleano (true) a la variable $isStudent.

echo "Name: $name\n"; // Muestra el valor de $name.
echo "Age: $age\n"; // Muestra el valor de $age.
echo "Height: $height\n"; // Muestra el valor de $height.
echo "Is student: " . ($isStudent ? "true" : "false") . "\n"; // Muestra "true" o "false" dependiendo del valor de $isStudent.

//2.
$a = 7; // Se asigna un número entero a la variable $a.
$b = 3; // Se asigna un número entero a la variable $b.

// Se realizan operaciones aritméticas y se muestran los resultados.
echo "Sum: " . ($a + $b) . "\n"; // Suma.
echo "Subtraction: " . ($a - $b) . "\n"; // Resta.
echo "Multiplication: " . ($a * $b) . "\n"; // Multiplicación.
echo "Division: " . ($a / $b) . "\n"; // División.

//3.
$firstName = "John"; // Asigna una cadena a $firstName.
$lastName = "Doe"; // Asigna una cadena a $lastName.
$fullName = $firstName . " " . $lastName; // Concatena $firstName y $lastName con un espacio.

echo "Full Name: $fullName\n"; // Muestra el nombre completo.

//4.
$isGreater = 10 > 5; // Compara si 10 es mayor que 5 y asigna true a $isGreater.
echo "10 > 5: " . ($isGreater ? "true" : "false") . "\n"; // Muestra true porque la condición es verdadera.

//5.
$persons = ["Jack", "Goku", "Gohan"]; // Se crea un array con 3 elementos.

// Accede a cada elemento del array por su índice y lo muestra.
echo "First person: $persons[0]\n"; // Primer elemento.
echo "Second person: $persons[1]\n"; // Segundo elemento.
echo "Third person: $persons[2]\n"; // Tercer elemento.

//6.
$originalPrice = 100; // Precio original.
$discount = 20; // Porcentaje de descuento.

// Calcula el precio final aplicando el descuento.
$finalPrice = $originalPrice - ($originalPrice * ($discount / 100));
echo "Final Price: $finalPrice\n"; // Muestra el precio final.

//7. 
$x = 10; // Primer número.
$y = 5; // Segundo número.

// Compara los números usando operadores de comparación y muestra los resultados.
echo "10 > 5: " . ($x > $y ? "true" : "false") . "\n";
echo "10 == 5: " . ($x == $y ? "true" : "false") . "\n";
echo "10 >= 5: " . ($x >= $y ? "true" : "false") . "\n";
echo "10 < 5: " . ($x < $y ? "true" : "false") . "\n";
echo "10 != 5: " . ($x != $y ? "true" : "false") . "\n";

//8.
$isAdmin = true; // Se indica que el usuario es administrador.
$isLoggedIn = false; // Se indica que el usuario no ha iniciado sesión.

// Usa operadores lógicos para verificar diferentes condiciones.
echo "Is admin and logged in: " . ($isAdmin && $isLoggedIn ? "true" : "false") . "\n";
echo "Is not logged in: " . (!$isLoggedIn ? "true" : "false") . "\n";

//9.
$stringNumber = "100"; // Número almacenado como cadena.
$integerNumber = (int)$stringNumber; // Convierte la cadena a un entero.
$result = $integerNumber * 2; // Multiplica el número convertido por 2.

echo "Result: $result\n"; // Muestra el resultado (200).

//10.
$formData = [
    "name" => "Alice", // Nombre.
    "email" => "alice@example.com", // Correo electrónico.
    "age" => 25 // Edad.
];

// Muestra cada valor del array asociativo.
echo "Name: " . $formData["name"] . "\n";
echo "Email: " . $formData["email"] . "\n";
echo "Age: " . $formData["age"] . "\n";