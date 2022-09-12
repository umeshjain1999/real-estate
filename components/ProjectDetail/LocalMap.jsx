import Button from '@components/Button'
import Image from 'next/image'
import React from 'react'

function LocalMap() {
  const handleMapFunction = () => {
    alert('Local Map Operation')
  }
  return (
    <div className='text-center'>
      <div className='divider-sm locality-map-wrap'>
        <Image
          src={'/assets/images/local-map.png'}
          alt='local area map'
          width={600}
          height={300}
          className='locality-map'
        />
      </div>
      <Button text="Explore on Maps" icon='search' className='locality-button' onClick={handleMapFunction} />
    </div>
  )
}

export default LocalMap