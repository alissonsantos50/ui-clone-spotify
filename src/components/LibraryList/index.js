import React from "react";

import { Container } from "./styles";

function LibraryList() {
  return (
    <Container>
      <h1>YOUR LIBRARY</h1>
      <span>Made For You</span>
      <span>Recently Played</span>
      <span>Liked Songs</span>
      <span>Albums</span>
      <span>Artists</span>
      <span>Podcasts</span>
    </Container>
  );
}

export default LibraryList;
