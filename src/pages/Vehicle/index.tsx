import {useEffect} from 'react'

import { CircleButton, HomeContainer, InitTable, TbodyStyle, TdStyle, TextSpan, TextTitle, ThStyle, TheadStyle, TitleContainer, TrRowStyle, TrStyle, Wrapper } from "./styles";
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
            <InitTable>
              <TheadStyle>
                <TrStyle>
                  <ThStyle><TextTitle>Marca</TextTitle></ThStyle>
                  <ThStyle><TextTitle>Modelo</TextTitle></ThStyle>
                  <ThStyle><TextTitle>Cor</TextTitle></ThStyle>
                  <ThStyle><TextTitle>Placa</TextTitle></ThStyle>
                  <ThStyle><TextTitle>Tipo</TextTitle></ThStyle>
                </TrStyle>
              </TheadStyle>
              <TbodyStyle>
                  <TrRowStyle>
                    <TdStyle><TextSpan>FIAT</TextSpan></TdStyle>
                    <TdStyle><TextSpan>Pulse</TextSpan></TdStyle>
                    <TdStyle><TextSpan>Preto</TextSpan></TdStyle>
                    <TdStyle><TextSpan>HPB-9637</TextSpan></TdStyle>
                    <TdStyle><TextSpan>Carro</TextSpan></TdStyle>
                  </TrRowStyle>
                  <TrRowStyle>
                    <TdStyle><TextSpan>Volkswagen</TextSpan></TdStyle>
                    <TdStyle><TextSpan>Gol</TextSpan></TdStyle>
                    <TdStyle><TextSpan>Preto</TextSpan></TdStyle>
                    <TdStyle><TextSpan>MTC-9253</TextSpan></TdStyle>
                    <TdStyle><TextSpan>Carro</TextSpan></TdStyle>
                  </TrRowStyle>
                  <TrRowStyle>
                    <TdStyle><TextSpan>Honda</TextSpan></TdStyle>
                    <TdStyle><TextSpan>Twister</TextSpan></TdStyle>
                    <TdStyle><TextSpan>Preto</TextSpan></TdStyle>
                    <TdStyle><TextSpan>JSG-6788</TextSpan></TdStyle>
                    <TdStyle><TextSpan>Moto</TextSpan></TdStyle>
                  </TrRowStyle>
                  <TrRowStyle>
                    <TdStyle><TextSpan>FIAT</TextSpan></TdStyle>
                    <TdStyle><TextSpan>Cronos</TextSpan></TdStyle>
                    <TdStyle><TextSpan>Branco</TextSpan></TdStyle>
                    <TdStyle><TextSpan>JSG-1234</TextSpan></TdStyle>
                    <TdStyle><TextSpan>Carro</TextSpan></TdStyle>
                  </TrRowStyle>
                  <TrRowStyle>
                    <TdStyle><TextSpan>Suzuki</TextSpan></TdStyle>
                    <TdStyle><TextSpan>GSX-8R</TextSpan></TdStyle>
                    <TdStyle><TextSpan>Preto</TextSpan></TdStyle>
                    <TdStyle><TextSpan>JSG-3456</TextSpan></TdStyle>
                    <TdStyle><TextSpan>Moto</TextSpan></TdStyle>
                  </TrRowStyle>
              </TbodyStyle>
            </InitTable>
          </Wrapper>
        </HomeContainer>
    )
}