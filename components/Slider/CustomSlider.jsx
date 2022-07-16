import Slider from "react-slick"
import { SliderNext,SliderPrevious} from "@components/Slider"

function CustomSlider(props) {
  const {settings = {},...remainingProps} = props
  let defaultSettings = {
    speed: 500,
    dots: false,
    infinite: false,
    draggable: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SliderNext />,
    prevArrow: <SliderPrevious/>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    ...settings
  }
  return (
    <Slider {...remainingProps} {...defaultSettings}>
      {props.children}
    </Slider>
  )
}

export default CustomSlider