import * as React from "react";
import { FieldProps } from "formik";
import { TextField } from "@material-ui/core";

interface Props extends FieldProps {
  placeholder: string;
}

export const MyField: React.FC<Props> = ({ placeholder, field }) => {
  return <TextField placeholder={placeholder} {...field} />;
};
