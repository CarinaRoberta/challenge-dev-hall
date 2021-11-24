import React, { ButtonHTMLAttributes } from "react";
import { Content } from "./style";

type VariantColor = "Green" | "Red";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color: VariantColor;
}

const Button: React.FC<IButtonProps> = ({ children, color }) => {
  return <Content color={color}>{children}</Content>;
};

export default Button;
