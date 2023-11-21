import React from "react";
import { FormProvider, UseFormReturn } from "react-hook-form";
import { FormTextInput } from "../../../components/form/FormTextInput";
import { Button, Grid, MenuItem } from "@mui/material";
import { RegisterSchemaType } from "../validation/registerForm";
import { FormSelectInput } from "../../../components/form/FormSelectInput";

interface RegisterFormProps {
  form: UseFormReturn<RegisterSchemaType>;
  categorias: any[];
  onsubmitForm: () => void;
}

function RegisterForm({
  form,
  categorias,
  onsubmitForm,
}: RegisterFormProps): React.ReactElement {
  return (
    <FormProvider {...form}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <FormTextInput
            sx={{ width: "100%" }}
            name={"email"}
            label={"Correo Electrónico"}
            inputProps={{ type: "email" }}
          />
        </Grid>
        <Grid item xs={12}>
          <FormTextInput
            sx={{ width: "100%" }}
            name={"password"}
            label={"Contraseña"}
            inputProps={{ type: "password" }}
          />
        </Grid>
        <Grid item xs={12}>
          <FormSelectInput name={"type"} label={"Tipo"} required={true}>
            <MenuItem value="proveedor">{"Proveedor"}</MenuItem>
            <MenuItem value="restaurante">{"Restaurante"}</MenuItem>
          </FormSelectInput>
        </Grid>
        <Grid item xs={12}>
          <FormSelectInput
            name={"category"}
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
            name={"country"}
            label={"País"}
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
            Registrar
          </Button>
        </Grid>
      </Grid>
    </FormProvider>
  );
}

export default RegisterForm;
