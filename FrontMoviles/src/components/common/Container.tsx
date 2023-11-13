import { AppBar, Box, Paper, Toolbar, Typography } from "@mui/material";
import React, { useRef } from "react";

interface ContainerProps {
  title: string;
  children: React.ReactNode;
}

function Container({ title, children }: ContainerProps): React.ReactElement {
  const appBarRef = useRef<HTMLElement>(null);
  return (
    <>
      <Box
        sx={{
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          width: "100%",
          height: "100%",
        }}
      >
        <AppBar
          ref={appBarRef}
          sx={{
            position: "sticky",
            top: 0,
            height: "64px",
            boxShadow: "none",
            backgroundColor: "#EF2F29",
          }}
        >
          <Toolbar>
            <Typography noWrap variant="h6">
              {title}
            </Typography>
            <Box
              id={"navbarPortal"}
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                flex: 1,
              }}
            ></Box>
          </Toolbar>
        </AppBar>
        <Box sx={{ padding: 1, width: "100%" }}>
          <Paper
            elevation={10}
            sx={{
              backgroundColor: "#E9E9E9",
            }}
          >
            {children}
          </Paper>
        </Box>
      </Box>
    </>
  );
}

export default Container;
