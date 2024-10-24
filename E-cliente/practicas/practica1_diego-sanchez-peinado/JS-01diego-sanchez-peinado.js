
        // Apartado 1: Objeto principal con todos los tipos de datos
        const ferrari = {
            nombre: "Ferrari",
            modelo: "489 Sypder",
            anyo: 2024,
            precio: 350000.50,  // Number con decimales
            numSerial: BigInt("9007199254740991"),  // Valor máximo de BigInt
            vendido: false,
            // Apartado 2: Objeto interno
            caracteristicas: {
                puertas: 4,
                marchas: 6,
                asientos: "sport",
                hibrido: false,
                motor: {
                    cilindros: 8,
                    potencia: 670,
                    tipo: "V8"
                }
            }
        };

        // Apartado 3: Función para pedir datos
        function pedirDatos() {
            let nombre = prompt("¿Cuál es el nombre del coche?");
            let modelo = prompt("Escribe el modelo del coche");
            let anyo = parseInt(prompt("¿De qué año es tu coche?"));
            let precio = parseFloat(prompt("¿Cuál es el precio del coche?"));
            let numSerial = prompt("¿Cuál es el número serial de tu coche?");
            let vendido = prompt("¿Está tu coche vendido? (si/no)").toLowerCase() === 'si';
            
            return { nombre, modelo, anyo, precio, numSerial, vendido };
        }

        // Apartado 4: Constructor
        function Ferrari(nombre, modelo, anyo, precio, numSerial, vendido) {
            this.nombre = nombre;
            this.modelo = modelo;
            this.anyo = anyo;
            this.precio = precio;
            this.numSerial = numSerial;
            this.vendido = vendido;
            this.caracteristicas = {
                puertas: 4,
                marchas: 6,
                asientos: "sport",
                hibrido: false
            };
        }

        // Apartado 5: Funciones de cálculo
        function calcularDepreciacion(precioInicial, años) {
            let depreciation = precioInicial * (0.15 * años);
            console.log(`La depreciación después de ${años} años es: ${depreciation}€`);
            return depreciation;
        }

        function calcularCostoTotal(precioBase, impuestos) {
            let total = precioBase * (1 + impuestos/100);
            alert(`El costo total con ${impuestos}% de impuestos es: ${total}€`);
            return total;
        }

        // Apartado 6: Función que describe el objeto
        function describirFerrari(coche) {
            return `Este es un ${coche.nombre} modelo ${coche.modelo} del año ${coche.anyo}. 
                   ${coche.vendido ? 'Ya está vendido' : 'Está disponible para la venta'}.
                   Cuenta con ${coche.caracteristicas.puertas} puertas y 
                   ${coche.caracteristicas.marchas} marchas. 
                   Los asientos son tipo ${coche.caracteristicas.asientos}.`;
        }

        // Apartado 7: Función para mostrar tipos de variables
        function mostrarTipos(objeto) {
            for (let prop in objeto) {
                if (objeto.hasOwnProperty(prop)) {
                    console.log(`${prop}: ${typeof objeto[prop]}`);
                    if (typeof objeto[prop] === 'object' && objeto[prop] !== null) {
                        mostrarTipos(objeto[prop]);
                    }
                }
            }
        }

        // Apartado 8: Función para verificar instancia
        function verificarInstancia(objeto) {
            console.log(objeto instanceof Ferrari);
        }

        // Pruebas de funcionamiento
        let miFerrari = new Ferrari("Ferrari", "F8", 2024, 350000, "123456", false);
        console.log(describirFerrari(miFerrari));
        mostrarTipos(miFerrari);
        verificarInstancia(miFerrari);
        
        // Pruebas de cálculos
        calcularDepreciacion(350000, 5);
        calcularCostoTotal(350000, 21);