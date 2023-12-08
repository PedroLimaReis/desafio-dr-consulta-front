// import { InputStyle, TitleInputStyle } from "./styles";

import ImgLogo from "../../assets/logo.png"

import { Button, Logo, Wrapper } from "./styles";

export function Menu() {

    return (
      <>
        <Wrapper>
          <Logo src={ImgLogo}/>
          <Button>
            Estabelecimento
          </Button>
          <Button>
            Estabelecimento
          </Button>
        </Wrapper>
      </>
    )
}