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
      <Grid container spacing={2} sx={{ mt: 3 }}>
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
            name={"password"}
            label={"Contraseña"}
            inputProps={{ type: "password" }}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            type={"submit"}
            color="primary"
            variant="contained"
            onClick={onsubmitForm}
            fullWidth
          >
            Enviar
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
          <Grid item xs={12}>
            <Typography noWrap>
              <Link href="#">{"¿Olvidaste tu contraseña"}</Link>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography noWrap>
              {"¿No tienes cuenta? "}
              <Link href="#">{"Registrate"}</Link>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </FormProvider>
  );
}

export default LoginForm;
