import type { Product } from "../types/product";
export const categorias = ["Hamburguesas", "Pizzas", "Bebidas"];
export const productos: Product[] = [
    {
        id: "1",
        nombre: "Hamburguesa Triple",
        descripcion: "Triple carne, cheddar, tomate, lechuga, pepino y bacon",
        precio: 25000,
        imagen: "/src/resources/hamburguesa-triple.jpg",
        categoria: "Hamburguesas",
    },
    {
        id: "2",
        nombre: "Pizza Muzzarella",
        descripcion: "Salsa casera y orégano",
        precio: 18000,
        imagen: "/src/resources/pizza-muzzarella.jpg",
        categoria: "Pizzas",
    },
    {
        id: "3",
        nombre: "Agua Mineral 1.5L",
        descripcion: "Agua mineral sin gas",
        precio: 2500,
        imagen: "/src/resources/agua-villavicencio-1.5l.jpg",
        categoria: "Bebidas",
    },
    {
        id: "4",
        nombre: "Coca Cola 1.5L",
        descripcion: "Gaseosa sabor cola",
        precio: 3500,
        imagen: "/src/resources/coca-cola-1.5l.jpg",
        categoria: "Bebidas",
    },
    {
        id: "5",
        nombre: "Hamburguesa Simple",
        descripcion: "Carne, lechuga, tomate y queso",
        precio: 15000,
        imagen: "/src/resources/hamburguesa-simple.jpg",
        categoria: "Hamburguesas",
    },
    {
        id: "6",
        nombre: "Pizza Napolitana",
        descripcion: "Muzzarella, rodajas de tomate y ajo",
        precio: 20000,
        imagen: "/src/resources/pizza-napolitana.jpg",
        categoria: "Pizzas",
    },
];

export function getCategories(): string[] {
    return [...new Set(productos.map((p) => p.categoria))];
}
