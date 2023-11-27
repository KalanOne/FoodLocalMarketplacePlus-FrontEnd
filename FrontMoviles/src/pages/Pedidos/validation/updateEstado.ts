import { z } from "zod";

export { actualizarEstadoSchema, actualizarEstadoDefaultValues };
export type { ActualizarEstadoSchemaType };

const actualizarEstadoSchema = z.object({
  estado: z
    .string()
    .min(1, "El estado es requerido")
    .max(50, "El estado no puede tener más de 50 caracteres"),
});

type ActualizarEstadoSchemaType = z.infer<typeof actualizarEstadoSchema>;

interface ActualizarEstadoDefaultValues {
  estado: string;
}

const actualizarEstadoDefaultValues: ActualizarEstadoDefaultValues = {
  estado: "",
};
