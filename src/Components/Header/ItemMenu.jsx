import ArrowDomw from "../../assets/arrow-down.svg";
import * as S from "./styles"

function ItemMenu({name}) {
    return (
        <>
            <S.ButtonMenu>
                <span>{name}</span>
                <img src={ArrowDomw} alt="Seta" />
            </S.ButtonMenu>
        </>
    );
}

export default ItemMenu