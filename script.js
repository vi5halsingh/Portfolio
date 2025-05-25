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


// GSAP animation
gsap.registerPlugin(ScrollTrigger);

gsap.from(".starting", {
  opacity: 0,
  y:100,
  duration: 1,
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".imagecontent",
    start: "top 100%",
    end: "bottom 30%",
    scrub: true
  }
});
var updateDateTime = () => {
    let d = new Date();
    let hour = d.getHours().toString().padStart(2, '0');
    let minute = d.getMinutes().toString().padStart(2, '0');
    let second = d.getSeconds().toString().padStart(2, '0');
    let time = `${hour}:${minute}:${second}`;
   
    // Update timing display
    const timingElement = document.querySelector('.timing');
    if(timingElement) {
      timingElement.textContent = `[${time}]`;
    }
    const timeDateElement = document.querySelector('.timeDate');
    if(timeDateElement) {
      let day = d.getDate().toString().padStart(2, '0');
      let month = (d.getMonth() + 1).toString().padStart(2, '0');
      let year = d.getFullYear();
      timeDateElement.textContent = `${day}-${month}-${year} [${time}]`;
    }
  }
  setInterval(() => {
    updateDateTime();
  }, 1000);



    // Scroll to top functionality
    document.getElementById('topButton').addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    // document.getElementById('topButton').addEventListener('dblclick', () => {
    //         if (body.classList.contains('dark-theme')) {
    //             enableLightMode();
    //         } else {
    //             enableDarkMode();
    //         }
    //     });

    // Show/hide button with GSAP animation
    gsap.to("#topButton", {
        opacity: 1,
        duration: 0.5,
        scrollTrigger: {
            start: "top center",
            onEnter: () => gsap.to("#topButton", { opacity: 1, duration: 0.5 }),
            onLeaveBack: () => gsap.to("#topButton", { opacity: 1, duration: 0.5 }),
        }
    });

        // Theme Toggle Functionality
        const themeToggle = document.getElementById('themeToggle');
    const lightIcon = document.getElementById('lightIcon');
    const darkIcon = document.getElementById('darkIcon');
    const body = document.body;
        const projectHeader = document.querySelector('.projectHeader');
        const socialHeader = document.querySelector('#socialHeader');
        const Grps = document.querySelector('.group');
        const bgChange = document.querySelectorAll('.bg-white');
        const dotImage = document.getElementById('dotImage');

        // Initialize theme - Start with dark mode by default
        if (localStorage.getItem('theme') === 'light') {
            enableLightMode();
        } else {
            enableDarkMode();  // This will be the default state
        }

        themeToggle.addEventListener('click', () => {
            if (body.classList.contains('dark-theme')) {
                enableLightMode();
            } else {
                enableDarkMode();
            }
        });

        function enableDarkMode() {
            body.classList.add('dark-theme');
            lightIcon.classList.add('hidden');
            darkIcon.classList.remove('hidden');
            localStorage.setItem('theme', 'dark');
            projectHeaderDarkMode()
          }
          function projectHeaderDarkMode() {
            dotImage.classList.add('invisible')
            bgChange.forEach((element) => {
              element.classList.remove('bg-white');
              element.style.backgroundColor = '#1a1a1a'
              element.style.color = '#f0f0f0';
            })
          }
          function projectHeaderLightMode() {
            dotImage.classList.remove('invisible')
            bgChange.forEach((element) => {
              element.classList.remove('bg-white');
              element.style.backgroundColor = '#f0f0f0'
              element.style.color = 'black';
            })
          }
          projectHeader.classList.remove('dark-theme');
          
          function enableLightMode() {
            projectHeaderLightMode()
            body.classList.remove('dark-theme');
            darkIcon.classList.add('hidden');
            lightIcon.classList.remove('hidden');
            localStorage.setItem('theme', 'light');
        }
  
