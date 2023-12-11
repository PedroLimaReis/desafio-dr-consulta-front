import { Button } from "../Button";
import { InitTable, TbodyStyle, TdStyle, TextSpan, TextTitle, ThStyle, TheadStyle, TrRowStyle, TrStyle } from "./styles";

export function Table() {

    return (
      <>
        <InitTable>
          <TheadStyle>
            <TrStyle>
              <ThStyle><TextTitle>Veiculo Estacionado</TextTitle></ThStyle>
              <ThStyle><TextTitle>Check-In</TextTitle></ThStyle>
              <ThStyle><TextTitle>Check-Out</TextTitle></ThStyle>
            </TrStyle>
          </TheadStyle>
          <TbodyStyle>
              <TrRowStyle>
                <TdStyle><TextSpan>FIAT - Pulse - Preto - HPB-9637 - Carro</TextSpan></TdStyle>
                <TdStyle><TextSpan>09/12/2023 - 08:00</TextSpan></TdStyle>
                <TdStyle><Button title="Fazer CheckOut">stock</Button></TdStyle>
              </TrRowStyle>
              <TrRowStyle>
                <TdStyle><TextSpan>Volkswagen - Gol - Preto - MTC-9253 - Carro</TextSpan></TdStyle>
                <TdStyle><TextSpan>09/12/2023 - 08:32</TextSpan></TdStyle>
                <TdStyle><Button title="Fazer CheckOut">stock</Button></TdStyle>
              </TrRowStyle>
              <TrRowStyle>
                <TdStyle><TextSpan>Honda - Argo - Twister - JSG-6788 - Moto</TextSpan></TdStyle>
                <TdStyle><TextSpan>09/12/2023 - 08:55</TextSpan></TdStyle>
                <TdStyle><Button title="Fazer CheckOut">stock</Button></TdStyle>
              </TrRowStyle>
              <TrRowStyle>
                <TdStyle><TextSpan>FIAT - Cronos - Branco - JSG-1234 - Carro</TextSpan></TdStyle>
                <TdStyle><TextSpan>09/12/2023 - 09:12</TextSpan></TdStyle>
                <TdStyle><TextSpan>09/12/2023 - 09:30</TextSpan></TdStyle>
              </TrRowStyle>
              <TrRowStyle>
                <TdStyle><TextSpan>Suzuki - GSX-8R - Preto - JSG-3456 - Moto</TextSpan></TdStyle>
                <TdStyle><TextSpan>09/12/2023 - 09:15</TextSpan></TdStyle>
                <TdStyle><TextSpan>09/12/2023 - 15:15</TextSpan></TdStyle>
              </TrRowStyle>
          </TbodyStyle>
        </InitTable>
      </>
    )
}