import React from "react";

import NavMenu from "../NavMenu";
import NavList from "../NavList";

import { Container, NewPlaylist, AddIcon } from "./styles";

function Sidebar() {
  return (
    <Container>
      <NavMenu />
      <NavList />
      <NewPlaylist>
        <AddIcon />
        <h1>New Playlist</h1>
      </NewPlaylist>
    </Container>
  );
}

export default Sidebar;
