//  animação da navbar menu
let navbarMenuOn = false;

document.querySelector(".navbar i").addEventListener("click", () => {
    if (navbarMenuOn == false) {
        document.querySelector(".navbar-menu").style.transition =
            "all .3s ease-out";

        document.querySelector(".navbar-menu").style.top = `${
            document.querySelector(".navbar").clientHeight
        }px`;

        navbarMenuOn = true;
    } else if (navbarMenuOn == true) {
        document.querySelector(".navbar-menu").style.transition =
            "all .3s ease-in";

        document.querySelector(".navbar-menu").style.top = "-100%";

        navbarMenuOn = false;
    }
});

// animação do switch de modo claro/escuro
// 1. mudar para modo escuro
document
    .querySelector(".scheme-switch ul li:last-child")
    .addEventListener("click", () => {
        document.querySelector(".switch-select").style.transform =
            "translateX(45%)";
    });

// 2. mudar para modo claro
document
    .querySelector(".scheme-switch ul li:first-child")
    .addEventListener("click", () => {
        document.querySelector(".switch-select").style.transform =
            "translateX(-45%)";
    });
