import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 25px;
  margin-top: 30px;

  h1 {
    font-size: 14px;
    font-weight: 300;
    font-stretch: condensed;
    color: var(--gray);
  }

  span {
    font-size: 14px;
    font-weight: bold;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: var(--gray);
    margin: 8px 0;
    cursor: default;
    transition: color 0.1s;

    &:hover {
      color: var(--white);
    }
  }
`;
