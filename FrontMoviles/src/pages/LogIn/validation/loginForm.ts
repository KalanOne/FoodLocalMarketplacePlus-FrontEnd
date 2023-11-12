import { z } from "zod";

export { loginSchema, loginDefaultValues };
export type { LoginSchemaType };

const loginSchema = z.object({
  name: z.string().min(1, "El nombre es requerido"),
  password: z.string().min(1, "La contraseña es requerida"),
});

type LoginSchemaType = z.infer<typeof loginSchema>;

interface LoginDefaultValues {
  name: string;
  password: string;
}

const loginDefaultValues: LoginDefaultValues = {
  name: "",
  password: "",
};
