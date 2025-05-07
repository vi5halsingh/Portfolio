document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Universal animation for all sections
    gsap.utils.toArray('section:not(.footer)').forEach(section => {
        gsap.from(section, {
            opacity: 0,
            y: 50,
            duration: 1,
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        });
    });

    // Staggered animation for all child elements
    gsap.utils.toArray('section:not(.footer) > *').forEach(element => {
        gsap.from(element, {
            opacity: 0,
            y: 30,
            duration: 0.8,
            stagger: 0.2,
            scrollTrigger: {
                trigger: element,
                start: 'top 90%',
            }
        });
    });

    // Special card animations
    gsap.utils.toArray('.flex-col, .firstHading, .midcontent').forEach(card => {
        gsap.from(card, {
            opacity: 0,
            scale: 0.9,
            duration: 0.6,
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
            }
        });
    });

    // Image hover effects
    gsap.utils.toArray('img').forEach(img => {
        gsap.from(img, {
            opacity: 0,
            scale: 1.1,
            duration: 0.8
        });
        
        img.addEventListener('mouseenter', () => {
            gsap.to(img, {
                scale: 1.05,
                duration: 0.3
            });
        });
        
        img.addEventListener('mouseleave', () => {
            gsap.to(img, {
                scale: 1,
                duration: 0.3
            });
        });
    });

    // Text element animations
    gsap.utils.toArray('h1, h2, h3, h4, h5, h6, p').forEach(text => {
        gsap.from(text, {
            opacity: 0,
            y: 20,
            duration: 0.5,
            scrollTrigger: {
                trigger: text,
                start: 'top 95%',
            }
        });
    });
});