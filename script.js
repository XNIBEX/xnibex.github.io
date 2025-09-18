document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

    const background = document.querySelector('.background-gradient');
    const starsContainer = document.querySelector('.stars');
    const scrollToProjectsBtn = document.getElementById('scroll-to-projects-btn');
    const projectsSection = document.getElementById('projects-section');

    // Animación del fondo con GSAP
    gsap.to(background, {
        duration: 15,
        background: 'radial-gradient(circle, #001a4e 0%, #000000 100%)',
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
    });
    gsap.to(background, {
        duration: 20,
        background: 'radial-gradient(circle, #3a0026 0%, #000000 100%)',
        repeat: -1,
        yoyo: true,
        delay: 5,
        ease: "power1.inOut"
    });

    

    // Crear estrellas
    const numStars = 100;
    for (let i = 0; i < numStars; i++) {
        let star = document.createElement('div');
        star.className = 'star';
        let size = Math.random() * 3 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDuration = `${Math.random() * 2 + 1}s`;
        star.style.animationDelay = `${Math.random() * 5}s`;
        starsContainer.appendChild(star);
    }

    // Scroll suave a la sección de proyectos
    if (scrollToProjectsBtn) {
        scrollToProjectsBtn.addEventListener('click', (e) => {
            e.preventDefault();
            gsap.to(window, {
                duration: 1.5,
                scrollTo: projectsSection,
                ease: "power2.inOut"
            });
        });
    }

    // Lógica para la navegación del navbar (si la incluyes)
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = e.target.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                gsap.to(window, {
                    duration: 1.5,
                    scrollTo: targetSection,
                    ease: "power2.inOut"
                });
            }
        });
    });
        // Animación de entrada de la sección "Sobre Mí" con GSAP
        gsap.fromTo('.about-me-section .container > *', { opacity: 0, y: 50 }, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power2.out',
            stagger: 0.2, // Aplica el efecto escalonado a cada elemento hijo
            delay: 1.2
        });

        // Animación de entrada para los títulos de sección
        gsap.utils.toArray(".section-title").forEach(title => {
            gsap.fromTo(title, { opacity: 0, y: 50 }, {
                opacity: 1, y: 0, duration: 1, ease: 'power2.out',
                scrollTrigger: {
                    trigger: title,
                    start: 'top 80%',
                    toggleActions: 'play none none none'
                }
            });
        });
    
        // Animación de entrada para cada proyecto
        gsap.utils.toArray(".project").forEach(project => {
            gsap.fromTo(project, { opacity: 0, y: 50 }, {
                opacity: 1, y: 0, duration: 1, ease: 'power2.out',
                scrollTrigger: {
                    trigger: project,
                    start: 'top 80%',
                    toggleActions: 'play none none none'
                }
            });
        });
 // Animación de entrada para la sección de contacto
 gsap.fromTo("#contact-section .contact-links", { opacity: 0, y: 50 }, {
    opacity: 1, y: 0, duration: 1, ease: 'power2.out',
    scrollTrigger: {
        trigger: '#contact-section',
        start: 'top 80%',
        toggleActions: 'play none none none'
    }
});




});