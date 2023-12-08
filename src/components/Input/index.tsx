import { InputStyle, TitleInputStyle } from "./styles";

interface props {
  title: string
}


export function Input({title}: props) {

    return (
      <>
        <TitleInputStyle>{title}</TitleInputStyle>
        <InputStyle>
        </InputStyle>

      </>
    )
}