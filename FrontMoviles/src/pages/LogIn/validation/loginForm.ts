import { z } from "zod";

export { loginSchema, loginDefaultValues };
export type { LoginSchemaType };

const loginSchema = z.object({
  email: z.string().email("Correo no válido"),
  password: z.string().min(1, "La contraseña es requerida"),
});

type LoginSchemaType = z.infer<typeof loginSchema>;

interface LoginDefaultValues {
  email: string;
  password: string;
}

const loginDefaultValues: LoginDefaultValues = {
  email: "",
  password: "",
};
