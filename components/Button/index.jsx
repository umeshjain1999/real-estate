import Icon from "../Icon";
import { motion } from "framer-motion";

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
  updatedClassName = className ? updatedClassName + ` ${className}` : updatedClassName;
  if (variant === 'secondary') {
    updatedClassName = updatedClassName + ' secondary-btn'
  }


  if (link) {
    return (
      <motion.a
        {...remainingProps}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={updatedClassName}
        href={href}>
        {icon && iconPosition === 'left' && <Icon icon={icon} className="btn-icon-left" />}
        <span>{text}</span>
        {icon && iconPosition === 'right' && <Icon icon={icon} className="btn-icon-right" />}
      </motion.a>
    )
  } else {
    return (
      <motion.button
        {...remainingProps}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={updatedClassName}>
        {icon && iconPosition === 'left' && <Icon icon={icon} className="btn-icon-left" />}
        <span>{text}</span>
        {icon && iconPosition === 'right' && <Icon icon={icon} className="btn-icon-right" />}
      </motion.button>
    )
  }

}


export default Button;
