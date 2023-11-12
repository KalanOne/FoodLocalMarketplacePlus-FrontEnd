import React from "react";

import { TextField, TextFieldProps } from "@mui/material";

import { Controller } from "react-hook-form";

export { FormTextInput };

type FormTextInputProps = TextFieldProps & {
  name: string;
};

function FormTextInput({
  name,
  ...props
}: FormTextInputProps): React.ReactElement {
  return (
    <Controller
      name={name}
      render={({ field: { onChange, onBlur, value, ref }, fieldState }) => (
        <TextField
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          name={name}
          inputRef={ref}
          error={fieldState.invalid}
          helperText={fieldState.invalid && fieldState.error?.message}
          variant={"outlined"}
          {...props}
        />
      )}
    />
  );
}
