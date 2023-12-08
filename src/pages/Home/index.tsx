import { HomeContainer, TitleContainer, Wrapper } from "./styles";
import {useNavigate} from 'react-router-dom';
import { Button } from "../../components/Button";
import { Menu } from "../../components/Menu";


export function Home() {
  const navigate = useNavigate();

  const navigateToContacts = () => {
    navigate('/');
  };

    return (
        <HomeContainer>
          <Menu/>
          <Wrapper>
            <TitleContainer>
              <h1>ESTACIONAMENTO 01</h1>
            </TitleContainer>
          </Wrapper>
        </HomeContainer>
    )
}