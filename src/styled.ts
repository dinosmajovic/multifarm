import styled from "styled-components";
import _Chart from "./components/Chart";

export const Header = styled.h1`
  color: rgb(102, 200, 255);
  margin-bottom: 30px;
  min-height: 37.5px;

  > span {
    font-weight: 400;
    color: #fff;
  }
`;

export const AppContainer = styled.div`
  background-color: #272d49;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 40px 40px;
`;

export const ChartsRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: 1020px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Chart = styled(_Chart)`
  width: 100%;

  :not(:last-child) {
    margin-bottom: 24px;
  }

  @media (min-width: 1020px) {
    width: calc(50% - 12px);
    margin-bottom: 0px;
  }
`;

export const ErrorContainer = styled.div`
  background-color: #39406a;
  border-radius: 15px;
  width: 400px;
  margin: 100px auto;
  display: flex;
  justify-content: center;
`;

export const Error = styled.h1`
  color: #dc4dff;
  font-size: 24px;
  font-weight: 400;
`;
