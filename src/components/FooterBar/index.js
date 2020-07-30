import React from "react";

import {
  Container,
  CurrentPlayingSong,
  SongInfo,
  Player,
  PlayerButtons,
  PlayerProgressBar,
  ProgressBar,
  ActionMenu,
  VolumeBar,
  LikeIcon,
  ShuffleIcon,
  SkipPreviousIcon,
  SkipNextIcon,
  PlayIcon,
  RepeatIcon,
  QueueIcon,
  DevicesIcon,
  VolumeIcon,
} from "./styles";

function FooterBar() {
  return (
    <Container>
      <CurrentPlayingSong>
        <img
          src="https://upload.wikimedia.org/wikipedia/pt/1/18/220px-SystemofaDownToxicityalbumcover.jpg"
          alt="Toxicity"
        />
        <SongInfo>
          <h1>Chop Suey</h1>
          <h2>System Of a Down</h2>
        </SongInfo>
        <LikeIcon />
      </CurrentPlayingSong>

      <Player>
        <PlayerButtons>
          <ShuffleIcon />
          <SkipPreviousIcon />
          <div>
            <PlayIcon />
          </div>
          <SkipNextIcon />
          <RepeatIcon />
        </PlayerButtons>
        <PlayerProgressBar>
          <span>0:00</span>
          <ProgressBar />
          <span>3:23</span>
        </PlayerProgressBar>
      </Player>

      <ActionMenu>
        <QueueIcon />
        <DevicesIcon />
        <VolumeIcon />
        <VolumeBar />
      </ActionMenu>
    </Container>
  );
}

export default FooterBar;
