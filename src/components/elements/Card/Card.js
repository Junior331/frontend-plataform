import React from "react";
import * as S from "../CardSignIn/Styled";

export default function Card(props) {
  return (
    <>
      <S.Text>Seja bem vindo</S.Text>
      <S.SignInContainer>{props.children}</S.SignInContainer>
    </>
  );
}
