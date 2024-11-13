document.addEventListener("DOMContentLoaded", function () {
    const typewriter = document.querySelector(".typewrite");
    const texts = JSON.parse(typewriter.getAttribute("data-text"));
    let textIndex = 0;
    let charIndex = 0;

    function type() {
        if (charIndex < texts[textIndex].length) {
            typewriter.textContent += texts[textIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, 100); // Velocidad de escritura
        } else {
            setTimeout(erase, 2000); // Pausa antes de borrar
        }
    }

    function erase() {
        if (charIndex > 0) {
            typewriter.textContent = texts[textIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, 50); // Velocidad de borrado
        } else {
            textIndex = (textIndex + 1) % texts.length;
            setTimeout(type, 1000); // Pausa antes de escribir de nuevo
        }
    }

    type();
});