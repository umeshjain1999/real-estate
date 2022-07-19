import Icon from "@components/Icon";

function SliderNext(props) {
  const { className, style, onClick } = props;
  return(
    <span
      className={`slider-arrows slider-next ${className}`}
      style={{ ...style}}
      onClick={onClick}
    >
      <Icon icon = "rightArrow"/>
    </span>
  )
}

export default SliderNext