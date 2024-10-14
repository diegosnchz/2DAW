
        let a, b, c;
        a = "Esta es la PRIMERA cadena";
        b = "Esta es la SEGUNDA";
        c = a + b;

        /*document.getElementById("demo1").innerHTML = c;*/ 
        // eso de arriba va a ser necesario para inyectar el js al html
        window.alert(a);
        window.alert(b);
        window.alert(a.length + b.length);
