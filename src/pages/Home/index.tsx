import { CircleButton, HomeContainer, TitleContainer, Wrapper } from "./styles";
import {useNavigate} from 'react-router-dom';
import { Menu } from "../../components/Menu";
import { Table } from "../../components/Table";


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
              <h1>ESTABELECIMENTO 01 - CNPJ: 00.000.000/0001-00</h1>
              <CircleButton> +</CircleButton>
            </TitleContainer>
            <Table/>
          </Wrapper>
        </HomeContainer>
    )
}