import { useState, useEffect, useCallback, useRef } from "react";

import { LoginContainer, Logo, Wrapper } from "./styles";
import ImgLogo from "../../assets/logo.png"
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useNavigate } from 'react-router-dom';
import { useUser } from "../../contexts/user";


export function Login() {
  const credentials = useRef({ username: '', password: '' });

  const navigate = useNavigate();
  const { login, isError, isLoading } = useUser();

  const navigateToHome = useCallback(async () => {
    const {username, password} = credentials.current;
    const isSuccess = await login(username, password);

    if (isSuccess) {
      navigate('/home');
    }
  }, []);

  return (
    <LoginContainer>
      <Wrapper>
        <Logo src={ImgLogo} />
        <Input title="USUÁRIO" onChange={e => credentials.current.username = e.target.value} />
        <Input type="password" title="SENHA" onChange={e => credentials.current.password = e.target.value} />
        <Button title="LOGIN" functionClick={navigateToHome}></Button>
        {isError && <p>Usuário e/ou senha inválidos</p>}
        {isLoading && <p>Carregando...</p>}
      </Wrapper>
    </LoginContainer>
  )
}