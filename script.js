// Pesquisa de produtos

const produtos = document.querySelectorAll(".product");

const pesquisa = document.createElement("input");

pesquisa.type = "text";
pesquisa.placeholder = "🔎 Pesquisar ofertas...";
pesquisa.className = "search";

document.querySelector("#ofertas").prepend(pesquisa);

pesquisa.addEventListener("input", function () {

  const texto = pesquisa.value.toLowerCase();

  produtos.forEach(function (produto) {

    const nome = produto
      .querySelector("h3")
      .textContent
      .toLowerCase();

    if (nome.includes(texto)) {
      produto.style.display = "";
    } else {
      produto.style.display = "none";
    }

  });

});
