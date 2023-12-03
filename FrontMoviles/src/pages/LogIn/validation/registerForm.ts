import { z } from "zod";

export { registerSchema, registerDefaultValues };
export type { RegisterSchemaType };

const esNumero = (value: any) => /^[+-]?\d+(\.\d+)?$/.test(value);
const estaEnRangoLatitud = (value: any) =>
  -90 <= parseFloat(value) && parseFloat(value) <= 90;
const estaEnRangoLongitud = (value: any) =>
  -180 <= parseFloat(value) && parseFloat(value) <= 180;

const registerSchema = z.object({
  email: z.string().email("Correo no válido"),
  name: z.string().min(1, "El nombre es requerido"),
  type: z.string().min(1, "El tipo de usuario es requerido"),
  category: z.coerce.number().gte(1, "La categoría es requerida"),
  cellphone: z.string().min(1, "El número de celular es requerido"),
  address: z.string().min(1, "La dirección es requerida"),
  city: z.string().min(1, "La ciudad es requerida"),
  cp: z.string().refine((value) => /^\d{5}$/.test(value), {
    message:
      "El código postal debe contener solo números y tener una longitud de 5 caracteres",
  }),
  state: z.string().min(1, "El estado es requerido"),
  country: z.string().min(1, "El país es requerido"),
  latitud: z
    .string()
    .refine(esNumero, {
      message: "La latitud debe ser un número válido",
    })
    .refine(estaEnRangoLatitud, {
      message: "La latitud debe estar en el rango de -90 a 90 grados",
    }),
  longitud: z
    .string()
    .refine(esNumero, {
      message: "La longitud debe ser un número válido",
    })
    .refine(estaEnRangoLongitud, {
      message: "La longitud debe estar en el rango de -180 a 180 grados",
    }),
  image: z.any(),
  password: z
    .string()
    .refine((value) => value.length >= 10, {
      message: "La contraseña debe tener al menos 10 caracteres.",
    })
    .refine((value) => /[A-Z].*[A-Z]/.test(value), {
      message: "La contraseña debe tener al menos dos letras mayúsculas.",
    })
    .refine((value) => /[a-z].*[a-z]/.test(value), {
      message: "La contraseña debe tener al menos dos letras minúsculas.",
    })
    .refine(
      (value) => {
        const digitMatches = value.match(/\d/g);
        if (!digitMatches || digitMatches.length < 3) {
          return false;
        }

        const consecutiveDigits = digitMatches.some((digit, index) => {
          const nextDigit = digitMatches[index + 1];
          return nextDigit && parseInt(digit) + 1 === parseInt(nextDigit);
        });

        return !consecutiveDigits;
      },
      {
        message:
          "La contraseña debe tener al menos tres dígitos no consecutivos.",
      }
    )
    .refine((value) => /[!@#$%^&*(),.?":{}|<>]/.test(value), {
      message: "La contraseña debe tener al menos un caracter especial.",
    }),
});

type RegisterSchemaType = z.infer<typeof registerSchema>;

interface RegisterDefaultValues {
  email: string;
  name: string;
  type: string;
  category: number;
  cellphone: string;
  address: string;
  city: string;
  cp: string;
  state: string;
  country: string;
  latitud: string;
  longitud: string;
  password: string;
  image: File | null;
}

const registerDefaultValues: RegisterDefaultValues = {
  email: "",
  name: "",
  type: "",
  category: 0,
  cellphone: "",
  address: "",
  city: "",
  cp: "",
  state: "",
  country: "",
  latitud: "",
  longitud: "",
  password: "",
  image: null,
};
