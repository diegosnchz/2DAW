// Texts in both languages
const typewriteTexts = {
    ing: ["This is me", "I love developing", "Hope you like it :D"],
    esp: ["Este soy yo", "Me encanta desarrollar", "Espero que te guste :D"]
  };
  
  let typewriteTimeout; 
  let typingInProgress = false; 
  
  function startTypewrite(textArray) {
    const element = document.getElementById('typewrite-text');
    let textIndex = 0;
    let charIndex = 0;
    let currentText = '';
    let isDeleting = false;
  
    function type() {
      if (!typingInProgress) return; 
  
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
  
    typingInProgress = true; 
    type();
  }
  

  function stopTypewrite() {
    typingInProgress = false; 
    clearTimeout(typewriteTimeout); 
  }
  
  function updateTypewriteText(language) {
    stopTypewrite(); 
    const texts = typewriteTexts[language];
    startTypewrite(texts); 
  }
  

  function onLanguageChange(language) {
    updateTypewriteText(language);
  }
  

  const langButtons = document.querySelectorAll('input[name="rdo"]');
  langButtons.forEach(btn => {
    btn.addEventListener('change', (event) => {
      const selectedLang = event.target.id;
      updateTypewriteText(selectedLang);
    });
  });
  

  document.addEventListener('DOMContentLoaded', function() {
    updateTypewriteText('ing');
  });