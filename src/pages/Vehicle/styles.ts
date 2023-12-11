import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;
  
  background-color: red;

  display: flex;
  flex-direction: row;

`

export const Wrapper = styled.div`
  width: 100%;

  height: 100%;

  display: flex;
  align-items: center;
  
  /* background-color: #fff; */
  background-color: #fff;


  border-radius: 4px;
  flex-direction: column;
  
`
export const TitleContainer = styled.div`
  width: 90%;

  margin: 40px;

  display: flex;
  justify-content: space-between;

  font-weight: 200;

  font-size: 12px;


  color: #000;
`

export const CircleButton = styled.button`

  display: flex;

  background-color: #68c151;
  
  color: #fff;

  font-size: 18px;

  border: none;
  border-radius: 12px;

  padding: 8px 12px 8px 12px;

`