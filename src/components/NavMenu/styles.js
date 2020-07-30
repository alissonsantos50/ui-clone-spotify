import styled from "styled-components";
import { HomeFill } from "styled-icons/octicons";
import { LibraryMusic } from "styled-icons/material-outlined";
import { Radio } from "styled-icons/ionicons-outline";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 30px;
`;

export const HomeIcon = styled(HomeFill)`
  width: 24px;
  height: 24px;
`;
export const BrowseIcon = styled(LibraryMusic)`
  width: 24px;
  height: 24px;
`;
export const RadioIcon = styled(Radio)`
  width: 24px;
  height: 24px;
`;

export const NavButton = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  padding-left: 25px;
  color: var(--gray);
  cursor: default;
  transition: color 0.1s;

  &:hover {
    color: var(--white);
  }

  &.selected {
    border-left: 5px solid var(--green);
    padding-left: 20px;
    color: var(--white);
  }

  span {
    margin-left: 22px;
  }
`;
