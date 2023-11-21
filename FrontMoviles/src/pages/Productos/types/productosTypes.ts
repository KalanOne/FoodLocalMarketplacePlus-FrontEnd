export type { CrearProducto };

interface CrearProducto {
  nombre: string;
  descripcion: string;
  precio: number;
  tipo: string;
  imagen: string;
  idCategoria: number;
}
