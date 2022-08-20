import { useState, useEffect } from 'react';
import { Popover } from '@mui/material';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import Slider from '@mui/material/Slider';
import Icon from '@components/Icon';
import { CURRENCY } from "@constants/constant";

function PriceRange({
  handlePriceRange,
  defaultValue = [10, 50]
}) {
  const [priceRange, setPriceRange] = useState([10, 50])

  useEffect(() => {
    setPriceRange(defaultValue)
  }, [defaultValue])


  const finalPriceRange = () => {
    let min = priceRange[0] * 1000
    let max = priceRange[1] * 1000
    handlePriceRange(min, max)
  }



  return (
    <PopupState variant='popover'>
      {(popupState) => (
        <div className='price-range-wrapper pos-rel dropdown-res'>
          <div className='price-range-title' {...bindTrigger(popupState)}>
            <div>Price</div>
            <Icon icon='dropdownArrow' />
          </div>
          <Popover
            {...bindPopover(popupState)}
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
              <div onClick={finalPriceRange} className='common-btn price-range-btn'>Done</div>
            </div>
          </Popover>
        </div>
      )}
    </PopupState>
  )
}

export default PriceRange