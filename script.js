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

// Form submission handler (basic example)
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Obrigado pela mensagem! Entraremos em contacto em breve.");
  // Here you could add code to send the form data to a server
});

// Dark/Light Mode Toggle
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  themeToggle.textContent = body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  body.classList.add(currentTheme);
  themeToggle.textContent = currentTheme === "dark-mode" ? "☀️" : "🌙";
}

// Save theme preference
themeToggle.addEventListener("click", () => {
  const theme = body.classList.contains("dark-mode") ? "dark-mode" : "";
  localStorage.setItem("theme", theme);
});
