<?php

/* 
Variables y tipos de datos en PHP
1. Variables en PHP
¿Qué es una variable?
Una variable es un contenedor para almacenar datos.
Reglas para nombrar variables:
Debe comenzar con una $.
Seguido de una letra o un guión bajo ( _).
No puede contener espacios ni caracteres especiales.
*/

//Declaración y asignación de variables:
$name = "John";
$age = 25;
$isStudent = true;

// 2. Tipos de datos en PHP

// Entero:
$number = 42;

// Decimal
$pi = 3.14;

// String:
$saludo = "Hola";

// Booleano
$isValid = true;

// Array:
$fruits = ["Apple", "Banana", "Orange"];

// Objeto:
class Person {
    public $name;
    public $age;
}
$person = new Person();
$person->name = "John";
$person->age = 30;


//3. Operadores en PHP

// Operadores aritméticos:

//+(Suma), -(Resta), *(Multiplicación), /(División), %(Porcentaje).
$a = 10;
$b = 3;
$result = $a + $b;


//Operadores de comparación:
// ==(Igual), !=(No igual), ===(Idéntico), !==(No idéntico), >(Mayor que), <(Menor que), >=(Mayor o igual que), <=(Menor o igual que).
$x = 5;
$y = 10;
$isEqual = ($x == $y);

// Operadores lógicos:
// &&(Y), ||(O), !(NO).
$a = true;
$b = false;
$result = $a && $b;

// Operadores de asignación:
//=(Asignación), +=(Sumar y asignar), -=(Restar y asignar), *=(Multiplicar y asignar), /=(Dividir y asignar), %=(Porcentaje y asignar).
$x = 10;
$x += 5; // Equivalent to $x = $x + 5;

