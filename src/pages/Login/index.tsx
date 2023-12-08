import { LoginContainer, Logo, Wrapper } from "./styles";
import ImgLogo from "../../assets/logo.png"
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useNavigate} from 'react-router-dom';


export function Login() {
  const navigate = useNavigate();

  const navigateToContacts = () => {
    navigate('/teste');
  };

    return (
        <LoginContainer>
          <Wrapper>
            <Logo src={ImgLogo}/>
            <Input title="USUÁRIO"></Input>
            <Input title="SENHA"></Input>
            <Button title="LOGIN" functionClick={navigateToContacts}></Button>
          </Wrapper>
        </LoginContainer>
    )
}