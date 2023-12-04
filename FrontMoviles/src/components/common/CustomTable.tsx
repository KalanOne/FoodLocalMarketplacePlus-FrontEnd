import { TableCell, styled } from "@mui/material";

export { TableHeaderCell, TableBodyCell };

const TableHeaderCell = styled(TableCell)({
  backgroundColor: "#4eacdf",
  color: "white",
  fontSize: "0.95rem",
  textAlign: "center",
});

const TableBodyCell = styled(TableCell)({
  textAlign: "center",
  paddingTop: "8px",
  paddingBottom: "8px",
});
