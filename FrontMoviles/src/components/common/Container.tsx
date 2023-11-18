import { AppBar, Box, Paper, Toolbar, Typography } from "@mui/material";
import React, { useRef } from "react";

interface ContainerProps {
  children: React.ReactNode;
}

function Container({ children }: ContainerProps): React.ReactElement {
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
            backgroundColor: "black",
          }}
        >
          <Toolbar>
            <Box
              id={"navbarPortal"}
              sx={{
                width: "100%",
              }}
            ></Box>
          </Toolbar>
        </AppBar>
        <Box sx={{ width: "100%" }}>{children}</Box>
      </Box>
    </>
  );
}

export default Container;
