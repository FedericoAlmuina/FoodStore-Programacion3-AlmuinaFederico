import type { CartItem } from "../../../types/product";

const cartList = document.getElementById("cartList")!;
const totalElement = document.getElementById("total")!;

const getCart = (): CartItem[] =>
    JSON.parse(localStorage.getItem("cart") || "[]");

const saveCart = (cart: CartItem[]): void =>
    localStorage.setItem("cart", JSON.stringify(cart));

const removeFromCart = (productId: string): void => {
    const newCart = getCart().filter((item) => item.id !== productId);
    saveCart(newCart);
    renderCart();
};

const renderCart = (): void => {
    const cart = getCart();
    cartList.innerHTML = "";

    if (cart.length === 0) {
        cartList.innerHTML = "<p>El carrito está vacío</p>";
        totalElement.textContent = "0";
        return;
    }

    let total = 0;

    cart.forEach((item) => {
        const row = document.createElement("div");
        row.style.cssText = "padding:10px;margin:10px 0;border-radius:8px";

        row.innerHTML = `
            <h3>${item.nombre}</h3>
            <p>Precio: $${item.precio}</p>
            <p>Cantidad: ${item.quantity}</p>
            <p>Subtotal: $${(item.precio * item.quantity).toFixed(2)}</p>
            <button class="remove-btn" data-id="${item.id}" style="background-color:#ff2600;color:white;border:none;padding:5px 10px;border-radius:5px;cursor:pointer">
                Eliminar
            </button>
        `;

        cartList.appendChild(row);
        total += item.precio * item.quantity;
    });

    totalElement.textContent = `${total.toFixed(2)}`;

    document.querySelectorAll(".remove-btn").forEach((btn) => {
        btn.addEventListener("click", (e) => {
            const id = (e.target as HTMLButtonElement).getAttribute("data-id");
            if (id) removeFromCart(id);
        });
    });
};

renderCart();
