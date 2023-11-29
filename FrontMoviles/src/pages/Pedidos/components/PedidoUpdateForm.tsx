import React from "react";
import { ActualizarEstadoSchemaType } from "../validation/updateEstado";
import { FormProvider, UseFormReturn } from "react-hook-form";
import { Grid, MenuItem } from "@mui/material";
import { FormSelectInput } from "../../../components/form/FormSelectInput";

interface PedidoUpdateFormProps {
  form: UseFormReturn<ActualizarEstadoSchemaType>;
}

function PedidoUpdateForm({ form }: PedidoUpdateFormProps): React.ReactElement {
  return (
    <FormProvider {...form}>
      <Grid container spacing={2} sx={{ paddingTop: 2 }}>
        <Grid item xs={12}>
          <FormSelectInput name={"estado"} label={"Estado"} required={true}>
            <MenuItem value="pedidoRealizado">{"Pedido Realizado"}</MenuItem>
            <MenuItem value="enviado">{"Enviado"}</MenuItem>
            <MenuItem value="enReparto">{"En Reparto"}</MenuItem>
            <MenuItem value="entregado">{"Entregado"}</MenuItem>
          </FormSelectInput>
        </Grid>
      </Grid>
    </FormProvider>
  );
}

export default PedidoUpdateForm;
