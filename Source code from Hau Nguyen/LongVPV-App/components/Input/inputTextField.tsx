import { TextField, withStyles } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import React from "react";

interface Props {
  helperText?: any;
  onChange?: (value: any) => any;
  value?: any;
  label?: string;
  name?: string;
  type?: any;
}
const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "grey",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "grey",
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "grey",
      },
    },
  },
})(TextField);
const InputTextField = ({
  helperText,
  onChange,
  value,
  label,
  name,
  type,
}: Props) => {
  return (
    <CssTextField
      className="mb-3 w-100"
      name={name}
      label={label}
      size="small"
      variant="outlined"
      helperText={<span className="text-danger">{helperText}</span>}
      onChange={onChange}
      value={value}
      type={type}
    />
  );
};

export default InputTextField;
