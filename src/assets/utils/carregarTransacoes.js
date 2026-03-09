document.addEventListener("DOMContentLoaded", () => {

  const lista = document.getElementById("lista");

  const transacoes = JSON.parse(localStorage.getItem("Transacoes")) || [];

  transacoes.forEach(t => {
    const li = document.createElement("li");
    li.textContent = `${t.descricao} - ${t.valor}`;
    lista.appendChild(li);
  });

});