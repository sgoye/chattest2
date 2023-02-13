import React from "react";
import PropTypes from "prop-types";

const shapes = { icbRoundedBorder3: "rounded-radius3" };
const variants = { icbFillTeal500: "bg-teal_500" };
const sizes = { smIcn: "p-[6px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["icbRoundedBorder3"]),
  variant: PropTypes.oneOf(["icbFillTeal500"]),
  size: PropTypes.oneOf(["smIcn"]),
};
Button.defaultProps = {
  className: "",
  shape: "icbRoundedBorder3",
  variant: "icbFillTeal500",
  size: "smIcn",
};

export { Button };
