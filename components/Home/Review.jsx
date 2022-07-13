import React from 'react'
import HorizontalFeature from '@components/HorizontalFeature';
function Review({
  title = '',
  subTitle = '',
  user_1 = {},
  user_2 = {}
}) {
  return (
    <div className='home__review divider-lg'>
      <div className="container">
        <div className="home__review-wrap text-center">
          <div className="home__review-title sub-title divider-sm">{title}</div>
          <div className="home__review-sub-title divider-lg">{subTitle}</div>
          <div className="home__review-users-wrap">
            <div className="review-user">
              <div className="review-text normal-text">
                {user_1?.review}
              </div>
              <HorizontalFeature {...user_1}/>
            </div>
            <div className="review-user">
              <div className="review-text normal-text">
                {user_2?.review}
              </div>
              <HorizontalFeature {...user_2}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Review