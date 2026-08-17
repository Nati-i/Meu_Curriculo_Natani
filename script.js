document.getElementById("btnCurriculo").addEventListener("click", function () {
    document.getElementById("inicio").style.display = "none";
    document.querySelector("header").style.display = "block";
    document.querySelector("main").style.display = "block";
    document.querySelector("footer").style.display = "block";
});

document.getElementById("btnMensagem").addEventListener("click", function () {
    alert("Olá! Obrigada por visitar meu currículo.");
});