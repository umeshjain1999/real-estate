import Icon from "@components/Icon"

function SliderPrevious(props) {
  const { className, style, onClick } = props;
  
  return(
    <span
      className={`slider-arrows slider-prev ${className}`}
      style={{ ...style}}
      onClick={onClick}
    >
      <Icon icon = "leftArrow"/>
    </span>
  )
}

export default SliderPrevious