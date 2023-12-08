import styled from "styled-components";
import backgroundWallpaper from '../../assets/wallpaper-mar.jpeg'

export const LoginContainer = styled.div`
  width: 100vw;
  height: 100vh;

  
  background-image: url(${backgroundWallpaper});
  background-repeat: no-repeat;


  display: flex;
  justify-content: center;
  align-items: center;

`

export const Wrapper = styled.div`
  width: 100%;
  max-width:  500px;

  height: 100%;
  max-height: 550px;

  display: flex;
  justify-content: center;
  align-items: center;
  
  background-color: #fff;

  border-radius: 4px;
  flex-direction: column;
  
`

export const Logo = styled.img`
  width: 25%;
`

