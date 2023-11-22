import { z } from "zod";

export { crearProductoSchema, crearProductoDefaultValues };
export type { CrearProductoSchemaType };

const crearProductoSchema = z.object({
  nombre: z.string().min(1, "Nombre es requerido"),
  descripcion: z.string().min(1, "La descripcion es requerida"),
  precio: z.coerce.number().gte(1, "El precio es requerido"),
  categoriaProducto: z.coerce.number().min(1, "La categoria es requerida"),
  tipo: z.string().min(1, "El tipo es requerido"),
  // imagen: z.any(),
});

type CrearProductoSchemaType = z.infer<typeof crearProductoSchema>;

interface CrearProductoDefaultValues {
  nombre: string;
  descripcion: string;
  precio: number;
  categoriaProducto: number;
  tipo: string;
  // imagen: File | null;
}

const crearProductoDefaultValues: CrearProductoDefaultValues = {
  nombre: "",
  descripcion: "",
  precio: 0,
  categoriaProducto: 0,
  tipo: "",
  // imagen: null,
};
