document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.getElementById("navLinks");
  const menuToggle = document.getElementById("menuToggle");

  // Toggle menu visibility
  function toggleMenu() {
    navLinks.classList.toggle("open");
    menuToggle.classList.toggle("active");

    // Change the icon based on the menu state
    menuToggle.innerHTML = menuToggle.classList.contains("active") ? "✖" : "☰";
  }

  menuToggle.addEventListener("click", toggleMenu);

  // Close the menu when clicking a link
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.classList.remove("active");
      menuToggle.innerHTML = "☰"; // Reset to hamburger icon
    });
  });

  // Close the menu if clicking outside of it
  document.addEventListener("click", (event) => {
    if (!navLinks.contains(event.target) && event.target !== menuToggle) {
      navLinks.classList.remove("open");
      menuToggle.classList.remove("active");
      menuToggle.innerHTML = "☰";
    }
  });
});
