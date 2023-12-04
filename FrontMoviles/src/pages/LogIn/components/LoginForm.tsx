import React from "react";
import { FormProvider, UseFormReturn } from "react-hook-form";
import { LoginSchemaType } from "../validation/loginForm";
import { FormTextInput } from "../../../components/form/FormTextInput";
import { Button, Grid, Link, Typography } from "@mui/material";

interface LoginFormProps {
  form: UseFormReturn<LoginSchemaType>;
  onsubmitForm: () => void;
}

function LoginForm({ form, onsubmitForm }: LoginFormProps): React.ReactElement {
  return (
    <FormProvider {...form}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <FormTextInput
            sx={{ width: "100%" }}
            name={"email"}
            label={"Correo Electrónico"}
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
            Iniciar Sesión
          </Button>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
        </Grid>
      </Grid>
    </FormProvider>
  );
}

export default LoginForm;
