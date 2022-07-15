import React from 'react'
import Input from '@components/Input';
import Button from '@components/Button';
import Icon from '@components/Icon';
function Search() {

  const formSubmission = (e) => {
    e.preventDefault()
    alert('whatupppppp')
  }

  return (
    <div className='home__search'>
      <div className="container pos-rel">
        <div className="home__search-wrap">
          <form onSubmit={formSubmission} className='search-form' >
              <div className='search-input-wrap'>
                <Icon icon = 'location' />
                <Input className = 'search-area-input' required type="text" name="area" placeholder='Search by location, landmark, builder, or project' />
              </div>
              <div className="search-input-wrap">
                <Icon icon = 'location' />
                <Input required type="text" name="residential" placeholder='Residential'/>
              </div>
                <Button text='Search' variant='secondary' type='submit' className='search-button' icon = 'search'/>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Search