import { Tabs } from "@mui/material";
import React from "react";
import TabsItem from "./TabsItem";

interface TabsMenuProps {
  pageId: number;
}

function TabsMenu({ pageId }: TabsMenuProps): React.ReactElement {
  return (
    <>
      <Tabs
        value={pageId}
        textColor="inherit"
        TabIndicatorProps={{
          style: {
            backgroundColor: "white",
          },
        }}
        centered
      >
        <TabsItem label="Productos" href="/productos" />
        <TabsItem label="Pedidos" href="" />
      </Tabs>
    </>
  );
}

export default TabsMenu;
