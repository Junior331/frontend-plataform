import React from "react";
import * as S from "./MenuStyled";
import { useLocation } from "react-router-dom";

const Menu = (props) => {
  const location = useLocation();

  return (
    <S.MenuContainer>
      {location.pathname === "/home" ? "" : "menu"}
    </S.MenuContainer>
  );
};

export default Menu;
