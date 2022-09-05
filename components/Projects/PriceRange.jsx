/* library */
import { useEffect, useState } from 'react';
import { Popover } from '@mui/material';
import Slider from '@mui/material/Slider';
/* components */
import Icon from '@components/Icon';
/* constants */
import { CURRENCY } from "@constants/constant";

function PriceRange({
  handlePriceRange,
  defaultValue = [10, 50]
}) {
  const [priceRange, setPriceRange] = useState([10, 50])
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    setPriceRange(defaultValue)
  }, [defaultValue])


  const finalPriceRange = () => {
    let min = priceRange[0] * 1000
    let max = priceRange[1] * 1000
    handlePriceRange(min, max)
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    finalPriceRange()
  };

  const open = Boolean(anchorEl);
  const id = open ? 'price-range-popover' : undefined;

  return (
    <div className='price-range-wrapper pos-rel dropdown-res'>
      <div
        className='price-range-title'
        aria-describedby={id}
        onClick={handleClick}
      >
        <div>Price</div>
        <Icon icon='dropdownArrow' />
      </div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center"
        }}
      >
        <div className='price-range-modal'>
          <div className='price-range-modal-top'>
            <Slider
              getAriaLabel={() => 'Price Range'}
              value={priceRange}
              onChange={(e, newValue) => setPriceRange(newValue)}
              getAriaValueText={(value) => `${CURRENCY} ${value}`}
            />
            <div>Minimum : {priceRange[0] * 1000}</div>
            <div>Maximum : {priceRange[1] * 1000}</div>
          </div>
          {/* <div onClick={finalPriceRange} className='common-btn price-range-btn'>Done</div> */}
        </div>
      </Popover>
    </div>
  )
}

export default PriceRange