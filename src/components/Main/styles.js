import styled from "styled-components";
import {
  Search,
  ChevronBack,
  ChevronForward,
  ChevronDown,
  Heart,
  EllipsisHorizontal,
  Time,
} from "styled-icons/ionicons-outline";
import { StatsChart, Play } from "styled-icons/ionicons-sharp";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: calc(100vw - 232px - 250px);
  max-height: 100%;

  background-color: var(--secondary);
  color: var(--lightGray);
  overflow: auto;
  z-index: 1;
`;

export const HeaderBackground = styled.div`
  width: 100%;
  max-width: inherit;
  max-height: 365px;
  background: rgb(88, 88, 88);
  background: linear-gradient(
    180deg,
    rgba(88, 88, 88, 0.700717787114846) 0%,
    rgba(27, 27, 27, 1) 100%
  );
`;

export const TopContainer = styled.div`
  position: fixed;
  top: 0;

  display: flex;
  flex-direction: column;

  width: inherit;
  max-width: inherit;
  margin-left: -10px;
  margin: 0;
  z-index: 2;
  transition: background 0.2s ease;

  overflow: hidden;

  background: ${(props) =>
    props.isScrolling >= 50
      ? "linear-gradient(180deg, rgba(18,18,18,1) 0%, rgba(18,18,18,0.8) 50%, rgba(18,18,18,0) 100%)"
      : "transparent"};

  background-color: ${(props) =>
    props.isScrolling >= 180 ? "#121212" : "transparent"};
`;

export const TopNavigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 12px 24px 12px 12px;

  color: var(--white);

  svg {
    width: 28px;
    height: 28px;
    color: rgba(241, 241, 241, 0.8);
  }
`;

export const TopAlbumBar = styled.div`
  height: 60px;

  width: inherit;
  max-width: inherit;
  padding-left: 20px;
  padding-right: 60px;

  align-items: center;
  justify-content: space-between;

  color: var(--white);
  background: var(--primary);

  border-bottom: 1px solid rgba(100, 100, 100, 0.2);

  display: ${(props) => (props.scrolled <= 180 ? "none" : "flex")};

  svg {
    width: 18px;
    height: 18px;
  }
`;

export const TopAlbumInfo = styled.div`
  display: flex;

  img {
    width: 36px;
    height: 36px;
    margin-right: 12px;
  }
`;

export const TopAlbumBarActions = styled.div`
  display: flex;
`;

export const TopListHeader = styled.div`
  display: ${(props) => (props.scrolled <= 194 ? "none" : "flex")};
  align-items: center;
  justify-content: space-between;

  width: inherit;
  max-width: inherit;
  background: var(--secondary);

  padding: 6px 48px 6px 32px;

  color: var(--gray);
  border-bottom: 1px solid rgba(100, 100, 100, 0.2);

  svg {
    width: 20px;
    height: 20px;
  }

  span,
  span.songNumber,
  span.playSong {
    width: 50px;
    padding: 0 8px;
  }

  .title {
    width: 100%;
    padding: 0 8px;
  }
`;

export const NavigateButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavigateLeftIcon = styled(ChevronBack)``;

export const NavigateRightIcon = styled(ChevronForward)``;

export const ExpandProfileIcon = styled(ChevronDown)``;

export const SearchIcon = styled(Search)``;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 180px;
  height: 24px;
  background: #fff;
  border-radius: 50px;
  margin-left: 12px;
  padding: 8px;

  svg {
    width: 18px;
    height: 18px;
    color: #000;
    margin-right: 4px;
  }

  input {
    width: 100%;
    color: #000;
    outline: 0;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 28px;
    height: 28px;
    border-radius: 50%;
  }
  span {
    font-size: 14px;
    padding: 0 12px 0 8px;
  }
`;

export const TopContent = styled.div`
  display: flex;
  align-items: center;

  padding: 60px 20px 10px 30px;
`;

export const Header = styled.div`
  display: flex;

  max-height: 232px;

  img {
    width: 232px;
    height: 232px;
  }
`;

export const AlbumInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  margin-left: 20px;

  color: var(--white);

  h2 {
    font-size: 14px;
    font-weight: 300;
    font-stretch: condensed;
  }

  h1 {
    font-size: 48px;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    color: var(--lightGray);
    margin: 8px 0;

    a {
      text-decoration: none;
      color: var(--white);
      margin-left: 4px;

      &:hover {
        border-bottom: 1px solid var(--white);
      }
    }
  }
`;

export const AlbumActions = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;

  svg {
    width: 18px;
    height: 18px;
  }
`;

export const SpaceDot = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--lightGray);
  margin: 0 4px;
`;

export const PlayButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 104px;
  height: 32px;
  background: var(--green);
  border-radius: 50px;
  margin-right: 8px;

  font-size: 12px;
  font-weight: bold;
`;

export const ActionButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;
  border: 1px solid var(--lightGray);
  border-radius: 50%;
  margin: 0 4px;
`;

export const LikeIcon = styled(Heart)``;

export const MoreIcon = styled(EllipsisHorizontal)``;

export const AlbumContent = styled.div`
  max-width: 100%;
  max-height: 100%;

  margin: 0 32px;

  span,
  span.songNumber,
  span.playSong {
    width: 50px;
    padding: 0 8px;
  }

  .title {
    width: 100%;
    padding: 0 8px;
  }
`;

export const ListHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 12px 0;

  color: var(--gray);
  border-bottom: 1px solid rgba(100, 100, 100, 0.2);

  svg {
    width: 20px;
    height: 20px;
  }
`;

export const SongDurationIcon = styled(Time)``;

export const SongRatingIcon = styled(StatsChart)``;

export const ListItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  min-height: 46px;
  max-height: 46px;

  border-bottom: 1px solid rgba(100, 100, 100, 0.2);

  &:last-child {
    border-bottom: 0;
  }

  &:hover {
    background: rgba(100, 100, 100, 0.2);
    border-bottom: 0;
    padding-bottom: 1px;

    &:last-child {
      border-bottom: 0;
    }

    span.songNumber {
      display: none;
    }

    span.playSong {
      width: 45.4px;
      display: block;
    }
  }

  .title {
    color: var(--white);
  }

  span.playSong {
    display: none;

    svg {
      width: 32px;
      height: 32px;
      border: 1px solid var(--lightGray);
      border-radius: 50%;
      padding: 4px 4px 4px 6px;

      &:hover {
        border: 1px solid var(--white);
        color: var(--white);
        transform: scale(1.1);
        outline: 0;
      }
    }
  }

  span {
    cursor: default;
  }

  svg {
    width: 20px;
    height: 20px;

    &:hover {
      color: var(--white);
    }
  }
`;

export const AddToPlaylistIcon = styled(LikeIcon)``;

export const PlayIcon = styled(Play)``;

export const AlbumCredit = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 80px;
  width: 100%;

  h1 {
    font-size: 14px;
    font-weight: normal;
  }
`;
