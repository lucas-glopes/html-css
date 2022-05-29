// função de abrir pop up para excluir tarefa
function excluirTarefa() {
    document.querySelector(".delete-alert").style.pointerEvents = "all";

    document.querySelector(".black-background").style.opacity = ".95";

    document.querySelector(".alert").style.opacity = "1";
    document.querySelector(".alert").style.transform = "scale(1)";
}

// função para fechar o pop up de excluir tarefa
document
    .querySelector(".alert-buttons button:first-child")
    .addEventListener("click", () => {
        document.querySelector(".delete-alert").style.pointerEvents = "none";

        document.querySelector(".black-background").style.opacity = "0";

        document.querySelector(".alert").style.opacity = "0";
        document.querySelector(".alert").style.transform = "scale(.9)";
    });
