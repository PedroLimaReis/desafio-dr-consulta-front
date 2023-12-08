import { HomeContainer, Wrapper } from "./styles";
import {useNavigate} from 'react-router-dom';
import { Menu } from "../../components/Menu";


export function Vehicle() {
  const navigate = useNavigate();

  const navigateToContacts = () => {
    navigate('/');
  };

    return (
        <HomeContainer>
          <Menu/>
          <Wrapper>
            <h1>VEHICLES 01</h1>
          </Wrapper>
        </HomeContainer>
    )
}