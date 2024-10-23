// Esto  lo que hace es reemplazar todo el codigo del HTML por lo que este referido el document.body.innerHTML. 
// En este caso he puesto solo una palabra pero pueden ser más cosas (mirar qué cosas)
document.body.innerHTML = "hello";

// OPERACIONES MATEMÁTICAS
// Si queremos que cuando operemos con numeros DECIMALES no nos salga un numero largo y horrendo (de muchos DECIMALES),
// lo que se puede hacer es calcularlo en centimos y luego pasarlo a €€ dividiendo entre 100. 2332 + 756 = 3242 >> 3242 / 100 = 32.42€
// Con Math.round podemos redondear directamente los numeros pero sin decimales
Math.round(2.3) //Esto va a dar 3

//Para calcular el impuesto de algo podemos hacer ((2332 + 756) * 0.1)*100
//Lo que hemos hecho ha sido pasar todo a centimos con la cabeza, luego el 0.1 es 10% de impuesto y luego *100 para pasarlo a dólares otra vez.

// STRINGS 
//Podemos ver de qué tipo es el string que hemos puesto gracias al typeof()
typeof 2; //--> Number
typeof "hello"; //--> String

//Si haces una concatenación del "hello" con un 2, éste pasa a ser un string --> "hello" + 3 == "hello3";
//Si quieres poner "$" y luego sumar dos números te lo va a poner todo en un mismo String y no te va a sumar nada por lo que para ello: 
//"$" + (20.34 + 2.32) --> PONEMOS PARENTESIS a los números para que hagan la operación

// VARIABLES
//Si quieres sobreescribir una variable se hace sin poner let, var o const.. se pone y ya esta --> variable1 = "hello"; y yasta
let variable1 = 2;
variable1 = 3; //está reasignada
// USAR SIEMPRE CONST, SALVO CUANDO SEPAMOS QUE VAMOS A CAMBIAR LA VARIABLE (ahí usamos LET)

// CONDICIONALES
// El == no es igual al === porque el == lo que hace es comparar pero poco ya que por ejemplo si tienes console.log(5 == '5.00'); te va a decir que si que está bien porque pasa el 5 de STRING a NUMBER.. pero con el estricto va a comparar el 5 (Number) con el 5 (String) y va a DETERMINAR QUE NO ES EL MISMO