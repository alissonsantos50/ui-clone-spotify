import React, { useEffect, useState } from "react";

import api from "../../services/api";

import { Container } from "./styles";

function Playlists() {
  const [playlists, setPlaylists] = useState(() => {
    const storagedPlaylists = localStorage.getItem("@SpotifyClonePlaylists");

    if (storagedPlaylists) {
      return JSON.parse(storagedPlaylists);
    }
    return [];
  });

  useEffect(() => {
    api.get("users/12169522885/playlists").then((response) => {
      setPlaylists(response.data.items);
      localStorage.setItem("@SpotifyClonePlaylists", JSON.stringify(playlists));
      console.log("Chamando API spotify");
    });
  }, []);

  return (
    <Container>
      <h1>PLAYLISTS</h1>
      {playlists.map((playlist) => (
        <span key={playlist.id}>{playlist.name}</span>
      ))}
    </Container>
  );
}

export default Playlists;
