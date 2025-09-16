document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollToPlugin);

    const background = document.querySelector('.background-gradient');
    const starsContainer = document.querySelector('.stars');
    const scrollBtn = document.getElementById('scroll-down-btn');
    const projectsSection = document.getElementById('projects-section');

    // Animación del gradiente con GSAP
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

    // Animación de entrada para el texto, botones e íconos
    gsap.fromTo('.content h1', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: 'power2.out', delay: 1 });
    gsap.fromTo('.content h2', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: 'power2.out', delay: 1 });
    gsap.fromTo('.content p', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: 'power2.out', delay: 1.5 });
    gsap.fromTo('#download-cv-btn', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: 'power2.out', delay: 2 });
    gsap.fromTo('.tech-icons', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: 'power2.out', delay: 2.5 });
    gsap.fromTo('#scroll-down-btn', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: 'power2.out', delay: 3 });
    gsap.fromTo('.projects-title', { opacity: 0, y: 50 }, {
        opacity: 1, y: 0, duration: 1, ease: 'power2.out',
        scrollTrigger: {
            trigger: '.projects-title',
            start: 'top 80%',
            toggleActions: 'play none none none'
        }
    });
    gsap.fromTo('.project', { opacity: 0, y: 50 }, {
        opacity: 1, y: 0, duration: 1, ease: 'power2.out', stagger: 0.3,
        scrollTrigger: {
            trigger: '#projects-section',
            start: 'top 80%',
            toggleActions: 'play none none none'
        }
    });
     // Lógica para los carruseles
     const carousels = document.querySelectorAll('.carousel-container');
     carousels.forEach(carousel => {
        const track = carousel.querySelector('.carousel-track');
        const slides = Array.from(track.children);
        const nextBtn = carousel.querySelector('.next-btn');
        const prevBtn = carousel.querySelector('.prev-btn');
        const slideWidth = slides[0].getBoundingClientRect().width;
        let currentIndex = 0;

        const moveSlide = (track, targetIndex) => {
            track.style.transform = `translateX(-${targetIndex * slideWidth}px)`;
        };

        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % slides.length;
            moveSlide(track, currentIndex);
        });

        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            moveSlide(track, currentIndex);
        });
    });


    // Crear estrellas
    const numStars = 100;
    for (let i = 0; i < numStars; i++) {
        let star = document.createElement('div');
        star.className = 'star';

        let size = Math.random() * 3 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;

        let x = Math.random() * 100;
        let y = Math.random() * 100;
        star.style.left = `${x}%`;
        star.style.top = `${y}%`;

        let duration = Math.random() * 2 + 1;
        let delay = Math.random() * 5;
        star.style.animationDuration = `${duration}s`;
        star.style.animationDelay = `${delay}s`;

        starsContainer.appendChild(star);
    }

    // Evento para el botón de scroll
    scrollBtn.addEventListener('click', () => {
        gsap.to(window, {
            duration: 1.5,
            scrollTo: {
                y: projectsSection,
                offsetY: 0
            },
            ease: "power2.inOut"
        });
    });


});