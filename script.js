


document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".main-menu");

    menuToggle.addEventListener("click", function() {
        menu.classList.toggle("active"); // Affiche/Cache le menu
    });
});