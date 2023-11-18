import React from "react";

import {
  FormControl,
  FormHelperText,
  InputLabel,
  Select,
  SelectProps,
} from "@mui/material";

import { Controller } from "react-hook-form";

export { FormSelectInput };
export type { FormSelectInputProps };

type FormSelectInputProps = SelectProps & {
  name: string;
  label: string;
};
function FormSelectInput({
  name,
  label,
  ...props
}: FormSelectInputProps): React.ReactElement {
  return (
    <Controller
      name={name}
      render={({ field: { onChange, onBlur, value, ref }, fieldState }) => (
        <FormControl
          fullWidth
          error={fieldState.invalid && fieldState.isTouched}
          variant="outlined"
        >
          <InputLabel id={label}>{label}</InputLabel>
          <Select
            labelId={label}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            name={name}
            inputRef={ref}
            variant="outlined"
            {...props}
          />
          {fieldState.invalid && fieldState.isTouched && (
            <FormHelperText>{fieldState.error?.message}</FormHelperText>
          )}
        </FormControl>
      )}
    />
  );
}
