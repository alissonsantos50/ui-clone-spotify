import React from "react";

import Sidebar from "../Sidebar";
import Main from "../Main";
import FriendActivity from "../FriendActivity";
import { Container } from "./styles";

function Layout() {
  return (
    <Container>
      <Sidebar />
      <Main />
      <FriendActivity />
    </Container>
  );
}

export default Layout;
