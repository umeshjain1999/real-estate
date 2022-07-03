import Icon from "../Icon";

function Button(props) {
  const { 
    icon,
    iconPosition = 'left',
    text = 'button',
    variant = 'primary',
    buttonClassName = '',
  } = props;
  let updatedClassName = 'common-btn';
  updatedClassName = buttonClassName && updatedClassName + ` ${buttonClassName}` ;
  if (variant === 'secondary') {
    updatedClassName =  updatedClassName + ' secondary-btn'
  }

  return (
    <button className={updatedClassName}>
      {icon && iconPosition === 'left' && <Icon icon = {icon} iconClassName = "btn-icon-left"/>}
      <span>{text}</span>
      {icon && iconPosition === 'right' && <Icon icon = {icon} iconClassName = "btn-icon-right"/>}
    </button>
  )
}


export default Button;
