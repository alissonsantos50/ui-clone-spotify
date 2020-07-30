import React, { useState, useRef } from "react";

import {
  Container,
  TopNavigation,
  TopContent,
  NavigateButtons,
  SearchBar,
  Profile,
  Header,
  AlbumInfo,
  AlbumActions,
  SpaceDot,
  PlayButton,
  ActionButton,
  SearchIcon,
  NavigateLeftIcon,
  NavigateRightIcon,
  ExpandProfileIcon,
  HeaderBackground,
  LikeIcon,
  MoreIcon,
  AlbumContent,
  ListHeader,
  ListItem,
  SongDurationIcon,
  SongRatingIcon,
  PlayIcon,
  TopContainer,
  TopAlbumBar,
  TopAlbumInfo,
  TopAlbumBarActions,
  TopListHeader,
  AlbumCredit,
} from "./styles";

function Main(props) {
  const scrollRef = useRef();
  const [scrollPosition, setScrollPosition] = useState(0);

  function handleScroll() {
    const scrollTop = scrollRef.current.scrollTop;
    console.log(scrollTop);
    setScrollPosition(scrollTop);
  }

  return (
    <Container ref={scrollRef} onScroll={handleScroll}>
      <HeaderBackground>
        <TopContainer isScrolling={scrollPosition}>
          <TopNavigation id="top">
            <NavigateButtons>
              <NavigateLeftIcon />
              <NavigateRightIcon />
              <SearchBar>
                <SearchIcon />
                <input placeholder="Search" name="search" type="text" />
              </SearchBar>
            </NavigateButtons>
            <Profile>
              <img
                src="https://scontent.fcpq2-1.fna.fbcdn.net/v/t1.0-9/s960x960/46479933_1967510780023130_7817373445506727936_o.jpg?_nc_cat=100&_nc_sid=85a577&_nc_eui2=AeH_nuwAOXlMXNGscGyf3AmA-Gw0dhRbwyD4bDR2FFvDICcOeqZf8mg4YOB7IR4QlR1Ytu7dfhEgDX5h6oS0tOxk&_nc_ohc=pKaeWXet-KQAX9GNos7&_nc_ht=scontent.fcpq2-1.fna&_nc_tp=7&oh=52d83fd9dac43c856c9a2ae043dc9c7b&oe=5F44EC64"
                alt="Alisson"
              />
              <span>Alisson Santos</span>
              <ExpandProfileIcon />
            </Profile>
          </TopNavigation>

          <TopAlbumBar scrolled={scrollPosition}>
            <TopAlbumInfo>
              <img
                src="https://upload.wikimedia.org/wikipedia/pt/1/18/220px-SystemofaDownToxicityalbumcover.jpg"
                alt="Toxicity"
              />
              <h1>Toxicity</h1>
            </TopAlbumInfo>

            <TopAlbumBarActions>
              <PlayButton>PLAY</PlayButton>
              <ActionButton>
                <LikeIcon />
              </ActionButton>
              <ActionButton>
                <MoreIcon />
              </ActionButton>
            </TopAlbumBarActions>
          </TopAlbumBar>

          <TopListHeader scrolled={scrollPosition}>
            <span>#</span>
            <span></span>
            <span className="title">TITLE</span>
            <span>
              <SongDurationIcon />
            </span>
            <span>
              <LikeIcon />
            </span>
          </TopListHeader>
        </TopContainer>

        <TopContent>
          <Header>
            <img
              src="https://upload.wikimedia.org/wikipedia/pt/1/18/220px-SystemofaDownToxicityalbumcover.jpg"
              alt="Toxicity"
            />
            <AlbumInfo>
              <h2>ALBUM</h2>
              <h1>Toxicity</h1>
              <span>
                By <a href="http://spotify.com">System Of a Down</a>
              </span>
              <span>
                2001
                <SpaceDot />
                15 songs, 44 min
              </span>
              <AlbumActions>
                <PlayButton>PLAY</PlayButton>
                <ActionButton>
                  <LikeIcon />
                </ActionButton>
                <ActionButton>
                  <MoreIcon />
                </ActionButton>
              </AlbumActions>
            </AlbumInfo>
          </Header>
        </TopContent>
      </HeaderBackground>

      <AlbumContent>
        <ListHeader>
          <span>#</span>
          <span></span>
          <span className="title">TITLE</span>
          <span>
            <SongDurationIcon />
          </span>
          <span>
            <LikeIcon />
          </span>
        </ListHeader>

        <ListItem>
          <span className="songNumber">1</span>
          <span className="playSong">
            <PlayIcon />
          </span>
          <span>
            <LikeIcon />
          </span>
          <span className="title">Prison Song</span>
          <span>3:21</span>
          <span>
            <SongRatingIcon />
          </span>
        </ListItem>

        <ListItem>
          <span className="songNumber">2</span>
          <span className="playSong">
            <PlayIcon />
          </span>
          <span>
            <LikeIcon />
          </span>
          <span className="title">Needles</span>
          <span>3:14</span>
          <span>
            <SongRatingIcon />
          </span>
        </ListItem>

        <ListItem>
          <span className="songNumber">3</span>
          <span className="playSong">
            <PlayIcon />
          </span>
          <span>
            <LikeIcon />
          </span>
          <span className="title">Deer Dance</span>
          <span>2:55</span>
          <span>
            <SongRatingIcon />
          </span>
        </ListItem>

        <ListItem>
          <span className="songNumber">4</span>
          <span className="playSong">
            <PlayIcon />
          </span>
          <span>
            <LikeIcon />
          </span>
          <span className="title">Jet Pilot</span>
          <span>2:06</span>
          <span>
            <SongRatingIcon />
          </span>
        </ListItem>

        <ListItem>
          <span className="songNumber">5</span>
          <span className="playSong">
            <PlayIcon />
          </span>
          <span>
            <LikeIcon />
          </span>
          <span className="title">X</span>
          <span>1:58</span>
          <span>
            <SongRatingIcon />
          </span>
        </ListItem>

        <ListItem>
          <span className="songNumber">6</span>
          <span className="playSong">
            <PlayIcon />
          </span>
          <span>
            <LikeIcon />
          </span>
          <span className="title">Chop Suey</span>
          <span>3:30</span>
          <span>
            <SongRatingIcon />
          </span>
        </ListItem>

        <ListItem>
          <span className="songNumber">7</span>
          <span className="playSong">
            <PlayIcon />
          </span>
          <span>
            <LikeIcon />
          </span>
          <span className="title">Bounce</span>
          <span>1:54</span>
          <span>
            <SongRatingIcon />
          </span>
        </ListItem>

        <ListItem>
          <span className="songNumber">8</span>
          <span className="playSong">
            <PlayIcon />
          </span>
          <span>
            <LikeIcon />
          </span>
          <span className="title">Forest</span>
          <span>4:00</span>
          <span>
            <SongRatingIcon />
          </span>
        </ListItem>

        <ListItem>
          <span className="songNumber">9</span>
          <span className="playSong">
            <PlayIcon />
          </span>
          <span>
            <LikeIcon />
          </span>
          <span className="title">ATWA</span>
          <span>2:56</span>
          <span>
            <SongRatingIcon />
          </span>
        </ListItem>

        <ListItem>
          <span className="songNumber">10</span>
          <span className="playSong">
            <PlayIcon />
          </span>
          <span>
            <LikeIcon />
          </span>
          <span className="title">Science</span>
          <span>2:43</span>
          <span>
            <SongRatingIcon />
          </span>
        </ListItem>

        <ListItem>
          <span className="songNumber">11</span>
          <span className="playSong">
            <PlayIcon />
          </span>
          <span>
            <LikeIcon />
          </span>
          <span className="title">Shimmy</span>
          <span>1:51</span>
          <span>
            <SongRatingIcon />
          </span>
        </ListItem>

        <ListItem>
          <span className="songNumber">12</span>
          <span className="playSong">
            <PlayIcon />
          </span>
          <span>
            <LikeIcon />
          </span>
          <span className="title">Toxicity</span>
          <span>3:39</span>
          <span>
            <SongRatingIcon />
          </span>
        </ListItem>

        <ListItem>
          <span className="songNumber">13</span>
          <span className="playSong">
            <PlayIcon />
          </span>
          <span>
            <LikeIcon />
          </span>
          <span className="title">Psycho</span>
          <span>3:46</span>
          <span>
            <SongRatingIcon />
          </span>
        </ListItem>

        <ListItem>
          <span className="songNumber">14</span>
          <span className="playSong">
            <PlayIcon />
          </span>
          <span>
            <LikeIcon />
          </span>
          <span className="title">Aerials</span>
          <span>3:55</span>
          <span>
            <SongRatingIcon />
          </span>
        </ListItem>

        <ListItem>
          <span className="songNumber">15</span>
          <span className="playSong">
            <PlayIcon />
          </span>
          <span>
            <LikeIcon />
          </span>
          <span className="title">Arto</span>
          <span>2:14</span>
          <span>
            <SongRatingIcon />
          </span>
        </ListItem>

        <AlbumCredit>
          <h1>
            ℗ 2001 Columbia Records, a division of Sony Music Entertainment
          </h1>
        </AlbumCredit>
      </AlbumContent>
    </Container>
  );
}

export default Main;
