// Hero Animation with GSAP
document.addEventListener('DOMContentLoaded', function() {
    // Create a timeline for the hero section
    const heroTL = gsap.timeline({
        defaults: { 
            ease: "power3.out",
            duration: 0.8
        }
    });

    // Initial animation - text elements
    heroTL.from(".hero-element", { 
        y: 30, 
        opacity: 0,
        stagger: 0.2
    });

    // Initial animation - hero image
    heroTL.from(".hero-img", {
        scale: 0.8,
        opacity: 0,
        duration: 1
    }, "-=0.4");

    // Decorative elements entrance
    heroTL.from(".hero-decoration", {
        scale: 0.5,
        opacity: 0,
        stagger: 0.1
    }, "-=0.8");

    // Create infinite animations for decorative elements
    const decorations = gsap.utils.toArray(".hero-decoration");
    
    // Function to create random movement for each decoration
    decorations.forEach(element => {
        createRandomMovement(element);
    });

    // Create gentle hover animation for the hero image
    gsap.to(".hero-img", {
        y: 10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

    // Create subtle rotation for maple leaf elements
    gsap.to(".maple-1, .maple-2", {
        rotation: "+=10",
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

    // Create a subtle scale animation for the triangle
    gsap.to(".triangle-1", {
        scaleY: 1.2,
        scaleX: 0.9,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });
});

// Function to create random movement animation
function createRandomMovement(element) {
    // Get the current position
    const currentX = gsap.getProperty(element, "x") || 0;
    const currentY = gsap.getProperty(element, "y") || 0;
    
    // Create a random destination within a reasonable range
    const destX = currentX + (Math.random() * 30 - 15); // ±15px
    const destY = currentY + (Math.random() * 30 - 15); // ±15px
    
    // Random duration between 3-6 seconds
    const duration = 3 + Math.random() * 3;
    
    // Create the animation
    gsap.to(element, {
        x: destX,
        y: destY,
        duration: duration,
        ease: "sine.inOut",
        onComplete: function() {
            // When animation completes, create a new random movement
            createRandomMovement(element);
        }
    });
    
    // Create a separate rotation animation if the element is not a circle
    if (!element.classList.contains('circle-1') && !element.classList.contains('circle-2')) {
        gsap.to(element, {
            rotation: "+=" + (Math.random() * 40 - 20), // Rotate ±20 degrees
            duration: duration * 0.8, // Slightly faster than the movement
            ease: "sine.inOut"
        });
    }
}

// Add special interactive effect when hovering over the hero section
document.querySelector('.p-hero').addEventListener('mousemove', function(e) {
    // Get cursor position
    const mouseX = e.clientX;
    
    // Calculate how far the mouse is from the center as a percentage
    const windowWidth = window.innerWidth;
    const percentX = (mouseX / windowWidth) * 2 - 1; // Range from -1 to 1
    
    // Move the decorations slightly based on mouse position for parallax effect
    const decorations = gsap.utils.toArray(".hero-decoration");
    decorations.forEach((element, index) => {
        // Different depths for different elements
        const depth = 0.5 + (index * 0.1); 
        gsap.to(element, {
            x: "+=" + (percentX * 10 * depth), // Move based on mouse position and depth
            duration: 0.5,
            overwrite: "auto"
        });
    });
    
    // Subtle rotation of the hero image based on cursor position
    gsap.to(".hero-img", {
        rotationY: percentX * 2, // Subtle rotation effect
        duration: 0.5,
        overwrite: "auto"
    });
});

// Create a special animation for the Vancouver heart/maple leaf
gsap.to(".maple-leaf", {
    scale: 1.3,
    color: "#A41919",
    duration: 1.5,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
});