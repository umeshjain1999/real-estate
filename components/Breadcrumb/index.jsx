import React from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router';

function Breadcrumb({linkArr = []}) {
  return (
    <div className='breadcrumb'>
      {linkArr?.length ?  
      linkArr.map((data,index) => {
        if((linkArr.length - 1) === index) {
          return <div key={index}>{data?.name}</div>
        }
        return (
          <div key={index}>
            <Link href={data?.link}>
              <a>{data?.name}</a>
            </Link>
            <span className='breadcrumb-sep'>&#10095;</span> 
          </div>
        )
      })
      : <div>Home</div>}
    </div>
  )
}

export default Breadcrumb