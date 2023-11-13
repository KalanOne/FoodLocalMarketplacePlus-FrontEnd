import React from "react";
import { FormProvider, UseFormReturn } from "react-hook-form";
import { FormTextInput } from "../../../components/form/FormTextInput";
import { Button, Grid } from "@mui/material";
import { RegisterSchemaType } from "../validation/registerForm";

interface RegisterFormProps {
  form: UseFormReturn<RegisterSchemaType>;
  onsubmitForm: () => void;
}

function RegisterForm({
  form,
  onsubmitForm,
}: RegisterFormProps): React.ReactElement {
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
            name={"username"}
            label={"Nombre de Usuario"}
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
            name={"cellphone"}
            label={"Teléfono"}
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
