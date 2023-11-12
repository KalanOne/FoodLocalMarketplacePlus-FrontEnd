import React from "react";
import { useForm } from "react-hook-form";
import { loginDefaultValues, loginSchema } from "../validation/loginForm";
import { zodResolver } from "@hookform/resolvers/zod";
import LoginForm from "./LoginForm";
import { Avatar, Box, Grid, Paper, Typography } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

function LogIn(): React.ReactElement {
  const loginForm = useForm({
    defaultValues: loginDefaultValues,
    resolver: zodResolver(loginSchema),
  });
  return (
    <>
      <Grid container>
        <Paper
          elevation={10}
          sx={{ padding: 3, height: "70vh", width: 380, margin: "50px auto" }}
        >
          <Box
            sx={{
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Grid
              sx={{
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Avatar sx={{ background: "green" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography noWrap variant="h6">
                {"LogIn"}
              </Typography>
            </Grid>
          </Box>
          <LoginForm
            form={loginForm}
            onsubmitForm={() => {
              loginForm.handleSubmit((data) => {
                console.log(data);
              })();
            }}
          />
        </Paper>
      </Grid>
    </>
  );
}

export default LogIn;
