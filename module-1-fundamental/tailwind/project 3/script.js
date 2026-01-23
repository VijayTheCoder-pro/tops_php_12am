// Mobile menu toggle
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  const isExpanded = mobileMenu.classList.toggle("hidden");
  menuBtn.setAttribute("aria-expanded", !isExpanded);
});

// Close mobile menu on link click
const mobileLinks = document.querySelectorAll(".mobile-link");
mobileLinks.forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
    menuBtn.setAttribute("aria-expanded", "false");
  });
});

// Smooth scrolling for nav links
const navLinks = document.querySelectorAll('a[href^="#"]');
navLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Form submission handling
const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return;
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  // Simulate form submission
  alert("Thank you for your message! We will get back to you soon.");
  contactForm.reset();
});
