// css
// navbar menu
document.querySelector(".navbar-menu").style.top = `calc(-5px - (${
    document.querySelector(".navbar-menu").clientHeight
}px - ${document.querySelector(".navbar").clientHeight}px))`;

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

        document.querySelector(".navbar-menu").style.top = `calc(-100% + ${
            document.querySelector(".navbar").clientHeight
        }px)`;

        navbarMenuOn = false;
    }
});

// animação da dashoboard
let dashboardOn = false;

document
    .querySelector(".dashboard-header button")
    .addEventListener("click", () => {
        if (dashboardOn == false) {
            document.querySelector(".dashboard-header button").innerHTML =
                "Ocultar";

            document.querySelector(".dashboard").style.transition =
                "all .2s ease-in-out";

            document.querySelector(".dashboard-data").style.transition =
                "all .2s ease-out .1s";

            document.querySelector(".dashboard").style.height = "240px";

            document.querySelector(".dashboard-data").style.opacity = "1";

            dashboardOn = true;
        } else if (dashboardOn == true) {
            document.querySelector(".dashboard-header button").innerHTML =
                "Mostrar";

            document.querySelector(".dashboard").style.transition =
                "all .2s ease-in-out .05s";

            document.querySelector(".dashboard-data").style.transition =
                "all .1s ease-in";

            document.querySelector(".dashboard").style.height = "40px";

            document.querySelector(".dashboard-data").style.opacity = "0";

            dashboardOn = false;
        }
    });
