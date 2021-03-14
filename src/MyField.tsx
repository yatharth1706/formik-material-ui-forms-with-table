import * as React from "react";
import { FieldProps } from "formik";
import { TextField } from "@material-ui/core";
import { TextFieldProps } from "material-ui";

interface Props extends FieldProps {
  placeholder: string;
  label: string;
}

export const MyField: React.FC<Props & TextFieldProps> = ({
  placeholder,
  label,
  field,
}) => {
  return <TextField label={label} placeholder={placeholder} {...field} />;
};
