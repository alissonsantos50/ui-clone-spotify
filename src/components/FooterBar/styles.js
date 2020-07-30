import styled from "styled-components";
import {
  Heart,
  Repeat,
  Shuffle,
  VolumeMedium,
} from "styled-icons/ionicons-outline";
import {
  Play,
  PlaySkipForward,
  PlaySkipBack,
} from "styled-icons/ionicons-sharp";
import { Devices, PlaylistPlay } from "styled-icons/material-outlined";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 90px;
  width: 100vw;
  background: #282828;
  border-top: 1px solid var(--primary);
  z-index: 5;
`;

export const CurrentPlayingSong = styled.div`
  width: 30vw;
  display: flex;
  align-items: center;

  margin-left: 16px;

  img {
    width: 56px;
    height: 56px;
  }
`;

export const SongInfo = styled.div`
  height: 56px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  color: var(--white);

  padding: 10px 12px;

  h1 {
    font-size: 16px;
    font-weight: normal;
    cursor: default;

    &:hover {
      border-bottom: 1px solid var(--white);
    }
  }

  h2 {
    font-size: 12px;
    color: var(--lightGray);
    padding-bottom: 1px;
    cursor: default;

    &:hover {
      padding-bottom: 0;
      color: var(--white);
      border-bottom: 1px solid var(--white);
    }
  }

  svg {
    color: var(--lightGray);
  }
`;

export const LikeIcon = styled(Heart)`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  width: 18px;
  height: 18px;
  margin-left: 8px;
`;

export const Player = styled.div`
  height: 56px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const PlayIcon = styled(Play)`
  width: 18px;
  height: 18px;
`;

export const SkipPreviousIcon = styled(PlaySkipBack)`
  width: 18px;
  height: 18px;
`;

export const SkipNextIcon = styled(PlaySkipForward)`
  width: 18px;
  height: 18px;
`;

export const ShuffleIcon = styled(Shuffle)`
  width: 18px;
  height: 18px;
`;

export const RepeatIcon = styled(Repeat)`
  width: 18px;
  height: 18px;
`;

export const PlayerButtons = styled.div`
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--lightGray);

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    padding-left: 2px;
    width: 32px;
    height: 32px;
    border: 1px solid var(--lightGray);
    border-radius: 50%;
    transition: transform 0.1s;

    &:hover {
      border: 1px solid var(--white);
      color: var(--white);
      transform: scale(1.1);
    }
  }

  svg {
    transition: color 0.1s;

    &:hover {
      color: var(--white);
    }
  }
`;

export const PlayerProgressBar = styled.div`
  width: 40vw;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    color: var(--lightGray);
    font-size: 14px;
    cursor: default;
  }
`;

export const ProgressBar = styled.div`
  width: 642px;
  height: 4px;
  background: var(--gray);
  border-radius: 5px;
  margin: 0 8px;
`;

export const ActionMenu = styled.div`
  width: 30vw;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 20px;
  color: var(--lightGray);

  svg {
    margin: 0 2px 0 14px;
    transition: color 0.1s;

    &:hover {
      color: var(--white);
    }
  }
`;

export const QueueIcon = styled(PlaylistPlay)`
  width: 22px;
  height: 22px;
`;

export const DevicesIcon = styled(Devices)`
  width: 22px;
  height: 22px;
`;

export const VolumeIcon = styled(VolumeMedium)`
  width: 22px;
  height: 22px;
`;

export const VolumeBar = styled.div`
  width: 84px;
  height: 4px;
  background: var(--white);
  border-radius: 5px;
  margin: 0 8px;
`;
