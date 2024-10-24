// 1. Constructor y creación de objetos
function Coche(marca, modelo, precio) {
    this.marca = marca;
    this.modelo = modelo;
    this.precio = precio;
    this.vendido = false;
    this.numero = 12345; 
    this.esNuevo = true; 
}

// Creamos dos objetos
let coche1 = new Coche("Ferrari", "F8", 350000);
let coche2 = new Coche("Ferrari", "F8", 350000);

// 2. Comparación con ===
console.log("¿Son iguales los coches?:", coche1 === coche2); // va a dar false

// 3. typeof e instanceof
console.log("Tipo de coche1:", typeof coche1);
console.log("¿Es coche1 instancia de Coche?:", coche1 instanceof Coche);
console.log("Tipo de coche2:", typeof coche2);
console.log("¿Es coche2 instancia de Coche?:", coche2 instanceof Coche);

// 4. Nueva propiedad sin declarar
coche1.color = "Rojo";
console.log("Color de coche1:", coche1.color);

// 5. Añadir propiedad al prototipo
Coche.prototype.arrancar = function() {
    console.log("El coche ha arrancado");
};

// 6. Operador bitwise (shift right)
console.log("Número desplazado a la derecha:", coche1.numero >> 3);

// 7. Operador bitwise (shift left)
console.log("Número desplazado a la izquierda:", coche1.numero << 3);

// 8. Comparación numeric vs BigInt
function compararNumeros(num1, num2) {
    return num1 === Number(num2);
}
console.log("Comparación:", compararNumeros(123, BigInt(123)));

// 9. Operador ternario
function verificarPrecio(coche) {
    console.log(coche.precio > 300000 ? "Coche de lujo" : "Coche estándar");
}
verificarPrecio(coche1);

// 10 y 11. Operadores lógicos para números y booleanos
function operadoresLogicos(a, b) {
    console.log("AND numérico:", a & b);
    console.log("OR numérico:", a | b);
    console.log("NOT numérico:", ~a);
    console.log("XOR numérico:", a ^ b);
    
    // Para booleanos
    console.log("AND booleano:", Boolean(a) && Boolean(b));
    console.log("OR booleano:", Boolean(a) || Boolean(b));
    console.log("NOT booleano:", !Boolean(a));
    // XOR booleano
    console.log("XOR booleano:", Boolean(a) !== Boolean(b));
}

// 12. toString() predefinido
console.log("toString() predefinido:", coche1.toString());

// 13. Método toString personalizado
Coche.prototype.toString = function() {
    return `${this.marca} ${this.modelo} - Precio: ${this.precio}€`;
};

// 14. Probar toString del prototipo
console.log("toString personalizado:", coche1.toString());

// Pruebas adicionales
coche1.arrancar();
operadoresLogicos(5, 3);
operadoresLogicos(true, false);