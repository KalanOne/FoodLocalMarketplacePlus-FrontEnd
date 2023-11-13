import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { loginDefaultValues, loginSchema } from "../validation/loginForm";
import { zodResolver } from "@hookform/resolvers/zod";
import LoginForm from "./LoginForm";
import { Box, Grid, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import TabLogin from "./TabLogin";
import LogoInicio from "../../../assets/LogoInicio.png";
import {
  registerDefaultValues,
  registerSchema,
} from "../validation/registerForm";
import RegisterForm from "./RegisterForm";

function LogIn(): React.ReactElement {
  const navigate = useNavigate();
  const [logIn, setLogIn] = useState(true);
  const loginForm = useForm({
    defaultValues: loginDefaultValues,
    resolver: zodResolver(loginSchema),
  });
  const registerForm = useForm({
    defaultValues: registerDefaultValues,
    resolver: zodResolver(registerSchema),
  });

  function onChangeTab(value: boolean) {
    setLogIn(value);
    loginForm.reset();
    registerForm.reset();
  }

  return (
    <>
      <Grid container>
        <Paper
          elevation={10}
          sx={{ width: "50%", margin: "20px auto", backgroundColor: "#E9E9E9" }}
        >
          <Box
            sx={{
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              backgroundColor: "white",
              borderEndEndRadius: 40,
              borderEndStartRadius: 40,
            }}
          >
            <img
              src={LogoInicio} // Replace with the actual path to your image
              alt="Image Alt Text"
              style={{ width: "50%", maxWidth: 300, height: "auto" }}
            />
            <TabLogin pageId={0} onChangeTab={onChangeTab} />
          </Box>
          <Box sx={{ padding: 5 }}>
            {logIn ? (
              <LoginForm
                form={loginForm}
                onsubmitForm={() => {
                  loginForm.handleSubmit((data) => {
                    console.log(data);
                    navigate(`/home`);
                  })();
                }}
              />
            ) : (
              <RegisterForm
                form={registerForm}
                onsubmitForm={() => {
                  registerForm.handleSubmit((data) => {
                    console.log(data);
                    navigate(`/home`);
                  })();
                }}
              />
            )}
          </Box>
        </Paper>
      </Grid>
    </>
  );
}

export default LogIn;
