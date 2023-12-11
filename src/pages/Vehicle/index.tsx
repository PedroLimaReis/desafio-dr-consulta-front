import { CircleButton, HomeContainer, TitleContainer, Wrapper } from "./styles";
import {useNavigate} from 'react-router-dom';
import { Menu } from "../../components/Menu";
import { Table } from "../../components/Table";


export function Vehicle() {
  const navigate = useNavigate();

  const navigateToContacts = () => {
    navigate('/');
  };

    return (
        <HomeContainer>
          <Menu/>
          <Wrapper>
            <TitleContainer>
              <h1>TODOS OS VEICULOS</h1>
              <CircleButton> +</CircleButton>
            </TitleContainer>
          </Wrapper>
        </HomeContainer>
    )
}