import { z } from "zod";

export { crearProductoSchema, crearProductoDefaultValues };
export type { CrearProductoSchemaType };

const crearProductoSchema = z.object({
  nombre: z
    .string()
    .min(1, "Nombre es requerido")
    .max(64, "El nombre es muy largo"),
  descripcion: z
    .string()
    .min(1, "La descripcion es requerida")
    .max(256, "La descripcion es muy larga"),
  precio: z.coerce
    .number()
    .gte(1, "El precio es requerido")
    .lte(10000000, "El precio es muy alto"),
  categoriaProducto: z.coerce.number().min(1, "La categoria es requerida"),
  tipo: z.string().min(1, "El tipo es requerido"),
  image: z.any(),
});

type CrearProductoSchemaType = z.infer<typeof crearProductoSchema>;

interface CrearProductoDefaultValues {
  nombre: string;
  descripcion: string;
  precio: number;
  categoriaProducto: number;
  tipo: string;
  image: File | null;
}

const crearProductoDefaultValues: CrearProductoDefaultValues = {
  nombre: "",
  descripcion: "",
  precio: 0,
  categoriaProducto: 0,
  tipo: "",
  image: null,
};
