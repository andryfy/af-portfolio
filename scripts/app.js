// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Navbar background change on scroll
window.addEventListener("scroll", function () {
  const navbar = document.querySelector("nav");
  if (window.scrollY > 50) {
    navbar.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
  }
});

// Mobile menu close on link click
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function () {
    const mobileMenu = document.querySelector("[x-data]");
    if (mobileMenu) {
      mobileMenu.__x.$data.open = false;
    }
  });
});

// Form submission handling
const contactForm = document.querySelector("form");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    // Here you would typically send the form data to a server
    alert("Thank you for your message! I will get back to you soon.");
    contactForm.reset();
  });
}

// Typing animation reset
const typingElement = document.querySelector(".typing-animation");
if (typingElement) {
  setInterval(() => {
    typingElement.style.animation = "none";
    void typingElement.offsetWidth; // Trigger reflow
    typingElement.style.animation =
      "typing 3s steps(40, end), blink-caret 0.75s step-end infinite";
  }, 3000);
}
