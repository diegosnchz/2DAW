// Texts in both languages
const typewriteTexts = {
    ing: ["This is me", "I love developing", "Hope you like it :D"],
    esp: ["Este soy yo", "Me encanta desarrollar", "Espero que te guste :D"]
  };
  
  let typewriteTimeout; // Holds the timeout reference
  let typingInProgress = false; // Indicates if typing is in progress
  
  function startTypewrite(textArray) {
    const element = document.getElementById('typewrite-text');
    let textIndex = 0;
    let charIndex = 0;
    let currentText = '';
    let isDeleting = false;
  
    function type() {
      if (!typingInProgress) return; // Stop typing if not in progress
  
      if (textIndex < textArray.length) {
        if (!isDeleting && charIndex <= textArray[textIndex].length) {
          currentText = textArray[textIndex].substring(0, charIndex++);
          element.textContent = currentText;
          typewriteTimeout = setTimeout(type, 100);
        } else if (isDeleting && charIndex >= 0) {
          currentText = textArray[textIndex].substring(0, charIndex--);
          element.textContent = currentText;
          typewriteTimeout = setTimeout(type, 50);
        } else {
          isDeleting = !isDeleting;
          if (!isDeleting) {
            textIndex++;
            charIndex = 0;
          }
          typewriteTimeout = setTimeout(type, 500);
        }
      } else {
        textIndex = 0;
        typewriteTimeout = setTimeout(type, 500);
      }
    }
  
    typingInProgress = true; // Start typing
    type();
  }
  
  // Function to stop the current typewriter effect
  function stopTypewrite() {
    typingInProgress = false; // Stop typing
    clearTimeout(typewriteTimeout); // Clear the timeout
  }
  
  function updateTypewriteText(language) {
    stopTypewrite(); // Stop any ongoing typing effect
    const texts = typewriteTexts[language];
    startTypewrite(texts); // Start the new typing effect
  }
  
  // Function to handle language change from traduction.js
  function onLanguageChange(language) {
    updateTypewriteText(language);
  }
  
  // Event listeners for language change
  const langButtons = document.querySelectorAll('input[name="rdo"]');
  langButtons.forEach(btn => {
    btn.addEventListener('change', (event) => {
      const selectedLang = event.target.id;
      updateTypewriteText(selectedLang);
    });
  });
  
  // Initialize typewriter effect after DOM is fully loaded
  document.addEventListener('DOMContentLoaded', function() {
    updateTypewriteText('ing'); // Change to 'esp' if Spanish is default
  });