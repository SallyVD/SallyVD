

//menu hamburger
document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".main-menu");

    menuToggle.addEventListener("click", function() {
        menu.classList.toggle("active"); // Affiche/Cache le menu
    });
});



//Pour rediriger vers les pages
document.addEventListener("DOMContentLoaded", function () {
    // Récupère tous les boutons de navigation
    const buttons = document.querySelectorAll(".top-menu, #commander");

    // Ajoute un événement de clic à chaque bouton
    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const targetPage = this.getAttribute("data-target");
            window.location.href = targetPage; // Redirection vers la page cible
        });
    });
});

//Pour choisir les differents parties du menu
/*
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".tab-button");
    const contents = document.querySelectorAll(".content");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            // Récupère l'ID cible
            const targetId = this.getAttribute("data-target");

            // Cache toutes les div
            contents.forEach(div => div.classList.remove("active"));

            // Affiche la div cible
            document.getElementById(targetId).classList.add("active");
        });
    });
});
*/