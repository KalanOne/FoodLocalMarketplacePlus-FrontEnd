import { z } from "zod";

export { actualizarProveedorSchema, actualizarProveedorDefaultValues };
export type { ActualizarProveedorSchemaType };

const esNumero = (value: any) => /^[+-]?\d+(\.\d+)?$/.test(value);
const estaEnRangoLatitud = (value: any) =>
  -90 <= parseFloat(value) && parseFloat(value) <= 90;
const estaEnRangoLongitud = (value: any) =>
  -180 <= parseFloat(value) && parseFloat(value) <= 180;

const actualizarProveedorSchema = z.object({
  name: z
    .string()
    .min(1, "El nombre es requerido")
    .max(50, "El nombre no puede tener más de 50 caracteres"),
  cellphone: z
    .string()
    .min(1, "El número de celular es requerido")
    .max(10, "El número de celular no puede tener más de 10 caracteres"),
  address: z
    .string()
    .min(1, "La dirección es requerida")
    .max(100, "La dirección no puede tener más de 100 caracteres"),
  city: z
    .string()
    .min(1, "La ciudad es requerida")
    .max(50, "La ciudad no puede tener más de 50 caracteres"),
  cp: z.string().refine((value) => /^\d{5}$/.test(value), {
    message:
      "El código postal debe contener solo números y tener una longitud de 5 caracteres",
  }),
  state: z
    .string()
    .min(1, "El estado es requerido")
    .max(50, "El estado no puede tener más de 50 caracteres"),
  latitud: z.coerce
    .number()
    .refine(esNumero, {
      message: "La latitud debe ser un número válido",
    })
    .refine(estaEnRangoLatitud, {
      message: "La latitud debe estar en el rango de -90 a 90 grados",
    }),
  longitud: z.coerce
    .number()
    .refine(esNumero, {
      message: "La longitud debe ser un número válido",
    })
    .refine(estaEnRangoLongitud, {
      message: "La longitud debe estar en el rango de -180 a 180 grados",
    }),
});

type ActualizarProveedorSchemaType = z.infer<typeof actualizarProveedorSchema>;

interface ActualizarProveedorDefaultValues {
  name: string;
  cellphone: string;
  address: string;
  city: string;
  cp: string;
  state: string;
  latitud: number;
  longitud: number;
}

const actualizarProveedorDefaultValues: ActualizarProveedorDefaultValues = {
  name: "",
  cellphone: "",
  address: "",
  city: "",
  cp: "",
  state: "",
  latitud: 0,
  longitud: 0,
};
