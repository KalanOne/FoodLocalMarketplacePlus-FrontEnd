import { z } from "zod";

export { imageProveedorSchema, imageProveedorDefaultValues };
export type { ImageProveedorSchemaType };
const imageProveedorSchema = z.object({
  image: z.any(),
});

type ImageProveedorSchemaType = z.infer<typeof imageProveedorSchema>;

interface ImageProveedorDefaultValues {
  image: File | null;
}

const imageProveedorDefaultValues: ImageProveedorDefaultValues = {
  image: null,
};
