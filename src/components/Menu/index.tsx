// import { InputStyle, TitleInputStyle } from "./styles";

import { useNavigate } from "react-router-dom";
import ImgLogo from "../../assets/logo.png"

import { Button, Logo, Wrapper, WrapperLogo } from "./styles";

export function Menu() {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate('/home');
  };

  const navigateToEstablishment = () => {
    navigate('/establishments');
  };

  const navigateToVehicles = () => {
    navigate('/vehicles');
  };


    return (
      <>
        <Wrapper>
          <WrapperLogo>
            <Logo src={ImgLogo}/>
          </WrapperLogo>
          <Button onClick={navigateToHome}>
            Menu
          </Button>
          <Button onClick={navigateToEstablishment}>
            Estabelecimento
          </Button>
          <Button onClick={navigateToVehicles}>
            Veiculos
          </Button>
        </Wrapper>
      </>
    )
}