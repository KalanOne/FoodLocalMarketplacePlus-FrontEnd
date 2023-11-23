import React from "react";
import { FormProvider, UseFormReturn } from "react-hook-form";
import { FormTextInput } from "../../../components/form/FormTextInput";
import { Button, Grid, Link, MenuItem, Typography } from "@mui/material";
import { FormSelectInput } from "../../../components/form/FormSelectInput";
import { CategoriaProducto } from "../types/productosTypes";
import { ActualizarProductoSchemaType } from "../validation/updateProducto";

interface ActualizarProductoFormProps {
  form: UseFormReturn<ActualizarProductoSchemaType>;
  categorias: CategoriaProducto[];
}

function ActualizarProductoForm({
  form,
  categorias,
}: ActualizarProductoFormProps): React.ReactElement {
  return (
    <FormProvider {...form}>
      <Grid container spacing={2} sx={{ paddingTop: 2 }}>
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
            inputProps={{ type: "number" }}
          />
        </Grid>
        <Grid item xs={12}>
          <FormSelectInput
            name={"categoriaProducto"}
            label={"Categoria"}
            required={true}
          >
            {categorias.map((categoria) => (
              <MenuItem key={categoria.id} value={categoria.id}>
                {categoria.nombre}
              </MenuItem>
            ))}
          </FormSelectInput>
        </Grid>
        <Grid item xs={12}>
          <FormSelectInput name={"tipo"} label={"Tipo"} required={true}>
            <MenuItem value="producto">{"Producto"}</MenuItem>
            <MenuItem value="platillo">{"Platillo"}</MenuItem>
          </FormSelectInput>
        </Grid>
      </Grid>
    </FormProvider>
  );
}

export default ActualizarProductoForm;
