import Icon from '@components/Icon';
import { CURRENCY } from "@constants/constant";
import Slider from '@mui/material/Slider';
import { useToggle } from 'hooks';
import { useState, useEffect } from 'react';

function PriceRange({
  handlePriceRange,
  defaultValue = [10, 50]
}) {
  const [priceRange, setPriceRange] = useState([10, 50])
  const { toggle, updateToggle } = useToggle()

  useEffect(() => {
    setPriceRange(defaultValue)
  }, [defaultValue])


  const finalPriceRange = () => {
    let min = priceRange[0] * 1000
    let max = priceRange[1] * 1000
    updateToggle()
    handlePriceRange(min, max)
  }



  return (
    <div className='price-range-wrapper pos-rel dropdown-res'>
      <div onClick={updateToggle} className='price-range-title'>
        <div>Price</div>
        <Icon icon='dropdownArrow' className={`${toggle && 'price-range-svg-active'}`} />
      </div>
      {toggle &&
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
        </div>}
      {toggle && <div onClick={updateToggle} className='price-range-modal-backdrop'></div>}
    </div>
  )
}

export default PriceRange