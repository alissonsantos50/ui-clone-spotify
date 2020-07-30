import styled from "styled-components";

export const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  max-width: 100vw;
  height: 100%;
  max-height: 100vh;
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 100vw;

  max-height: calc(100vh - 90px);
  min-height: calc(100vh - 90px);
`;
