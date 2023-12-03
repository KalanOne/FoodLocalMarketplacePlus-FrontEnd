import React from "react";
import { ImageProveedorSchemaType } from "../validation/imagenProveedor";
import { FormProvider, UseFormReturn } from "react-hook-form";
import { Grid } from "@mui/material";
import FormFileInput from "../../../components/form/FormFileInput";

interface PerfilImageFormProps {
  form: UseFormReturn<ImageProveedorSchemaType>;
}

function PerfilImageForm({ form }: PerfilImageFormProps): React.ReactElement {
  return (
    <FormProvider {...form}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <FormFileInput name={"image"} placeholder={"Actualizar Imagen"} />
        </Grid>
      </Grid>
    </FormProvider>
  );
}

export default PerfilImageForm;
