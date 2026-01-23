// ===================================
// Smooth Scrolling for Navigation Links
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// Active Navigation Link on Scroll
// ===================================
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 100)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ===================================
// Scroll to Top Button
// ===================================
const scrollTopBtn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===================================
// Navbar Background on Scroll
// ===================================
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(31, 41, 55, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.background = 'rgba(31, 41, 55, 1)';
    }
});

// ===================================
// Typing Effect for Hero Section
// ===================================
const typingText = document.querySelector('.typing-text');
if (typingText) {
    const text = typingText.textContent;
    typingText.textContent = '';
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            typingText.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }

    // Start typing effect after page load
    setTimeout(typeWriter, 500);
}

// ===================================
// Animate Progress Bars on Scroll
// ===================================
const animateProgressBars = () => {
    const progressBars = document.querySelectorAll('.progress-bar');
    
    progressBars.forEach(bar => {
        const barPosition = bar.getBoundingClientRect().top;
        const screenPosition = window.innerHeight;
        
        if (barPosition < screenPosition) {
            const width = bar.style.width;
            bar.style.width = '0';
            setTimeout(() => {
                bar.style.width = width;
            }, 100);
        }
    });
};

// Run once on scroll
let progressAnimated = false;
window.addEventListener('scroll', () => {
    if (!progressAnimated) {
        const skillsSection = document.getElementById('skills');
        if (skillsSection) {
            const sectionPosition = skillsSection.getBoundingClientRect().top;
            const screenPosition = window.innerHeight;
            
            if (sectionPosition < screenPosition) {
                animateProgressBars();
                progressAnimated = true;
            }
        }
    }
});

// ===================================
// Contact Form Handling
// ===================================
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Basic validation
        if (name && email && subject && message) {
            // Show success message
            formMessage.innerHTML = `
                <div class="alert alert-success alert-dismissible fade show" role="alert">
                    <i class="bi bi-check-circle-fill me-2"></i>
                    <strong>Success!</strong> Your message has been sent successfully. I'll get back to you soon!
                    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                </div>
            `;
            
            // Reset form
            contactForm.reset();
            
            // In a real application, you would send this data to a server
            console.log('Form Data:', { name, email, subject, message });
            
            // Hide message after 5 seconds
            setTimeout(() => {
                formMessage.innerHTML = '';
            }, 5000);
        } else {
            // Show error message
            formMessage.innerHTML = `
                <div class="alert alert-danger alert-dismissible fade show" role="alert">
                    <i class="bi bi-exclamation-triangle-fill me-2"></i>
                    <strong>Error!</strong> Please fill in all fields.
                    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                </div>
            `;
        }
    });
}

// ===================================
// Animate Elements on Scroll
// ===================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and sections
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.project-card, .skill-category, .about-card, .contact-info, .contact-form');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
});

// ===================================
// Mobile Menu Close on Link Click
// ===================================
const navLinks = document.querySelectorAll('.nav-link');
const navbarCollapse = document.querySelector('.navbar-collapse');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navbarCollapse.classList.contains('show')) {
            const bsCollapse = new bootstrap.Collapse(navbarCollapse);
            bsCollapse.hide();
        }
    });
});

// ===================================
// Preloader (Optional)
// ===================================
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ===================================
// Dynamic Year in Footer
// ===================================
const updateYear = () => {
    const yearElements = document.querySelectorAll('.current-year');
    const currentYear = new Date().getFullYear();
    yearElements.forEach(el => {
        el.textContent = currentYear;
    });
};

updateYear();

// ===================================
// Particle Background Effect (Optional Enhancement)
// ===================================
const createParticles = () => {
    const heroSection = document.querySelector('.hero-section');
    if (!heroSection) return;

    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 5 + 2}px;
            height: ${Math.random() * 5 + 2}px;
            background: rgba(37, 99, 235, ${Math.random() * 0.5 + 0.2});
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float ${Math.random() * 10 + 5}s infinite ease-in-out;
            animation-delay: ${Math.random() * 5}s;
        `;
        heroSection.appendChild(particle);
    }
};

// Uncomment to enable particles
// createParticles();

// ===================================
// Console Message
// ===================================
console.log('%c👋 Welcome to Vijay Maniya\'s Portfolio!', 'color: #2563eb; font-size: 20px; font-weight: bold;');
console.log('%c🚀 Built with HTML, CSS, JavaScript & Bootstrap', 'color: #10b981; font-size: 14px;');
console.log('%c💼 Looking for collaboration? Let\'s connect!', 'color: #f59e0b; font-size: 14px;');

// ===================================
// Performance Optimization
// ===================================
// Lazy load images if any
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src;
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

// ===================================
// Email Protection (Simple obfuscation)
// ===================================
const protectEmail = () => {
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
    emailLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Add any email protection logic here if needed
            console.log('Email link clicked');
        });
    });
};

protectEmail();

// ===================================
// Keyboard Navigation Enhancement
// ===================================
document.addEventListener('keydown', (e) => {
    // Press 'H' to go to home
    if (e.key === 'h' || e.key === 'H') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    // Press 'C' to go to contact
    if (e.key === 'c' || e.key === 'C') {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
});

// ===================================
// Dark Mode Toggle (Optional Feature)
// ===================================
const initDarkMode = () => {
    const darkModeToggle = document.getElementById('darkModeToggle');
    if (!darkModeToggle) return;

    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);

    darkModeToggle.addEventListener('click', () => {
        const theme = document.documentElement.getAttribute('data-theme');
        const newTheme = theme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
};

// Uncomment to enable dark mode
// initDarkMode();

// ===================================
// Analytics Event Tracking (Optional)
// ===================================
const trackEvent = (category, action, label) => {
    // Add your analytics tracking code here
    console.log('Event tracked:', { category, action, label });
};

// Track button clicks
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const btnText = e.target.textContent.trim();
        trackEvent('Button', 'Click', btnText);
    });
});

// Track project views
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', (e) => {
        const projectTitle = card.querySelector('.project-title').textContent;
        trackEvent('Project', 'View', projectTitle);
    });
});
