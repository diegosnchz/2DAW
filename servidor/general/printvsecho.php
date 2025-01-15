<?php
/*
Print y echo. 
Tanto echo como print se usan para enviar salida al navegador, pero hay diferencias sutiles entre ellos:
*/

/*
1. Tipo de construcción:
· echo: Es una construcción del lenguaje , no una función, lo que significa que no requiere paréntesis y puede ser más rápido en ejecución.
· print: También es una construcción del lenguaje, pero se comporta más como una función porque devuelve un valor.
*/

/*
2. Retorno de valor
· echo: No devuelve ningún valor. Simplemente imprime el texto en la pantalla.
· print: Devuelve un valor 1 siempre, lo que permite que se use como parte de una expresión.
*/
// Ejemplo:
$resultado = print "Hola";
echo $resultado; // Salida: Hola1

/*
3. Sintaxis
· echo: Puede imprimir varios argumentos separados por comas (aunque no es común).
· print:Solo acepto un argumento.
*/
echo "Hola", " Mundo"; // Salida: Hola Mundo
print "Hola Mundo"; // Correcto
// print "Hola", " Mundo"; // Error


/*
4. Rendimiento
· echo: Es ligeramente más rápido que print porque no devuelve ningún valor.
· print: Es más lento que echo debido a su comportamiento de devolver un valor.
*/

/*
¿Cuándo usar uno u otro?
Usa echo si solo necesitas imprimir algo rápidamente, ya que es más rápido y más flexible con múltiples argumentos.
Usa print si necesitas evaluar su valor de retorno en una expresión (aunque esto es poco común).
*/

//Ejemplo comparativo:
// Usando echo
echo "Hola Mundo!"; // Salida: Hola Mundo!
echo "Hola", " Mundo!"; // Salida: Hola Mundo! (múltiples argumentos)

// Usando print
print "Hola Mundo!"; // Salida: Hola Mundo!
$resultado = print "Hola Mundo!"; // Salida: Hola Mundo!, $resultado = 1

/*
Ambos funcionan de manera similar en la mayoría de los casos, así que cuál usar depende de tus preferencias o necesidades específicas.
*/
?>