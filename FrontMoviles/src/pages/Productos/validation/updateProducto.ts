import { z } from "zod";

export { actualizarProductoSchema, actualizarProductoDefaultValues };
export type { ActualizarProductoSchemaType };

const actualizarProductoSchema = z.object({
  nombre: z.string().min(1, "Nombre es requerido"),
  descripcion: z.string().min(1, "La descripcion es requerida"),
  precio: z.coerce.number().gte(1, "El precio es requerido"),
  categoriaProducto: z.coerce.number().min(1, "La categoria es requerida"),
  tipo: z.string().min(1, "El tipo es requerido"),
});

type ActualizarProductoSchemaType = z.infer<typeof actualizarProductoSchema>;

interface ActualizarProductoDefaultValues {
  nombre: string;
  descripcion: string;
  precio: number;
  categoriaProducto: number;
  tipo: string;
}

const actualizarProductoDefaultValues: ActualizarProductoDefaultValues = {
  nombre: "",
  descripcion: "",
  precio: 0,
  categoriaProducto: 0,
  tipo: "",
};
