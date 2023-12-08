import { HomeContainer, Wrapper } from "./styles";
import {useNavigate} from 'react-router-dom';
import { Menu } from "../../components/Menu";


export function Establishment() {
  const navigate = useNavigate();

  const navigateToContacts = () => {
    navigate('/');
  };

    return (
        <HomeContainer>
          <Menu/>
          <Wrapper>
            <h1>PAGINA ESTABELECIMENTO</h1>
          </Wrapper>
        </HomeContainer>
    )
}