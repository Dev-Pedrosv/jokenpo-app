import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
    text-decoration:none;
    border:none;
    outline:none;
    transition: 0.3s ease;
    font-family: 'Poppins', sans-serif;

  }

  body{
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    background-color: #1A1A1A;
  }

  button{
    cursor: pointer;

    &:hover{
      opacity: 0.8
    }

    &:active{
      opacity: 0.6
    }
  }
`;

export const Container = styled.div`
  width: 428px;
  padding: 20px 50px;
`;

export const Flex = styled.div`
  display: flex;
  width: 100%;
  align-items: ${(props) => props.align || "center"};
  justify-content: ${(props) => props.justify || "center"};
  flex-direction: ${(props) => props.direction || "row"};
  gap: ${(props) => props.gap || "16px"};
`;

export const Spacer = styled.div`
  width: 100%;
  margin: ${(props) => props.margin || "20px"};
`;

export const Typography = styled.p`
  font-weight: ${(props) => props.fontWeight || "700"};
  font-size: ${(props) => props.size || "18px"};
  line-height: ${(props) => props.lineHeight || "27px"};
  color: ${(props) => (props.primary ? "#1A1A1A" : "#ECECEC")};
`;

export const Rules = styled.button`
  width: 100%;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  background: transparent;
  color: #ececec;
`;
