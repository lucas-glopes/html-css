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

            document.querySelector(".dashboard-data").style.pointerEvents =
                "all";

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

            document.querySelector(".dashboard-data").style.pointerEvents =
                "none";

            dashboardOn = false;
        }
    });

// transição da borda para quando o buscador é focado
document.querySelector(".searchbar input").addEventListener("focus", () => {
    document.querySelector(".searchbar button").style.borderColor =
        "var(--dark-gray)";
});

document.querySelector(".searchbar input").addEventListener("blur", () => {
    document.querySelector(".searchbar button").style.borderColor =
        "var(--medium-gray)";
});
