// Document ready function
document.addEventListener('DOMContentLoaded', function () {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Adjust for header height
                    behavior: 'smooth'
                });
            }
        });
    });

    // About section buttons functionality
    const aboutButtons = document.querySelectorAll('.p-about__button-wrapper .c-button');
    if (aboutButtons.length > 0) {
        aboutButtons.forEach(button => {
            button.addEventListener('click', function () {
                // Add your functionality here
                console.log('Button clicked: ' + this.textContent.trim());

                // Example: Show a different section based on button clicked
                const buttonText = this.textContent.trim().toLowerCase();

                // You can implement modals or content switching here
                if (buttonText === 'about me') {
                    // Show about me content
                } else if (buttonText === 'resume') {
                    // Show resume content or download resume
                } else if (buttonText === 'design story') {
                    // Show design story content
                }
            });
        });
    }

    // Add header background on scroll
    window.addEventListener('scroll', function () {
        const header = document.querySelector('.l-header');
        if (header) {
            if (window.scrollY > 10) {
                header.classList.add('l-header--scrolled');
            } else {
                header.classList.remove('l-header--scrolled');
            }
        }
    });

    // Intersection Observer for scroll animations
    if ('IntersectionObserver' in window) {
        const sections = document.querySelectorAll('section');

        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                }
            });
        }, { threshold: 0.1 });

        sections.forEach(section => {
            sectionObserver.observe(section);
        });
    }
});