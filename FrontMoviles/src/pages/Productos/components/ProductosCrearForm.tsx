import React from "react";
import { FormProvider, UseFormReturn } from "react-hook-form";
import { FormTextInput } from "../../../components/form/FormTextInput";
import { Button, Grid, Link, Typography } from "@mui/material";
import { CrearProductoSchemaType } from "../validation/crearProductos";

interface CrearProductoFormProps {
  form: UseFormReturn<CrearProductoSchemaType>;
}

function CrearProductoForm({
  form,
}: CrearProductoFormProps): React.ReactElement {
  return (
    <FormProvider {...form}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <FormTextInput
            sx={{ width: "100%" }}
            name={"nombre"}
            label={"Nombre del Producto"}
          />
        </Grid>
        <Grid item xs={12}>
          <FormTextInput
            sx={{ width: "100%" }}
            name={"descripcion"}
            label={"Descripcion"}
          />
        </Grid>
        <Grid item xs={12}>
          <FormTextInput
            sx={{ width: "100%" }}
            name={"precio"}
            label={"Precio"}
          />
        </Grid>
        <Grid item xs={12}>
          <FormTextInput sx={{ width: "100%" }} name={"tipo"} label={"Tipo"} />
        </Grid>
      </Grid>
    </FormProvider>
  );
}

export default CrearProductoForm;
