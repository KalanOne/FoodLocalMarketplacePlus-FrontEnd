import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import React from "react";

interface ModalProps {
  open: boolean;
  title: string;
  onClose?: () => void;
  onCancel?: () => void;
  onConfirm?: () => void;
  onSave?: () => void;
  children: React.ReactNode;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}

function Modal({
  open,
  title,
  onClose,
  onCancel,
  onConfirm,
  onSave,
  children,
  size,
}: ModalProps): React.ReactElement {
  function handleClose() {
    if (onClose) {
      onClose();
    }
  }
  function handleCancel() {
    if (onCancel) {
      onCancel();
    }
  }
  function handleConfirm() {
    if (onConfirm) {
      onConfirm();
    }
  }
  function handleSave() {
    if (onSave) {
      onSave();
    }
  }
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth={size ?? "sm"}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        {onClose && <Button onClick={handleClose}>{"Cerrar"}</Button>}
        {onCancel && <Button onClick={handleCancel}>{"Cancelar"}</Button>}
        {onConfirm && <Button onClick={handleConfirm}>{"Confirmar"}</Button>}
        {onSave && <Button onClick={handleSave}>{"Guardar"}</Button>}
      </DialogActions>
    </Dialog>
  );
}

export default Modal;
