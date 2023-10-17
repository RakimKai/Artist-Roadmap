import { useEffect } from "react";

import { useNavigate, useParams } from "react-router-dom";

import useAlbums from "../hooks/useAlbums";

import Album from "./Album";
import Button from "./Button";
import axios from "axios";
import Vinyl from "./Vinyl";

const Albums = () => {
  const { albums, setAlbums, token } = useAlbums();
  const { artistId } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const fetchAlbums = async () => {
      if (token && artistId) {
        try {
          const response = await axios.get(
            `https://api.spotify.com/v1/artists/${artistId}/albums`,
            {
              headers: {
                Authorization: "Bearer " + token,
              },
            }
          );

          setAlbums(response.data.items);
        } catch (error) {
          console.error("Spotify API error:", error);
        }
      }
    };

    fetchAlbums();
  }, [artistId, token]);
  const filteredAlbums = albums
    .filter((album) => album.album_type === "album")
    .reverse();

  return (
    <>
      {!filteredAlbums.length ? (
        <Vinyl />
      ) : (
        <div className="relative px-24">
          <div className="absolute top-5 left-10">
            <Button handleClick={() => navigate("/")} text={"<"} />
          </div>
          {filteredAlbums.length === 1 ? (
            <div className="flex justify-center items-center min-h-screen">
              <Album
                url={filteredAlbums[0].images[0].url}
                order={1}
                title={filteredAlbums[0].name}
                date={filteredAlbums[0].release_date}
                albumId={filteredAlbums[0].id}
              />
            </div>
          ) : (
            filteredAlbums.map((el, index) => (
              <Album
                url={el.images[0].url}
                key={index}
                order={index % 2 === 1 ? 2 : 1}
                title={el.name}
                date={el.release_date}
                albumId={el.id}
              />
            ))
          )}
        </div>
      )}
    </>
  );
};

export default Albums;
