document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);
  
    const background = document.querySelector('.background-gradient');
    const starsContainer = document.querySelector('.stars');
    const scrollBtn = document.getElementById('scroll-down-btn');
    const projectsSection = document.getElementById('projects-section');



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
  
    // Animación del fondo
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
  
    // Animación de entrada
    gsap.fromTo('.profile-pic', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: 'power2.out', delay: 1.2 });
    gsap.fromTo('.content h1', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: 'power2.out', delay: 1.2 });
    gsap.fromTo('.content h2', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: 'power2.out', delay: 1.4 });
    gsap.fromTo('.content p', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: 'power2.out', delay: 1.6 });
    gsap.fromTo('.content .tech-stack', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: 'power2.out', delay: 1.8 });
    gsap.fromTo('.btn-square', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: 'power2.out', delay: 2 });

        // Animación de entrada de la sección de proyectos con ScrollTrigger
        gsap.fromTo('.section-title', { opacity: 0, y: 50 }, {
            opacity: 1, y: 0, duration: 1, ease: 'power2.out',
            scrollTrigger: {
                trigger: '.section-title',
                start: 'top 80%',
                toggleActions: 'play none none none'
            }
        });
    
        gsap.fromTo('.project', { opacity: 0, y: 50 }, {
            opacity: 1, y: 0, duration: 1, ease: 'power2.out', stagger: 0.5,
            scrollTrigger: {
                trigger: '#projects-section',
                start: 'top 80%',
                toggleActions: 'play none none none'
            }
        });
        // Nueva: Animación de entrada para la sección de contacto
    gsap.fromTo('#contact-section', { opacity: 0, y: 50 }, {
        opacity: 1, y: 0, duration: 1, ease: 'power2.out',
        scrollTrigger: {
            trigger: '#contact-section',
            start: 'top 80%',
            toggleActions: 'play none none none'
        }
    });

    gsap.fromTo('.contact-links', { opacity: 0, y: 50 }, {
        opacity: 1, y: 0, duration: 1, ease: 'power2.out', delay: 0.5,
        scrollTrigger: {
            trigger: '#contact-section',
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
        let currentIndex = 0;

        const moveSlide = (track, targetIndex) => {
            const slideWidth = slides[0].getBoundingClientRect().width;
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

    // Lógica de navegación del navbar
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = e.target.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            gsap.to(window, {
                duration: 1.5,
                scrollTo: targetSection,
                ease: 'power2.inOut'
            });
        });
    });

    // Scroll al hacer clic en el botón de la sección principal
    scrollBtn.addEventListener('click', () => {
      gsap.to(window, {
        duration: 1.5,
        scrollTo: { y: projectsSection, offsetY: 0 },
        ease: "power2.inOut"
      });
    });
  



    
  });
  
  


  