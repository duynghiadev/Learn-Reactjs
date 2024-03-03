import { MenuItem, TextField } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import React from "react";

interface Props {
  helperText?: any;
  onChange?: (value: any) => any;
  value?: any;
  label?: string;
  name?: string;
  data: any[];
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

const SelectTextField = ({
  helperText,
  data,
  onChange,
  value,
  label,
  name,
}: Props) => {
  return (
    <CssTextField
      select
      id={name}
      label={label}
      onChange={onChange}
      helperText={helperText}
      className="mb-3 w-100"
      name={name}
      size="small"
      variant="outlined"
    >
      {data.map((option, index) => (
        <MenuItem key={index} value={option.value || option.id}>
          {option.label || option.name}
        </MenuItem>
      ))}
    </CssTextField>
  );
};

export default SelectTextField;
