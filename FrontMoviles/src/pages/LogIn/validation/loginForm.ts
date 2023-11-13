import { z } from "zod";

export { loginSchema, loginDefaultValues };
export type { LoginSchemaType };

const loginSchema = z.object({
  username: z.string().min(1, "El nombre es requerido"),
  password: z.string().min(1, "La contraseña es requerida"),
});

type LoginSchemaType = z.infer<typeof loginSchema>;

interface LoginDefaultValues {
  username: string;
  password: string;
}

const loginDefaultValues: LoginDefaultValues = {
  username: "",
  password: "",
};
