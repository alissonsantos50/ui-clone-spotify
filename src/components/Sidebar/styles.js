import styled from "styled-components";
import { AddCircle } from "styled-icons/ionicons-outline";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  min-width: 232px;
  max-width: 232px;
  min-height: 100%;
`;

export const AddIcon = styled(AddCircle)`
  width: 28px;
  height: 28px;
`;

export const NewPlaylist = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  min-height: 50px;
  padding-left: 20px;

  color: var(--gray);
  background: var(--primary);
  border-top: 1px solid rgba(100, 100, 100, 0.2);
  transition: color 0.1s;

  cursor: default;

  &:hover {
    color: var(--white);
  }

  h1 {
    font-size: 14px;
    margin-left: 8px;
  }
`;
