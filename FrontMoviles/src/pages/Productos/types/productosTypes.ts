export type {
  CrearProducto,
  CategoriaProducto,
  Producto,
  ActualizarProducto,
  ImagenProducto,
};

interface CrearProducto {
  nombre: string;
  descripcion: string;
  precio: number;
  tipo: string;
  imagen: string;
  idCategoria: number;
}

interface ActualizarProducto {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  tipo: string;
  idCategoria: number;
}

interface CategoriaProducto {
  id: number;
  nombre: string;
}

interface Producto {
  id: number;
  createdAt: string;
  updatedAt: string;
  nombre: string;
  descripcion: string;
  precio: number;
  tipo: string;
  idProveedor: string;
  idCategoria: number;
  imagen: string;
}

interface ImagenProducto {
  id: number;
  image: File | null;
}
