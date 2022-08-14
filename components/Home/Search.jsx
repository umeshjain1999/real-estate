import React from 'react'
import Input from '@components/Input';
import Button from '@components/Button';
import Icon from '@components/Icon';
import RadioButton from '@components/Input/RadioButton';

import { useRouter } from 'next/router';
function Search() {

  const router = useRouter()

  const formSubmission = (e) => {
    e.preventDefault()

    const formNameArr = ['locality', 'propertyType', 'type']

    let searchObj = {}

    formNameArr.map(data => {
      searchObj[data] = e.target[data].value
    })

    router.push({
      pathname: '/projects',
      query: {
        ...searchObj
      }
    })
  }

  const renderOptionElement = ({ value = '', name = '', ...props }) => {
    return (
      <option {...props} value={value} key={value + name}>&#160;&#160;{name}&#160;&#160;</option>
    )
  }

  return (
    <div className='home__search'>
      <div className="container pos-rel">
        <div className="home__search-wrap">
          <form onSubmit={formSubmission} className='search-form' >
            <div className="search-radio-wrap">
              <RadioButton
                containerClassName="search-radio common-input-radio"
                labelClassName="common-input-radio-text"
                label="Buy"
                name="type"
                value="buy"
                id="buy"
                defaultChecked
              />
              <RadioButton
                containerClassName="search-radio common-input-radio"
                labelClassName="common-input-radio-text"
                label="Rent"
                name="type"
                value="rent"
                id="rent"
              />
            </div>
            <div className='search-input-wrap'>
              <Icon icon='location' />
              <select className='search-area-input' required name="Location" id="locality">
                {renderOptionElement({
                  name: '-- Search by location--'
                })}
                {location && location.map((data) => {
                  return (
                    renderOptionElement({
                      name: data?.name,
                      value: data?.value || data?.name
                    })
                  )
                })}
              </select>
              {/* <Input className = 'search-area-input' required type="text" name="locality" placeholder='Search by location, landmark, builder, or project' /> */}
            </div>
            <div className="search-input-wrap">
              <Icon icon='downChevron' />
              <select required name="propertyType">
                {renderOptionElement({
                  name: 'Residential',
                  value: 'residential'
                })}
                {renderOptionElement({
                  name: 'Commercial',
                  value: 'commercial',
                  disabled: true
                })}
              </select>
              {/* <Input required type="text" name="residential" placeholder='Residential'/> */}
            </div>
            <Button text='Search' variant='secondary' type='submit' className='search-button' icon='search' />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Search

const location = [
  {
    name: 'Ulwe',
    value: 'Ulwe'
  },
  {
    name: 'Vashi',
    value: 'Vashi'
  },
  {
    name: 'Gansoli',
    value: 'Gansoli'
  },
]