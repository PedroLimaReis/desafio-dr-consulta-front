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
export const InitTable = styled.table`

  width: 90%;
  
  display: flex;
  flex-direction: column;
`

// ------------------------------------------------------------

export const TheadStyle = styled.thead`
  width: 100%;
  display: flex;

`


export const TrStyle = styled.tr`
  width: 100%;
  
  display: flex;
  flex-direction: row;
  
`


export const ThStyle = styled.table`
  width: 100%;
  background-color: #6E7BD9;

  border: 1.5px solid #000;
  
  display: flex;

`

// ------------------------------------------------------------

export const TbodyStyle = styled.table`
  width: 100%;  
  display: flex;

  flex-direction: column;

`

export const TrRowStyle = styled.table`
  width: 100%;
  
  display: flex;
  flex-direction: row;
`

export const TdStyle = styled.table`
  width: 100%;
  background-color: #fff;
  
  display: flex;

  border: 1.5px solid #000;

`

// ------------------------------------------------------------

export const TextTitle = styled.span`
  font-size: 20px;
  font-weight: bold;

  padding: 10px;

  color: #fff;

  margin-left: 24px;

  
`

export const TextSpan = styled.span`
  font-size: 14px;
  font-weight: bold;

  padding: 6px;

  color: #000;

  margin-left: 24px;
`