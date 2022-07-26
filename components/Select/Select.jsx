import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import * as React from "react";

const ITEM_HEIGHT = 56;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 200
    }
  }
};

export default function CustomSelect({
  selectOptions = [],
  title = 'none',
  onChange
}) {
  const [personName, setPersonName] = React.useState('');

  const handleChange = (event) => {
    const {
      target: { value }
    } = event;
    
    setPersonName(value);

    if(value && onChange && typeof onChange === 'function'){

      console.log('handleChange',value);
      let arr = []

      selectOptions.map((data) => {
        if(value === data?.label){
          arr.push(data?.value)
        }
      })

      onChange(title,arr)
    }
  };

  return (
    <div className="dropdown-res">
      <Select
        displayEmpty
        value={personName}
        onChange={handleChange}
        MenuProps={MenuProps}
        inputProps={{ "aria-label": title }}
        variant="filled"
      >
        <MenuItem disabled value="">
          <em>{title}</em>
        </MenuItem>
        {selectOptions.map((data) => (
          <MenuItem
            key={data?.value}
            value={data?.label}
          >
            {data?.label}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
}
