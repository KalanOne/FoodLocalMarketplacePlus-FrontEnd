import React from "react";

import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";

export { AddFab };

interface AddFabProps {
  onClick?: () => void;
}

function AddFab({ onClick }: AddFabProps): React.ReactElement {
  return (
    <Fab
      onClick={onClick}
      aria-label="add"
      sx={{
        position: "fixed",
        bottom: "1.5rem",
        right: "1.5rem",
        bgcolor: "#EF2F29",
      }}
    >
      <AddIcon />
    </Fab>
  );
}
