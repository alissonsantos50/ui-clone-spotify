import React from "react";

import LibraryList from "../LibraryList";
import Playlists from "../Playlists";

import { Container } from "./styles";

function NavList() {
  return (
    <Container>
      <LibraryList />
      <Playlists />
    </Container>
  );
}

export default NavList;
