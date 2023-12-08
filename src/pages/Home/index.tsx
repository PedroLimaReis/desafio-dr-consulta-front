import { HomeContainer, Wrapper } from "./styles";
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
            <h1>teste</h1>
          </Wrapper>
        </HomeContainer>
    )
}