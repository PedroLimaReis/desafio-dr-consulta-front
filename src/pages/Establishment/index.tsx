import { CircleButton, HomeContainer, InitTable, TbodyStyle, TdStyle, TextSpan, TextTitle, ThStyle, TheadStyle, TitleContainer, TrRowStyle, TrStyle, Wrapper } from "./styles";
import {useNavigate} from 'react-router-dom';
import { Menu } from "../../components/Menu";
import { Table } from "../../components/Table";


export function Establishment() {
  const navigate = useNavigate();

  const navigateToContacts = () => {
    navigate('/');
  };

    return (
        <HomeContainer>
          <Menu/>
          <Wrapper>
            <TitleContainer>
              <h1>TODOS OS ESTABELECIMENTOS</h1>
              <CircleButton> +</CircleButton>
            </TitleContainer>
            <InitTable>
              <TheadStyle>
                <TrStyle>
                  <ThStyle><TextTitle>Nome</TextTitle></ThStyle>
                  <ThStyle><TextTitle>CNPJ</TextTitle></ThStyle>
                  <ThStyle><TextTitle>Endereço</TextTitle></ThStyle>
                  <ThStyle><TextTitle>Telefone</TextTitle></ThStyle>
                  <ThStyle><TextTitle>Vagas para motos</TextTitle></ThStyle>
                  <ThStyle><TextTitle>Vagas para carros</TextTitle></ThStyle>
                </TrStyle>
              </TheadStyle>
              <TbodyStyle>
                  <TrRowStyle>
                    <TdStyle><TextSpan>ESTABELECIMENTO 01</TextSpan></TdStyle>
                    <TdStyle><TextSpan>00.000.000/0000-00</TextSpan></TdStyle>
                    <TdStyle><TextSpan>Rua X - 123 - CIDADE-SP</TextSpan></TdStyle>
                    <TdStyle><TextSpan>(00) 00000-0000</TextSpan></TdStyle>
                    <TdStyle><TextSpan>20</TextSpan></TdStyle>
                    <TdStyle><TextSpan>50</TextSpan></TdStyle>
                  </TrRowStyle>
                  <TrRowStyle>
                    <TdStyle><TextSpan>ESTABELECIMENTO 02</TextSpan></TdStyle>
                    <TdStyle><TextSpan>00.000.000/0000-02</TextSpan></TdStyle>
                    <TdStyle><TextSpan>Rua Y - 126 - CIDADE-SP</TextSpan></TdStyle>
                    <TdStyle><TextSpan>(00) 00000-0000</TextSpan></TdStyle>
                    <TdStyle><TextSpan>10</TextSpan></TdStyle>
                    <TdStyle><TextSpan>18</TextSpan></TdStyle>
                  </TrRowStyle>
                  <TrRowStyle>
                    <TdStyle><TextSpan>ESTABELECIMENTO 03</TextSpan></TdStyle>
                    <TdStyle><TextSpan>00.000.000/0000-07</TextSpan></TdStyle>
                    <TdStyle><TextSpan>Rua Z - 123 - CIDADE-SP</TextSpan></TdStyle>
                    <TdStyle><TextSpan>(00) 00000-0000</TextSpan></TdStyle>
                    <TdStyle><TextSpan>2</TextSpan></TdStyle>
                    <TdStyle><TextSpan>90</TextSpan></TdStyle>
                  </TrRowStyle>
              </TbodyStyle>
            </InitTable>
          </Wrapper>
        </HomeContainer>
    )
}