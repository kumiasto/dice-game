import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

export const ModalWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: rgba(211, 211, 211, 0.9);
  width: 50%;
  height: 50%;
`;

export const GameInfoWrapper = styled.main`
  margin-left: 10vh;
`;

export const DiceWrapper = styled.main`
  margin-right: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  align-items: space-between;
`;

export const Button = styled.button`
  padding: 1vh 2vh;
  background-color: transparent;
  border: 1px solid #d3d3d3;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  letter-spacing: 0.1vh;
`;

export const HistoryWrapper = styled.div`
  display: flex;
`;
