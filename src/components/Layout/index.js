import React from "react";

import Sidebar from "../Sidebar";
import Main from "../Main";
import FooterBar from "../FooterBar";
import FriendActivity from "../FriendActivity";
import { ContainerWrapper, Container } from "./styles";

function Layout() {
  return (
    <ContainerWrapper>
      <Container>
        <Sidebar />
        <Main />
        <FriendActivity isHidden />
      </Container>
      <FooterBar />
    </ContainerWrapper>
  );
}

export default Layout;
