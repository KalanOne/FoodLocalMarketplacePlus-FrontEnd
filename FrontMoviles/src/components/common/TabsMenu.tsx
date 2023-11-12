import { Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface TabsMenuProps {
  pageId: number;
}

function TabsMenu({ pageId }: TabsMenuProps): React.ReactElement {
  const [value, setValue] = useState(pageId ?? 0);
  const navigate = useNavigate();
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    navigate(`/home`);
    console.log(newValue);
  };
  return (
    <>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="inherit"
        indicatorColor="primary"
      >
        <Tab label="Agregar Producto " />
        <Tab label="Ver Productos " />
      </Tabs>
    </>
  );
}

export default TabsMenu;
