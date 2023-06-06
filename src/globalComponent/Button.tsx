import React from "react";

interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    type?: "button" | "submit" | "reset";
}

const Button: React.FC<IButtonProps> = ({ children, ...restProps }) => {
    return <button {...restProps}>{children}</button>;
};

export default Button;
