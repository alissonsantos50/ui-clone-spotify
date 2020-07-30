import styled from "styled-components";
import { Music, Volume2 } from "styled-icons/feather";
import { Play } from "styled-icons/ionicons-sharp";

export const Container = styled.div`
  min-width: 250px;
  height: 100%;
  max-height: calc(100vh - 90px);

  padding: 46px 18px 0;

  overflow: auto;

  h1.fixed {
    z-index: 9;
    position: fixed;
    min-width: 198px;
    top: 0;
    height: 46px;
    font-size: 20px;
    padding: 12px 0;
    background: var(--primary);
    border-bottom: 1px solid rgba(100, 100, 100, 0.2);
    cursor: default;
  }
`;

export const FriendImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 2;
  width: 40px;
  height: 40px;
  margin-right: 12px;

  border-radius: 50%;

  img {
    min-width: 40px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
`;

export const PlayFriendSong = styled.div`
  display: none;
  align-items: center;
  justify-content: center;

  z-index: 3;
  min-width: 40px;
  margin-left: -40px;
  width: 40px;
  height: 40px;
  background: transparent;
  border-radius: 50%;
  border: 1px solid var(--lightGray);
  transition: transform 0.1s;

  &:hover {
    transform: scale(1.1);
    border: 1px solid var(--white);
    background: rgba(0, 0, 0, 0.5);

    svg {
      color: var(--white);
    }
  }

  svg {
    z-index: 4;
    width: 25px;
    height: 25px;
    outline: 0;
    color: var(--lightGray);
  }
`;

export const PlayIcon = styled(Play)``;

export const FriendContainer = styled.div`
  display: flex;
  align-items: center;
  max-height: 86px;
  height: 86px;

  margin: 22px 0 24px 0;

  &:hover {
    .friend img {
      opacity: 0.2;
    }

    .play {
      display: flex;
    }
  }

  svg {
    width: 18px;
    height: 18px;
  }
`;

export const FriendInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  h1 {
    font-size: 14px;
    border: 0;
    padding: 2px 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    cursor: pointer;

    &:hover {
      color: var(--white);
      border-bottom: 1px solid var(--white);
      padding: 2px 0 1px 0;
    }
  }

  span {
    position: relative;
    max-width: 128px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 12px;
    color: var(--lightGray);
    padding: 3px 0;
    width: auto;

    cursor: pointer;

    &:last-child {
      padding-top: 8px;
      font-size: 11px;

      &:hover {
        padding: 8px 0 2px 0;
      }
    }

    &:hover {
      color: var(--white);
      border-bottom: 1px solid var(--white);
      padding: 3px 0 2px 0;
    }
  }
`;

export const ListeningInfo = styled.div`
  display: flex;
  width: 18px;
  height: 86px;
  flex-direction: column;
  align-items: flex-start;
`;

export const AudioIcon = styled(Volume2)`
  float: right;
`;

export const PlaylistIcon = styled(Music)``;
