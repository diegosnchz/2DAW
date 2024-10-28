// Ejercicio 1: Crear un objeto complejo
const avion = {
    marca: "Boeing", // String
    modelo: "747", // String
    capacidadPasajeros: 660, // Number
    precio: 300000000, // Number
    esComercial: true, // Boolean
    maximoValor: BigInt(9007199254740991), 
    motor: {
        tipo: "Turbofan", // String
        potencia: 250000, // Number
        esEficiente: true // Boolean
    }
};

// Ejercicio 2: Modificar el objeto y añadir un objeto interno
avion.motor.peso = 4000; // Añadiendo un nuevo atributo al objeto interno

// Ejercicio 3: Funciones para pedir valores
function asignarValores() {
    avion.marca = prompt("Introduce la marca del avión:");
    avion.modelo = prompt("Introduce el modelo del avión:");
    avion.capacidadPasajeros = parseInt(prompt("Introduce la capacidad de pasajeros:"));
    avion.precio = parseFloat(prompt("Introduce el precio del avión:"));
    avion.esComercial = confirm("¿Es comercial?");
    avion.maximoValor = BigInt(prompt("Introduce el valor máximo (BigInt):"));
    avion.motor.tipo = prompt("Introduce el tipo de motor:");
    avion.motor.potencia = parseInt(prompt("Introduce la potencia del motor:"));
    avion.motor.esEficiente = confirm("¿Es eficiente?");
}

// Ejercicio 4: Función constructora
function Avion(marca, modelo, capacidadPasajeros, precio, esComercial, maximoValor, motorTipo, motorPotencia, motorEficiente) {
    this.marca = marca;
    this.modelo = modelo;
    this.capacidadPasajeros = capacidadPasajeros;
    this.precio = precio;
    this.esComercial = esComercial;
    this.maximoValor = maximoValor;
    this.motor = {
        tipo: motorTipo,
        potencia: motorPotencia,
        esEficiente: motorEficiente
    };
}

// Ejercicio 5: Funciones para cálculos
function calcularPrecioPorPasajero() {
    const precioPorPasajero = avion.precio / avion.capacidadPasajeros;
    console.log(`El precio por pasajero es: ${precioPorPasajero}`);
}

function mostrarPrecioPorPasajero() {
    const precioPorPasajero = avion.precio / avion.capacidadPasajeros;
    alert(`El precio por pasajero es: ${precioPorPasajero}`);
}

// Ejercicio 6: Funciones para describir el objeto
function describirAvion() {
    return `El avión ${avion.marca} modelo ${avion.modelo} tiene una capacidad de ${avion.capacidadPasajeros} pasajeros y cuesta ${avion.precio} euros.`;
}

// Ejercicio 7: Función para mostrar tipos de variables
function mostrarTipos() {
    console.log(`Tipo de marca: ${typeof avion.marca}`);
    console.log(`Tipo de modelo: ${typeof avion.modelo}`);
    console.log(`Tipo de capacidadPasajeros: ${typeof avion.capacidadPasajeros}`);
    console.log(`Tipo de precio: ${typeof avion.precio}`);
    console.log(`Tipo de esComercial: ${typeof avion.esComercial}`);
    console.log(`Tipo de maximoValor: ${typeof avion.maximoValor}`);
    console.log(`Tipo de motor: ${typeof avion.motor}`);
}

// Ejercicio 8: Uso de instanceof
function verificarTipo() {
    console.log(avion instanceof Object);
}

// Ejemplo de uso
asignarValores(); // Llama a la función para asignar valores
calcularPrecioPorPasajero(); // Muestra el precio por pasajero en consola
mostrarPrecioPorPasajero(); // Muestra el precio por pasajero en una ventana emergente
console.log(describirAvion()); // Muestra la descripción del avión
mostrarTipos(); // Muestra los tipos de las variables
verificarTipo(); // Verifica si avion es un objeto