import React from "react";

import {
  Container,
  NavButton,
  HomeIcon,
  BrowseIcon,
  RadioIcon,
} from "./styles";

function NavMenu() {
  return (
    <Container>
      <NavButton className="selected">
        <HomeIcon />
        <span>Home</span>
      </NavButton>

      <NavButton>
        <BrowseIcon />
        <span>Browse</span>
      </NavButton>

      <NavButton>
        <RadioIcon />
        <span>Radio</span>
      </NavButton>
    </Container>
  );
}

export default NavMenu;
