import React from "react";
import * as S from "./LogoStyled";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <S.LogoContainer
      // src={logo}
      />
    </Link>
  );
};

export default Logo;
