import { ButtonStyle } from "./styles";

interface props {
  title: string
  functionClick: () => void
}

export function Button({title , functionClick}:props) {

    return (
      <>
        <ButtonStyle onClick={functionClick}>{title}</ButtonStyle>
      </>
    )
}