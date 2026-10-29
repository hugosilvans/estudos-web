/* Nexus Games — interações da página inicial */
(function () {
  "use strict";

  const currency = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });
  const storageKey = "nexusGamesCart";
  let cart = [];

  try {
    cart = JSON.parse(localStorage.getItem(storageKey)) || [];
  } catch (error) {
    cart = [];
  }

  function saveCart() {
    localStorage.setItem(storageKey, JSON.stringify(cart));
  }

  function showToast(message, success = true) {
    const icon = document.querySelector("#feedbackToast .toast-header i");
    document.getElementById("toastMessage").textContent = message;
    icon.className = success ? "bi bi-check-circle-fill text-success me-2" : "bi bi-info-circle-fill text-primary me-2";
    bootstrap.Toast.getOrCreateInstance(document.getElementById("feedbackToast"), { delay: 2600 }).show();
  }

  function renderCart() {
    const count = cart.length;
    const countElement = document.getElementById("cartCount");
    const itemsElement = document.getElementById("cartItems");
    const emptyElement = document.getElementById("cartEmpty");
    const summaryElement = document.getElementById("cartSummary");
    const totalElement = document.getElementById("cartTotal");

    countElement.textContent = String(count);
    countElement.setAttribute("aria-label", `${count} ${count === 1 ? "produto" : "produtos"} no carrinho`);
    itemsElement.replaceChildren();

    if (!count) {
      emptyElement.classList.remove("d-none");
      summaryElement.classList.add("d-none");
      return;
    }

    emptyElement.classList.add("d-none");
    summaryElement.classList.remove("d-none");

    cart.forEach((item, index) => {
      const row = document.createElement("div");
      row.className = "cart-item";
      row.innerHTML = `
        <span class="cart-item-icon"><i class="bi bi-controller" aria-hidden="true"></i></span>
        <div><h3></h3><p></p></div>
        <button class="remove-item" type="button" data-index="${index}" aria-label="Remover produto"><i class="bi bi-trash3"></i></button>`;
      row.querySelector("h3").textContent = item.name;
      row.querySelector("p").textContent = currency.format(item.price);
      row.querySelector(".remove-item").setAttribute("aria-label", `Remover ${item.name}`);
      itemsElement.appendChild(row);
    });

    const total = cart.reduce((sum, item) => sum + item.price, 0);
    totalElement.textContent = currency.format(total);
  }

  function filterProducts() {
    const search = $("#searchInput").val().toString().trim().toLowerCase();
    const category = $(".category-filter.active").data("filter") || "todos";
    let visible = 0;

    $(".product-item").each(function () {
      const itemName = $(this).data("name").toString();
      const itemCategory = $(this).data("category").toString();
      const matchesSearch = !search || itemName.includes(search) || itemCategory.includes(search);
      const matchesCategory = category === "todos" || itemCategory === category;
      const shouldShow = matchesSearch && matchesCategory;
      $(this).toggleClass("d-none", !shouldShow);
      if (shouldShow) visible += 1;
    });

    $("#resultsLabel").text(`${visible} ${visible === 1 ? "produto encontrado" : "produtos encontrados"}`);
    $("#emptyResults").toggleClass("d-none", visible !== 0);
  }

  $(function () {
    renderCart();
    $(".current-year").text(new Date().getFullYear());

    $(".add-to-cart").on("click", function () {
      const card = $(this).closest(".product-card");
      const name = card.find("h3").text().trim();
      const price = Number(card.find(".product-price").data("price"));
      cart.push({ name, price });
      saveCart();
      renderCart();
      showToast(`${name} foi adicionado ao carrinho.`);
    });

    $(document).on("click", ".remove-item", function () {
      const index = Number($(this).data("index"));
      const removed = cart.splice(index, 1)[0];
      saveCart();
      renderCart();
      showToast(`${removed.name} foi removido.`, false);
    });

    $("#clearCart").on("click", function () {
      cart = [];
      saveCart();
      renderCart();
      showToast("O carrinho foi esvaziado.", false);
    });

    $("#checkoutButton").on("click", function () {
      showToast("Compra demonstrativa: revise os itens antes de continuar.", false);
    });

    $(".category-filter").on("click", function () {
      const filter = $(this).data("filter");
      $(".category-filter").removeClass("active");
      $(`.category-filter[data-filter="${filter}"]`).addClass("active");
      filterProducts();
      document.getElementById("destaques").scrollIntoView({ behavior: "smooth", block: "start" });
    });

    $("#searchInput").on("input", filterProducts);
    $("#searchForm").on("submit", function (event) {
      event.preventDefault();
      filterProducts();
      document.getElementById("destaques").scrollIntoView({ behavior: "smooth", block: "start" });
    });

    $(".nexus-navbar .nav-link").on("click", function () {
      $(".nexus-navbar .nav-link").removeClass("active");
      $(this).addClass("active");
      const collapse = bootstrap.Collapse.getInstance(document.getElementById("menuPrincipal"));
      if (collapse) collapse.hide();
    });
  });
}());
