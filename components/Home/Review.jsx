import React from 'react'
import HorizontalFeature from '@components/HorizontalFeature';
import { CustomSlider } from "@components/Slider";
import { InitialSlide } from '@components/Animation';
function Review({
  title = '',
  subTitle = '',
  review = [],
}) {
  const settings = {
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    infinite: true,
    pauseOnFocus: true,
    pauseOnHover: true,
    draggable: true,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className='home__review divider-lg'>
      <div className="container">
        <div className="home__review-wrap text-center">
          <div className="home__review-title sub-title divider-sm">{title}</div>
          <div className="home__review-sub-title divider-lg">{subTitle}</div>
          <InitialSlide>
            <div className="home__review-users-wrap">
              <CustomSlider settings={settings}>
                {review && review.map((data, index) => {
                  return (
                    <div className="review-user" key={index}>
                      <div className="review-text normal-text">
                        {data?.review}
                      </div>
                      <HorizontalFeature {...data} />
                    </div>
                  )
                })}
              </CustomSlider>
            </div>
          </InitialSlide>
        </div>
      </div>
    </div>
  )
}

export default Review