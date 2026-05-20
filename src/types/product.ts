export interface Product {
    id: string;
    nombre: string;
    descripcion: string;
    precio: number;
    imagen: string;
    categoria: string;
}

export interface CartItem extends Product {
    quantity: number;
}
