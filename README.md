# Food Store - Programación III

## 📌 Descripción

Este proyecto corresponde al **Primer Parcial de Programación III** de la Tecnicatura Universitaria en Programación a Distancia (UTN).  
El objetivo es extender la aplicación **Food Store** hacia un frontend más dinámico e interactivo utilizando **HTML, CSS, JavaScript y TypeScript**, sin frameworks.

La aplicación permite:

- Visualizar un catálogo de productos.
- Buscar productos por nombre.
- Filtrar productos por categoría.
- Agregar productos a un carrito con persistencia en `localStorage`.
- Visualizar el carrito con nombre, precio, cantidad y total acumulado.

---

## 📂 Estructura del proyecto

src/
└── pages/
└── store/
├── home/
├── home.html # Catálogo de productos
└── home.ts # Lógica: render, búsqueda, filtros, agregar al carrito
├── cart/
├── cart.html # Vista del carrito
└── cart.ts # Lógica: render, cantidades, total
└── types/
├── product.ts # Interfaces Product y CartItem
└── categoria.ts # Interface ICategoria
└── data/
└── data.ts # Lista de productos y función getCategories()
vite.config.ts

El proyecto está configurado con pnpm. Si no lo tenés instalado:
npm install -g pnpm

Luego:
pnpm install

Luego para levantar el entorno de desarrollo y poder ver los cambios reflejados:
pnpm run dev
El servidor estará disponible en:
http://localhost:5173

LINK DEL VIDEO DE EXPLICACION:

Repositorio de referencia:
