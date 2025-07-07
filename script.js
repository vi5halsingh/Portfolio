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
// Disable right click
document.addEventListener('contextmenu', (e) => {
  e.preventDefault();
  alert('please do not do this , contact me 🙂')
});

// Disable various keyboard shortcuts and dev tools
document.addEventListener('keydown', (e) => {
    // Prevent F12
    if(e.key === 'F12') {
        e.preventDefault();
        alert('please do not do this , contact me 🙂')
    }
    
    // Prevent Ctrl+Shift+I/J/C/K
    if(e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C' || e.key === 'K')) {
        e.preventDefault();
        alert('please do not do this , contact me 🙂')
    }
    
    // Prevent Ctrl+U (view source)
    if(e.ctrlKey && e.key === 'u') {
        e.preventDefault();
        alert('please do not do this , contact me 🙂')
  }
});

// Disable devtools through console logging
console.log = function() {};
console.warn = function() {};
console.error = function() {};

// Media query for mobile devices
const checkMobileScreen = () => {
  if (window.matchMedia("(max-width: 768px)").matches) {
   alert('You may have bad experience on small screens ')
  }
};

// Initial check
checkMobileScreen();

// Listen for screen size changes
window.addEventListener('resize', checkMobileScreen);

const projectdiv = document.querySelectorAll('.projectdiv')
projectdiv.forEach(element => {
   element.addEventListener('mouseover',(e)=>{
    element.querySelector('.projectHeader img').style.height = '25vh'
  })
  element.addEventListener('mouseout',(e)=>{
    element.querySelector('.projectHeader img').style.height = ''
  })

});
