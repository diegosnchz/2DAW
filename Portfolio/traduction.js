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

// Function to apply translations to the page
function applyTranslations(translations) {
  // Update elements with data-translate attribute
  const elements = document.querySelectorAll('[data-translate]');
  elements.forEach(element => {
    const key = element.getAttribute('data-translate');
    if (translations[key]) {
      element.textContent = translations[key];
    }
  });

  // Update project titles and descriptions
  translations.proyecto.title.forEach((title, index) => {
    const titleElement = document.querySelector(`.tituloProyecto${index + 1}`);
    if (titleElement) {
      titleElement.textContent = title;
    }
  });

  translations.proyecto.description.forEach((description, index) => {
    const descElement = document.querySelector(`.descripcionProyecto${index + 1}`);
    if (descElement) {
      descElement.textContent = description;
    }
  });

  // Update project buttons
  const buttons = document.querySelectorAll('.buttonProyecto');
  buttons.forEach(button => {
    button.textContent = translations.proyecto.button;
  });

  // Update footer texts
  const firstFooter = document.querySelector('.firstFooter');
  if (firstFooter) {
    firstFooter.textContent = translations.footer.first;
  }

  const secondFooter = document.querySelector('.secondFooter');
  if (secondFooter) {
    secondFooter.textContent = translations.footer.second;
  }
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

// Load default language after DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  loadTranslations('en'); // Ensure default language is loaded
  // ...existing event listeners...
  // Remove the following duplicated listeners:
  // document.getElementById('esp').addEventListener('change', function () {
  //     if (this.checked) {
  //         loadTranslations('es');
  //     }
  // });
  // 
  // document.getElementById('ing').addEventListener('change', function () {
  //     if (this.checked) {
  //         loadTranslations('en');
  //     }
  // });
});
