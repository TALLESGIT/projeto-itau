import React from "react";
import * as S from './styles'
import PhoneIcon from '../../assets/icon-phone.svg'
import SolutionsIcon from '../../assets/icon-solutions.svg'
import ItemList from "./ItenList";
import OptionIcon from '../../assets/icon-options.svg'
import CardIcon from '../../assets/icon-card.svg'
import ImagePhone from '../../assets/phone.png'

function SectionService() {
    return (
        <S.Section>
            <S.Container>
                <S.SectionLeft>
                    <S.Span>Serviços exclusivos</S.Span>
                    <S.H2>Gerencie suas finaças sem sair de casa</S.H2>
                    <S.P>
                        Veja como voçê pode cuidar das suas finaças pelo app Itaú de forma
                        segura, rápida e o melhor, no conforto da sua casa.
                    </S.P>

                    <S.Ul>
                        <S.Li>
                            <ItemList
                                img={PhoneIcon} alt="PhoneIcon"
                                p="Acompanhar sua conta, fazer tranferências e pagamentos de onde
                            estiver." />
                        </S.Li>


                        <S.Li>
                            <ItemList
                                img={SolutionsIcon} alt="icon-solutions"
                                p="Soluções de empéstimos e negociações para organizar 
                                sua finanças." />
                        </S.Li>


                        <S.Li>
                            <ItemList
                                img={OptionIcon} alt="PhoneIcon"
                                p="Diversas opções de investimentos, de acordo
                                com o seu perfil de invertidor." />
                        </S.Li>


                        <S.Li>
                            <ItemList
                                img={CardIcon} alt="PhoneIcon"
                                p="Acompanhe a fatura do seu cartão de crédito de faça
                                compras onlline com seu cartão virtual." />
                        </S.Li>
                    </S.Ul>

                </S.SectionLeft>
            </S.Container>
            <S.DivRight>
                <S.Img src={ImagePhone} alt="Image-Phone" />
            </S.DivRight>
        </S.Section>
    )
}

export default SectionService