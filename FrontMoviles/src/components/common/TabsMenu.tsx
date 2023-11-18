import { Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TabsItem from "./TabsItem";
import PhoneIcon from "@mui/icons-material/Phone";

interface TabsMenuProps {
  pageId: number;
}

function TabsMenu({ pageId }: TabsMenuProps): React.ReactElement {
  const [value, setValue] = useState(pageId ?? 0);
  return (
    <>
      <Tabs
        value={value}
        textColor="inherit"
        TabIndicatorProps={{
          style: {
            backgroundColor: "white",
          },
        }}
        centered
      >
        <TabsItem label="Agregar Producto " href="" />
        <TabsItem label="Ver Productos " href="" />
      </Tabs>
    </>
  );
}

export default TabsMenu;
