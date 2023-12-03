import {
  AppBar,
  Box,
  IconButton,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useRef, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "./Menu";

interface ContainerProps {
  children: React.ReactNode;
}

function Container({ children }: ContainerProps): React.ReactElement {
  const appBarRef = useRef<HTMLElement>(null);
  const [open, setOpen] = useState(false);
  return (
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
          bgcolor: "#EF2F29",
        }}
      >
        <Toolbar>
          <IconButton
            sx={{ mr: 2 }}
            color="inherit"
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography noWrap variant="h6">
            {"PonyFood"}
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
      <Menu open={open} onClose={() => setOpen(false)} />
      <Box
        sx={{
          width: "100%",
        }}
      >
        {children}
      </Box>
    </Box>
  );
}

export default Container;
