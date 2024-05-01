import React from "react";
import * as S from "./styles"
import LogoItau from "../assets/logo.svg";
import ItemMenu from "./ItemMenu";
import IconUsuer from "../assets/icon-user.svg";

function Header() {
  return (
    <S.Header>
      <S.Container>
        <S.ContainerItens>
          <S.Img>
            <img src={LogoItau} alt="Logo-Itaú" />
          </S.Img>

          <S.Ul>
            <li>
              <ItemMenu name="Para voçê"/>
            </li>
            <li>
              <ItemMenu name="Para empresas" />
            </li>
            <li>
              <ItemMenu name="Servicos" />
            </li>
            <li>
              <ItemMenu name="Ajuda" />
            </li>
          </S.Ul>

          <S.DivButtonAccess>
            <S.ButtonAccess>
              <img src={IconUsuer} alt="Icon -user" />
              <span>Acessar Conta</span>
            </S.ButtonAccess>
          </S.DivButtonAccess>
        </S.ContainerItens>
      </S.Container>
    </S.Header>
  );
}

export default Header;
