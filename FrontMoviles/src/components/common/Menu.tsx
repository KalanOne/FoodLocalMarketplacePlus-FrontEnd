import {
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import LogoutIcon from "@mui/icons-material/Logout";

interface MenuDrawerItemProps {
  name: string;
  children?: React.ReactNode;
  endIcon?: React.ReactNode;
  divider?: boolean;
  onClick?: () => void;
  to?: string;
}

function MenuDrawerItem({
  name,
  children,
  endIcon,
  divider,
  onClick,
  to,
}: MenuDrawerItemProps): React.ReactElement {
  const navigate = useNavigate();

  function handleClick() {
    if (onClick) {
      onClick();
    }
    if (to) {
      navigate(to);
    }
  }

  return (
    <ListItemButton onClick={handleClick} divider={!divider}>
      {children && <ListItemIcon>{children}</ListItemIcon>}
      <ListItemText primary={name} />
      {endIcon && (
        <ListItemIcon style={{ justifyContent: "flex-end" }}>
          {endIcon}
        </ListItemIcon>
      )}
    </ListItemButton>
  );
}

interface MenuProps {
  open: boolean;
  onClose: () => void;
}

function Menu({ open, onClose }: MenuProps): React.ReactElement {
  const navigate = useNavigate();
  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/");
  }

  return (
    <Drawer open={open} onClose={onClose}>
      <List disablePadding>
        <MenuDrawerItem name={"Productos"} to="/productos">
          <AddShoppingCartIcon />
        </MenuDrawerItem>
      </List>
      <Divider />
      <List disablePadding>
        <MenuDrawerItem name={"Cerrar sesión"} onClick={handleLogout}>
          <LogoutIcon />
        </MenuDrawerItem>
      </List>
    </Drawer>
  );
}

export default Menu;
