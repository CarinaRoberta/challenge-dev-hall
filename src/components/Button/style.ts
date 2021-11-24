import styled, { css } from "styled-components";

type VariantColor = "Green" | "Red";

interface IButtonProps {
  color: VariantColor;
}

const Content = styled.button<IButtonProps>`
  width: 200px;
  height: 40px;
  border-radius: 4px;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 16px;
  font-weight: 400;

  &:hover {
    filter: brightness(1.1);
  }

  ${(props) =>
    props.color === "Green" &&
    css`
      background-color: #10ac84;
    `}

  ${(props) =>
    props.color === "Red" &&
    css`
      background-color: #ee5253;
    `}
`;

export { Content };
