document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("meuModal");
  const btnsAbrir = document.querySelectorAll(".abrirModal");
  const btnFechar = document.getElementById("fecharModal");

  btnsAbrir.forEach(btn => {
    btn.onclick = function () {
      modal.style.display = "block";
    };
  });

  if (btnFechar) {
    btnFechar.onclick = function () {
      modal.style.display = "none";
    };
  }

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
});