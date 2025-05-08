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
                const buttonText = this.textContent.trim().toLowerCase();
                
                // Handle button clicks
                if (buttonText === 'about me') {
                    console.log('About me clicked');
                    // Implement about me action
                } else if (buttonText === 'resume') {
                    console.log('Resume clicked');
                    // Implement resume action
                } else if (buttonText === 'design story') {
                    console.log('Design story clicked');
                    // Implement design story action
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

    // Add scroll animations
    if ('IntersectionObserver' in window) {
        const observedElements = document.querySelectorAll('.p-works__item, .p-about, .p-contact');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    
                    // Add staggered animation for work items
                    if (entry.target.classList.contains('p-works__item')) {
                        const delay = Array.from(document.querySelectorAll('.p-works__item')).indexOf(entry.target) * 150;
                        entry.target.style.transitionDelay = `${delay}ms`;
                    }
                }
            });
        }, { threshold: 0.2 });

        observedElements.forEach(el => {
            observer.observe(el);
        });
    }
});