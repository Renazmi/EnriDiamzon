// Register GSAP ScrollTrigger Plugin
gsap.registerPlugin(ScrollTrigger);

// Initialize Page Animations
function initPageAnimations() {
    // Hero Section Animations
    const heroTitle = document.querySelector('.split-text');
    const heroDescription = document.querySelector('.hero-description');
    
    gsap.from(heroTitle, {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: 'power4.out'
    });
    
    gsap.from(heroDescription, {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: 'power4.out'
    });

    // Scroll indicator animation
    gsap.to('.scroll-line', {
        scaleY: 0.3,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut'
    });

    // Section animations
    gsap.utils.toArray('section').forEach(section => {
        gsap.from(section, {
            opacity: 0,
            y: 50,
            duration: 1,
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                end: 'top 20%',
                toggleActions: 'play none none reverse'
            }
        });
    });

    // Project card animations
    const projectCards = document.querySelectorAll('.featured-card');
    projectCards.forEach(card => {
        const image = card.querySelector('img');
        const title = card.querySelector('h3');
        const description = card.querySelector('p');
        const techStack = card.querySelector('.tech-stack');
        const viewProject = card.querySelector('.view-project');

        // Initial animation on scroll
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top bottom-=100',
                end: 'top center',
                toggleActions: 'play none none reverse'
            },
            y: 100,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        });

        // Hover animations
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                y: -10,
                scale: 1.02,
                duration: 0.4,
                ease: 'power2.out'
            });
            
            gsap.to(image, {
                scale: 1.1,
                duration: 0.4,
                ease: 'power2.out'
            });

            gsap.to(title, {
                y: -5,
                duration: 0.3,
                ease: 'power2.out'
            });

            gsap.to(description, {
                y: -3,
                opacity: 0.8,
                duration: 0.3,
                delay: 0.1,
                ease: 'power2.out'
            });

            gsap.to(techStack.children, {
                y: -3,
                opacity: 1,
                duration: 0.3,
                stagger: 0.05,
                ease: 'power2.out'
            });

            gsap.to(viewProject, {
                x: 5,
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                y: 0,
                scale: 1,
                duration: 0.4,
                ease: 'power2.out'
            });
            
            gsap.to(image, {
                scale: 1,
                duration: 0.4,
                ease: 'power2.out'
            });

            gsap.to(title, {
                y: 0,
                duration: 0.3,
                ease: 'power2.out'
            });

            gsap.to(description, {
                y: 0,
                opacity: 1,
                duration: 0.3,
                ease: 'power2.out'
            });

            gsap.to(techStack.children, {
                y: 0,
                opacity: 0.7,
                duration: 0.3,
                stagger: 0.05,
                ease: 'power2.out'
            });

            gsap.to(viewProject, {
                x: 0,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });

    // Skills list animation
    const skillItems = document.querySelectorAll('.skill-category li');
    skillItems.forEach((item, index) => {
        gsap.from(item, {
            x: -50,
            opacity: 0,
            duration: 0.5,
            scrollTrigger: {
                trigger: item,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            delay: index * 0.1
        });
    });

    // Smooth scroll for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            gsap.to(window, {
                duration: 1,
                scrollTo: {
                    y: target,
                    offsetY: 80
                },
                ease: 'power3.inOut'
            });
        });
    });
}

function initContactAnimations() {
    // Header animations
    gsap.from('.contact-header', {
        scrollTrigger: {
            trigger: '.contact-header',
            start: 'top 80%',
        },
        y: 30,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    });

    // Contact info items animation with typing effect
    const typewriteElements = document.querySelectorAll('.typewrite');
    typewriteElements.forEach(element => {
        const text = element.textContent;
        element.textContent = '';
        let i = 0;
        
        gsap.from(element.parentElement, {
            scrollTrigger: {
                trigger: element.parentElement,
                start: 'top 80%',
            },
            opacity: 0,
            duration: 0.5,
            onComplete: () => {
                const typing = setInterval(() => {
                    if (i < text.length) {
                        element.textContent += text.charAt(i);
                        i++;
                    } else {
                        clearInterval(typing);
                        element.classList.add('typed');
                    }
                }, 50);
            }
        });
    });

    // Social icons animation with stagger
    gsap.from('.social-icon', {
        scrollTrigger: {
            trigger: '.social-links',
            start: 'top 80%',
        },
        scale: 0,
        rotation: 180,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'back.out(1.7)'
    });

    // Form animation
    gsap.from('.contact-form', {
        scrollTrigger: {
            trigger: '.contact-right',
            start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    });

    // Form elements animation
    gsap.from('.form-group', {
        scrollTrigger: {
            trigger: '.contact-form',
            start: 'top 80%',
        },
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
        delay: 0.4
    });
}

// Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const menuOverlay = document.querySelector('.menu-overlay');
const menuLinks = document.querySelectorAll('.menu-link');

menuToggle.addEventListener('click', () => {
    menuOverlay.classList.toggle('active');
    
    if (menuOverlay.classList.contains('active')) {
        gsap.from(menuLinks, {
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power3.out'
        });
    }
});

// Close menu when clicking a link
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuOverlay.classList.remove('active');
    });
});

// Add form submission handling
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Add your form submission logic here
            console.log('Form submitted');
        });
    }
    
    initPageAnimations();
    initContactAnimations();
});
