import { createContext, useState, useEffect } from "react";

import axios from "axios";

const AlbumsContext = createContext({});

export const AlbumsProvider = ({ children }) => {
  const [albums, setAlbums] = useState([]);
  const [album, setAlbum] = useState({ images: [], artists: [], name: "" });
  const [artist, setArtist] = useState(null);
  const [tracks, setTracks] = useState([]);
  const [token, setToken] = useState(null);
  const [err, setErr] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const expiryTime = localStorage.getItem("token_expiry");
    if (!token && (!storedToken || Date.now() > expiryTime)) {
      const authString =
        "Basic " +
        btoa(
          import.meta.env.VITE_CLIENT_ID +
            ":" +
            import.meta.env.VITE_CLIENT_SECRET
        );
      axios
        .post(
          "https://accounts.spotify.com/api/token",
          "grant_type=client_credentials",
          {
            headers: {
              Authorization: authString,
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        )
        .then((response) => {
          const expiresInMilliseconds = response.data.expires_in * 1000;
          const newExpiryTime = Date.now() + expiresInMilliseconds;

          setToken(response.data.access_token);
          localStorage.setItem("token", response.data.access_token);
          localStorage.setItem("token_expiry", newExpiryTime.toString());
        })
        .catch((error) => {
          console.error("Error fetching Spotify token:", error);
        });
    } else if (!token && storedToken) {
      setToken(storedToken);
    }
  }, [token]);

  return (
    <AlbumsContext.Provider
      value={{
        albums,
        album,
        setAlbum,
        setAlbums,
        artist,
        setArtist,
        isOpen,
        setIsOpen,
        tracks,
        setTracks,
        setArtist,
        token,
        setToken,
        setErr,
        err,
      }}
    >
      {children}
    </AlbumsContext.Provider>
  );
};

export default AlbumsContext;
