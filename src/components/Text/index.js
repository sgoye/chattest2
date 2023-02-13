import React from "react";
const variantClasses = {
  h1: "sm:text-[22.21px] md:text-[24.21px] text-[26.21px]",
  h2: "font-normal text-[19.66px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
