import styled from "styled-components";

export const Container = styled.div`
  background: linear-gradient(111.6deg, #303659 -2.51%, #292e4d 104.46%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 380px;
  padding: 20px;
  border-radius: 15px;
`;

export const StyledTooltip = styled.div`
  color: rgb(255, 255, 255);
  padding: 12px 12px;
  border-radius: 10px;
  background-color: #292e4d;

  > p {
    font-size: 13px;
    margin: 0;

    :not(:last-child) {
      margin-bottom: 8px;
    }
  }
`;

export const Title = styled.h1`
  padding-bottom: 20px;
  font-size: 16px;
  color: #fff;
  margin-bottom: auto;
`;

export const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: auto;
`;
