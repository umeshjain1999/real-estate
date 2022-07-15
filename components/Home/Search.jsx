import React from 'react'
import Input from '@components/Input';
import Button from '@components/Button';
import Icon from '@components/Icon';
import { useRouter } from 'next/router';
function Search() {

  const router = useRouter()

  const formSubmission = (e) => {
    e.preventDefault()
    if(e.target.area && e.target.area.value
      && e.target.residential && e.target.residential.value
      && e.target.type.value) {
      let searchObj = {
        area : e.target.area.value,
        residential : e.target.residential.value,
        type : e.target.type.value,
      }
      if(searchObj.area.trim().length && searchObj.residential.trim().length && searchObj.type){
        alert(JSON.stringify(searchObj))
        router.push({
          pathname : '/projects',
          query : {
            ...searchObj
          }
        })
      } else {
        alert("Input isn't proper!")
      }
    } else {
      alert("Input isn't proper!")
    }
  }

  return (
    <div className='home__search'>
      <div className="container pos-rel">
        <div className="home__search-wrap">
          <form onSubmit={formSubmission} className='search-form' >
              <div className="search-radio-wrap">
                <div className='search-radio common-input-radio'>
                    <Input type="radio" name="type" value = "buy" defaultChecked/>
                      <span className='common-input-radio-text'>Buy</span>
                </div>
                <div className='search-radio common-input-radio'>
                    <Input type="radio" name="type" value = "rent" />
                    <span className='common-input-radio-text'>Rent</span>
                </div>
              </div>
              <div className='search-input-wrap'>
                <Icon icon = 'location' />
                <Input className = 'search-area-input' required type="text" name="area" placeholder='Search by location, landmark, builder, or project' />
              </div>
              <div className="search-input-wrap">
                <Icon icon = 'downChevron' />
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