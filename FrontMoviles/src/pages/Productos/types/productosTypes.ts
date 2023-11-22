export type { CrearProducto, CategoriaProducto };

interface CrearProducto {
  nombre: string;
  descripcion: string;
  precio: number;
  tipo: string;
  imagen: string;
  idCategoria: number;
}

interface CategoriaProducto {
  id: number;
  nombre: string;
}
