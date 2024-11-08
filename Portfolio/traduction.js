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
function applyTranslations(translations) {
  //creo variables que hagan referencia al document y luego lo pongo en vez de directamente -> REFACTORIZAR EL CODIGO
  document.querySelector('h1').textContent = translations.title;
  document.querySelector('a[href="#"]').textContent = translations.home;
  document.querySelector('a[href="#gallery"]').textContent = translations.gallery;
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

  document.querySelector('#brand').textContent = "DiegoDev"; // asi hago que el script no cambie el titulo
  document.querySelector('a[href="#gallery"]').textContent = translations.gallery;

  document.querySelector('.buttonProyecto').textContent = translations.proyecto.button;
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
