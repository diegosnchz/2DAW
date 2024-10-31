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

// Carousel functionality
const carousel = document.querySelector('.carousel');
const items = carousel.querySelectorAll('.carousel-item');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentIndex = 0;

function showItem(index) {
  items.forEach((item, i) => {
    item.classList.toggle('active', i === index || (i === (index + 1) % items.length && window.innerWidth >= 768));
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

// Initialize carousel
showItem(currentIndex);

// Update carousel on window resize
window.addEventListener('resize', () => {
  showItem(currentIndex);
});
