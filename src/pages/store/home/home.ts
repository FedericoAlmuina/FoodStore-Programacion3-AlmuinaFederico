import { productos, getCategories } from "../../../data/data";
import type { Product } from "../../../types/product";

const productList = document.getElementById("productList")!;
const searchInput = document.getElementById("searchInput") as HTMLInputElement;
const categoriesContainer = document.getElementById("categories")!;

function renderProducts(products: Product[]) {
    productList.innerHTML = "";
    if (products.length === 0) {
        productList.innerHTML = "<p>No hay coincidencias</p>";
        return;
    }
    products.forEach((p) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
      <h3>${p.nombre}</h3>
      <img class="claseimg" src=${p.imagen}>
      <p>Precio: $${p.precio}</p>
      <p>${p.descripcion}</p>
      <button class="claseboton" data-id="${p.id}">Agregar al carrito</button>
    `;
        productList.appendChild(card);
    });

    document.querySelectorAll("button[data-id]").forEach((btn) => {
        btn.addEventListener("click", (e) => {
            const id = (e.target as HTMLButtonElement).dataset.id!;
            addToCart(id);
        });
    });
}

/* function renderCategories() {
    const categories = getCategories();
    categoriesContainer.innerHTML = categories
        .map(
            (c) =>
                `<button class=" claseboton justificar-alcentro">${c}</button>`,
        )
        .join("");
    categoriesContainer.querySelectorAll("button").forEach((btn) => {
        btn.addEventListener("click", () => {
            const cat = btn.textContent!;
            renderProducts(productos.filter((p) => p.categoria === cat));
        });
    });
} */

function renderCategories() {
    const categories = getCategories();
    const categoriesWithAll = ["Todos", ...categories];

    categoriesContainer.innerHTML = categoriesWithAll
        .map(
            (c) =>
                `<button class="claseboton justificar-alcentro" data-categoria="${c}">${c}</button>`,
        )
        .join("");

    // Función para resaltar el botón activo
    const setActiveButton = (categoriaActiva: string) => {
        const allBtns = categoriesContainer.querySelectorAll("button");
        allBtns.forEach((btn) => {
            const btnCategoria = btn.getAttribute("data-categoria");
            if (btnCategoria === categoriaActiva) {
                btn.classList.add("activo"); // Agrega clase CSS para resaltar
            } else {
                btn.classList.remove("activo");
            }
        });
    };

    categoriesContainer.querySelectorAll("button").forEach((btn) => {
        btn.addEventListener("click", () => {
            const cat = btn.getAttribute("data-categoria")!;

            // Aplicar filtro
            if (cat === "Todos") {
                renderProducts(productos);
            } else {
                const productosFiltrados = productos.filter(
                    (p) => p.categoria === cat,
                );
                renderProducts(productosFiltrados);
            }

            // Resaltar botón activo
            setActiveButton(cat);
        });
    });
}

function addToCart(id: string) {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const product = productos.find((p) => p.id === id)!;
    const existing = cart.find((item: any) => item.id === id);
    if (existing) {
        existing.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Producto agregado al carrito");
}

searchInput.addEventListener("input", () => {
    const term = searchInput.value.toLowerCase();
    renderProducts(
        productos.filter((p) => p.nombre.toLowerCase().includes(term)),
    );
});

renderProducts(productos);
renderCategories();
