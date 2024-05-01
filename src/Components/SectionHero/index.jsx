import React from "react";
import * as S from './styles'
import ImageAppleStore from '../../assets/btn-apple-store.svg'
import TmageGooglePlay from '../../assets/btn-google-play.svg'
import Arrow from '../../assets/arrow-explorer.svg'
import ImageWoman from '../../assets/woman.png'

function SectionHero() {
    return (
        <S.Section>
            <S.Container>
                <S.DivLeft>
                    <S.H1>Tenha seu Banco na palma da mão</S.H1>
                    <S.P>Todas as operações que voçê precisa em um só lugar.
                        Simples, completo e feito para voçê
                    </S.P>

                    <S.DivButtons>
                        <S.Button>
                            <img src={ImageAppleStore} alt="button-Apple" />
                        </S.Button>
                        <S.Button>
                            <img src={TmageGooglePlay} alt="" />
                        </S.Button>
                    </S.DivButtons>

                    <S.DivButtonExplorer>
                        <img src={Arrow} alt="Arrow down" />
                        <S.Span>continue explorando</S.Span>
                    </S.DivButtonExplorer>

                </S.DivLeft>
                <S.ImgWoman src={ImageWoman} alt="" Image-Woman />
            </S.Container>
        </S.Section>
    )
}

export default SectionHero