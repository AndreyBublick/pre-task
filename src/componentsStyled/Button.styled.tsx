import styled, { css } from "styled-components";
import { theme } from "../styles/theme.styled";

type propsButtonType = {
  color?: string;
  /* $ */ $isFilling?: boolean;
};

export const Button = styled.button<propsButtonType>`
  /* transition: 0.1s all ease-in; */
  border-radius: 8px;
  line-height: 3;
  padding: 0 2.45em;
  font-size: 10px;
  color: ${(props) => props.color || theme.colors.cardsColors.bthColors.color};
  background: ${theme.colors.cardsColors.bthColors.mainColor};
  letter-spacing: 1.2px;
  font-weight: 700;
  border: 2px solid;

  @media ${theme.media.hover.onHover} {
    &:hover {
      background-color: ${theme.colors.cardsColors.bthColors.onHover};
    }
  }

  @media ${theme.media.hover.onNoneHover} {
    &:active {
      background-color: ${theme.colors.cardsColors.bthColors.onHover};
    }
  }
  
  ${props => props.$isFilling && css<propsButtonType>`
      color: ${(props) => props.color || theme.colors.cardsColors.bthColors.mainColor};
      background: transparent;
      border-color: ${(props) => props.color || theme.colors.cardsColors.bthColors.mainColor};

      @media ${theme.media.hover.onHover} {
        &:hover {
          color: ${theme.colors.cardsColors.bthColors.onHover};
          background: transparent;
          border-color: ${theme.colors.cardsColors.bthColors.onHover};
        }
      }

      @media ${theme.media.hover.onNoneHover} {
        &:active {
          background: transparent;
          color: ${theme.colors.cardsColors.bthColors.onHover};

          border-color: ${theme.colors.cardsColors.bthColors.onHover};
        }
      }
    `};

  @media (max-width: 575px) {
    box-shadow: 0px 5px 5px -3px black;
  }
`;
