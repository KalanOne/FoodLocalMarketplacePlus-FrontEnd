import React from "react";
import { FormProvider, UseFormReturn } from "react-hook-form";
import { FormTextInput } from "../../../components/form/FormTextInput";
import { Button, Grid } from "@mui/material";
import { ActualizarProveedorSchemaType } from "../validation/actualizarProveedor";

interface PerfilUpdateFormProps {
  form: UseFormReturn<ActualizarProveedorSchemaType>;
  onsubmitForm: () => void;
}

function PerfilUpdateForm({
  form,
  onsubmitForm,
}: PerfilUpdateFormProps): React.ReactElement {
  return (
    <FormProvider {...form}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <FormTextInput
            sx={{ width: "100%" }}
            name={"name"}
            label={"Nombre"}
          />
        </Grid>
        <Grid item xs={12}>
          <FormTextInput
            sx={{ width: "100%" }}
            name={"cellphone"}
            label={"Teléfono"}
          />
        </Grid>
        <Grid item xs={12}>
          <FormTextInput
            sx={{ width: "100%" }}
            name={"address"}
            label={"Dirección"}
          />
        </Grid>
        <Grid item xs={12}>
          <FormTextInput
            sx={{ width: "100%" }}
            name={"city"}
            label={"Ciudad"}
          />
        </Grid>
        <Grid item xs={12}>
          <FormTextInput
            sx={{ width: "100%" }}
            name={"cp"}
            label={"Código Postal"}
            inputProps={{ type: "number" }}
          />
        </Grid>
        <Grid item xs={12}>
          <FormTextInput
            sx={{ width: "100%" }}
            name={"state"}
            label={"Estado"}
          />
        </Grid>
        <Grid item xs={12}>
          <FormTextInput
            sx={{ width: "100%" }}
            name={"latitud"}
            label={"Latitud"}
            inputProps={{ type: "number" }}
          />
        </Grid>
        <Grid item xs={12}>
          <FormTextInput
            sx={{ width: "100%" }}
            name={"longitud"}
            label={"Longitud"}
            inputProps={{ type: "number" }}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            type={"submit"}
            sx={{
              backgroundColor: "#EF2F29",
              paddingY: 1.5,
              borderRadius: 10,
              "&:hover": {
                backgroundColor: "#801512",
              },
            }}
            variant="contained"
            onClick={onsubmitForm}
            fullWidth
          >
            Actualizar Datos
          </Button>
        </Grid>
      </Grid>
    </FormProvider>
  );
}

export default PerfilUpdateForm;
