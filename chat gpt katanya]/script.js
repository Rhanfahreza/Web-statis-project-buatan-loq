document.addEventListener("DOMContentLoaded", () => {
  // Toggle Dark Mode
  const toggle = document.getElementById("darkmode");
  const body = document.body;

  if (toggle) {
    toggle.addEventListener("change", function () {
      body.classList.toggle("darkmode", toggle.checked);
    });
  }

  // Toggle Menu (Hamburger)
  const menuButton = document.getElementById("menuBtn");
  const menuLinks = document.getElementById("myLinks");

  if (menuButton && menuLinks) {
    menuButton.addEventListener("click", () => {
      menuLinks.classList.toggle("active");
    });
  }
});
