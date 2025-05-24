const mobileMenu = document.getElementById('mobileMenu');
document.getElementById('mobileMenuButton').addEventListener('click', () => {
  mobileMenu.classList.remove('hidden');
});

document.getElementById('closeMenuButton').addEventListener('click', () => {
  mobileMenu.classList.add('hidden');
});

// Close menu when clicking outside
mobileMenu.addEventListener('click', (e) => {
  if(e.target === mobileMenu) {
    mobileMenu.classList.add('hidden');
  }
});