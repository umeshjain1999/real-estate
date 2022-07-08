import Icon from "../Icon";

function Button(props) {
  const { 
    icon,
    iconPosition = 'left',
    text = 'button',
    variant = 'primary',
    className = '',
    link = false,
    href = '',
    ...remainingProps
  } = props;
  let updatedClassName = 'common-btn';
  updatedClassName = className ? updatedClassName + ` ${className}` : updatedClassName ;
  if (variant === 'secondary') {
    updatedClassName =  updatedClassName + ' secondary-btn'
  }


  if(link) {
    return (
      <a className={updatedClassName} {...remainingProps} href = {href}>
        {icon && iconPosition === 'left' && <Icon icon = {icon} className = "btn-icon-left"/>}
        <span>{text}</span>
        {icon && iconPosition === 'right' && <Icon icon = {icon} className = "btn-icon-right"/>}
      </a>
    )
  } else {
    return (
      <button className={updatedClassName} {...remainingProps}>
        {icon && iconPosition === 'left' && <Icon icon = {icon} className = "btn-icon-left"/>}
        <span>{text}</span>
        {icon && iconPosition === 'right' && <Icon icon = {icon} className = "btn-icon-right"/>}
      </button>
    )
  }

}


export default Button;
