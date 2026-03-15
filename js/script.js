const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");
const menuOverlay = document.getElementById("menu-overlay");
const navLinks = document.querySelectorAll(".navbar a");

function toggleMenu() {
    menuToggle.classList.toggle("active");
    navbar.classList.toggle("active");
    menuOverlay.classList.toggle("active");

    const expanded = menuToggle.classList.contains("active");
    menuToggle.setAttribute("aria-expanded", expanded);
}

menuToggle.addEventListener("click", toggleMenu);
menuOverlay.addEventListener("click", toggleMenu);

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        if (navbar.classList.contains("active")) {
            toggleMenu();
        }
    });
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
        menuToggle.classList.remove("active");
        navbar.classList.remove("active");
        menuOverlay.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
    }
});