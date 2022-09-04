import { forwardRef } from "react";
/* eslint-disable */
const Input = forwardRef((props, ref) => {
  const { className = "", ...remainingProps } = props;
  let updatedProps = remainingProps;
  if (remainingProps?.type === "tel") {
    updatedProps = {
      maxLength: "10",
      minLength: "10",
      placeholder: "XXXXXXXX",
      autoComplete: "on",
      ...updatedProps,
    };
  }

  return (
    <input
      {...updatedProps}
      className={`common-input ${className}`}
      ref={ref}
    />
  );
});

export default Input;
