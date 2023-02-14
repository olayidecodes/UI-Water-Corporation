import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectComponent({
  label,
  entries,
  value,
  changeHandler,
  name,
}) {
  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-autowidth-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={value}
          onChange={changeHandler}
          autoWidth
          label="Age"
          name={name}
        >
          {entries?.map((entry) => (
            <MenuItem key={entry} value={entry}>
              {entry}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
