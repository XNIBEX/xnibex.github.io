document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);
  
    const background = document.querySelector('.background-gradient');
    const starsContainer = document.querySelector('.stars');
    const scrollBtn = document.getElementById('scroll-down-btn');
    const projectsSection = document.getElementById('projects-section');
  
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
    gsap.fromTo('#download-cv-btn', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: 'power2.out', delay: 2 });
    gsap.fromTo('#scroll-down-btn', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: 'power2.out', delay: 2.2 });
  
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
  
    // Scroll al hacer clic
    scrollBtn.addEventListener('click', () => {
      gsap.to(window, { duration: 1.5, scrollTo: { y: projectsSection, offsetY: 0 }, ease: "power2.inOut" });
    });
  });
  