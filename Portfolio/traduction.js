// Función para cargar las traducciones desde el archivo JSON
async function loadTranslations(lang) {
  try {
      const response = await fetch('translations.json');
      const translations = await response.json();
      applyTranslations(translations[lang]);
  } catch (error) {
      console.error("Error loading translations:", error);
  }
}

// Función para aplicar las traducciones en la página
function applyTranslations(translations) 
{
  // Referencias a elementos del documento
  document.querySelector('h1').textContent = translations.title;
  document.querySelector('#home').textContent = translations.home;
  document.querySelector('a[href="#gallery"]').textContent = translations.gallery;
  document.querySelector('#letsconnect').textContent = translations.letsconnect;
  document.querySelector('#skills h2').textContent = translations.skills;
  document.querySelector('#skills p').textContent = translations.description;

  // CARRUSEL - GALERÍA
  document.querySelector('.tituloProyecto1').textContent = translations.proyecto.title[0];
  document.querySelector('.descripcionProyecto1').textContent = translations.proyecto.description[0];

  document.querySelector('.tituloProyecto2').textContent = translations.proyecto.title[1];
  document.querySelector('.descripcionProyecto2').textContent = translations.proyecto.description[1];

  document.querySelector('.tituloProyecto3').textContent = translations.proyecto.title[2];
  document.querySelector('.descripcionProyecto3').textContent = translations.proyecto.description[2];

  document.querySelector('.tituloProyecto4').textContent = translations.proyecto.title[3];
  document.querySelector('.descripcionProyecto4').textContent = translations.proyecto.description[3];

  document.querySelector('#brand').textContent = "DiegoDev"; // así hago que el script no cambie el título
  document.querySelector('#gallery').textContent = translations.gallery;

  // Seleccionar todos los botones y aplicar el texto correspondiente
  const buttons = document.querySelectorAll('.buttonProyecto');
  buttons.forEach((button, index) => {
    button.textContent = translations.proyecto.button;
  });

  //Footer
  document.querySelector('.firstFooter').textContent = translations.footer.first;
  document.querySelector('.secondFooter').textContent = translations.footer.second;
}

// Event listeners para cambiar el idioma
document.getElementById('esp').addEventListener('change', function () {
  if (this.checked) {
      loadTranslations('es');
  }
});

document.getElementById('ing').addEventListener('change', function () {
  if (this.checked) {
      loadTranslations('en');
  }
});

// Cargar el idioma por defecto al cargar la página
window.onload = function() {
  loadTranslations('en');
};
