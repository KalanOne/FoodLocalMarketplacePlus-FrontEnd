import { Tab, Tabs } from "@mui/material";
import React, { useState } from "react";

interface TabLoginProps {
  pageId: number;
  onChangeTab: (value: boolean) => void;
}

function TabLogin({ pageId, onChangeTab }: TabLoginProps): React.ReactElement {
  const [value, setValue] = useState(pageId ?? 0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    console.log(newValue);
    switch (newValue) {
      case 0:
        onChangeTab(true);
        break;
      case 1:
        onChangeTab(false);
        break;
      default:
        break;
    }
  };
  return (
    <>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="inherit"
        TabIndicatorProps={{
          style: {
            backgroundColor: "#EF2F29",
          },
        }}
      >
        <Tab label="Iniciar Sesión" />
        <Tab label="Registro" />
      </Tabs>
    </>
  );
}

export default TabLogin;
