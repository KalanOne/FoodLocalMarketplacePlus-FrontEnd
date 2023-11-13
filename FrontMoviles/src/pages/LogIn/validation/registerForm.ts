import { z } from "zod";

export { registerSchema, registerDefaultValues };
export type { RegisterSchemaType };

const registerSchema = z.object({
  name: z.string().min(1, "El nombre es requerido"),
  username: z.string().min(1, "El nombre de usuario es requerido"),
  email: z.string().email("Correo no válido"),
  cellphone: z.string().refine((value) => /^\d{10}$/.test(value), {
    message: "El número de celular debe tener 10 dígitos",
  }),
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
        message: "La contraseña debe tener al menos tres dígitos no consecutivos.",
      }
    )
    .refine((value) => /[!@#$%^&*(),.?":{}|<>]/.test(value), {
      message: "La contraseña debe tener al menos un caracter especial.",
    }),
});

type RegisterSchemaType = z.infer<typeof registerSchema>;

interface RegisterDefaultValues {
  name: string;
  username: string;
  password: string;
  email: string;
  cellphone: string;
}

const registerDefaultValues: RegisterDefaultValues = {
  name: "",
  username: "",
  password: "",
  email: "",
  cellphone: "",
};
