import styled from "styled-components";

import { FC } from "react";
import { MyAnimations } from "../styles/animations/Animations";
import { theme } from "../styles/theme.styled";

export const Card = styled.div`
  width: 300px;
  padding: 10px;
  background-color: ${theme.colors.cardsColors.bg};
  border-radius: 15px;
  animation: ${MyAnimations} 100s ease-in infinite;
  img {
    border-radius: 10px;
    margin-bottom: ${theme.mBottom};
    max-width: 100%;
  }

  h2 {
    margin-bottom: ${theme.mBottom};

    font-family: "Inter";
    font-size: 16px;
    font-weight: 700;
    line-height: 19.36px;
    color: ${theme.colors.cardsColors.title};
  }
  p {
    margin-bottom: ${theme.mBottom};

    font-family: "Inter";
    font-size: 12px;
    font-weight: 500;
    line-height: 20px;
    color: ${theme.colors.cardsColors.text};
  }

  
`;
