import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";

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

export default function CustomMultiSelect({
  selectOptions = [],
  title = 'none',
  onChange,
  defaultValue = ''
}) {
  const [personName, setPersonName] = React.useState([]);

  React.useEffect(() => {
    if (selectOptions?.length && defaultValue?.length) {
      const checkArr = selectOptions.map(data => data.value)
      let defaultCheck = true
      defaultValue.map(data => {
        if (!checkArr.includes(data)) {
          defaultCheck = false
        }
      })
      if (defaultCheck) {
        setPersonName(defaultValue)
      } else {
        setPersonName([])
      }

    } else {
      setPersonName([])
    }
  }, [defaultValue, selectOptions])

  const handleOnClose = () => {
    if (personName && onChange && typeof onChange === 'function') {

      let arr = []

      selectOptions.map((data) => {
        if (personName.includes(data?.value)) {
          arr.push(data?.value)
        }
      })

      onChange(title, arr)
    }
  }
  const handleChange = (event) => {
    const {
      target: { value }
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div className="dropdown-res">
      <Select
        multiple
        displayEmpty
        value={personName}
        onChange={handleChange}
        onClose={handleOnClose}
        renderValue={(selected) => {

          if (selected.length === 0) {
            return <em>{title}</em>;
          }

          return selected.join(", ");
        }}
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
            value={data?.value}
          >
            <Checkbox checked={personName.indexOf(data?.value) > -1} />
            {data?.name}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
}
