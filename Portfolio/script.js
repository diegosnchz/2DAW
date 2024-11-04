// Animate title on load
window.addEventListener('load', () => {
  const title = document.querySelector('h1');
  title.classList.remove('opacity-0', '-translate-y-10');
});

// Moving gradient background
document.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth) * 100;
  const y = (e.clientY / window.innerHeight) * 100;
  document.body.style.background = `radial-gradient(circle at ${x}% ${y}%, #ffffff 0%, #000000 100%)`;
});

const carousel = document.querySelector('.carousel');
const items = carousel.querySelectorAll('.carousel-item');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentIndex = 0;

function showItem(index) {
  items.forEach((item, i) => {
    if (window.innerWidth >= 768) {
      item.classList.toggle('active', i === index || i === (index + 1) % items.length);
    } else {
      item.classList.toggle('active', i === index);
    }
  });
}

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  showItem(currentIndex);
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % items.length;
  showItem(currentIndex);
});

// Inicializar el carrusel
showItem(currentIndex);

// Actualizar el carrusel al redimensionar la ventana
window.addEventListener('resize', () => {
  showItem(currentIndex);
});




