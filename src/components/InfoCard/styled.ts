import styled from "styled-components";

export const StyledInfoCard = styled.div`
  width: 100%;
  max-width: 450px;
  padding: 20px 26px;
  border-radius: 15px;
  margin-top: 24px;
  background: linear-gradient(111.6deg, #303659 -2.51%, #292e4d 104.46%);
  color: #fff;

  > h4 {
    margin: 0 0 16px 0px;
  }

  > div {
    width: 100%;
    padding: 10px 16px;
    border-radius: 8px;
    background-color: #39406a;

    display: flex;

    :not(:last-child) {
      margin-bottom: 12px;
    }

    > h5 {
      width: 35%;
      margin: 0;
    }

    > span {
      font-size: 14px;
    }
  }
`;

export const LoaderContainer = styled.span`
  width: 100%;
  min-height: 230px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
