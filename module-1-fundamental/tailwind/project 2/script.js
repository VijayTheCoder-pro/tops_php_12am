// ================= MOBILE MENU TOGGLE =================
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
});

// Close menu on link click (UX polish)
document.querySelectorAll(".mobile-link").forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
  });
});
