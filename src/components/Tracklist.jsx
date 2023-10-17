import { useEffect } from "react";

import { useNavigate, useParams } from "react-router-dom";

import axios from "axios";

import useAlbums from "../hooks/useAlbums";

import Track from "./Track";
import Button from "./Button";
import Vinyl from "./Vinyl";

const Tracklist = () => {
  const { token, tracks, setTracks, album, setAlbum } = useAlbums();
  const { albumId, artistId } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`https://api.spotify.com/v1/albums/${albumId}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        setTracks(response.data.tracks.items);
        setAlbum(response.data);
      })
      .catch((error) => console.log(error));
  }, [token, albumId, setTracks]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return !tracks.length ? (
    <Vinyl />
  ) : (
    <>
      <div className="absolute m-20">
        <Button
          handleClick={() => navigate(`/albums/${artistId}`)}
          text={"<"}
        />
      </div>
      <div className="flex flex-col pt-20 items-center min-h-screen pb-20">
        <div className="flex flex-col lg:flex-row  lg:w-1/3">
          <div className="lg:min-w-1/3 flex items-center justify-center">
            <div
              className="w-28 h-28 rounded bg-center bg-cover bg-no-repeat mb-1 lg:mb-4"
              style={{
                backgroundImage:
                  album.images && album.images[1]
                    ? `url(${album.images[1].url})`
                    : "none",
              }}
            ></div>
          </div>
          <div className="flex justify-center items-center mb-2 lg:justify-start lg:items-start max-w-md ml-3 flex-col mt-3">
            <div className="">
              <h1 className="text-2xl font-normal text-gray-300 text-center">
                {album?.name}
              </h1>
            </div>
            <h2 className="text-2xl font-normal text-center text-gray-400 mt-2">
              {album?.artists[0]?.name || ""}
            </h2>
          </div>
        </div>
        <div className="min-w-1/4 lg:w-1/3 bg-spotifyContainer rounded-md p-2">
          {tracks.map((song, index) => {
            return (
              <Track
                external={song.external_urls.spotify}
                key={song.id}
                order={index + 1}
                artistNames={song.artists}
                title={song.name}
                duration={song.duration_ms}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Tracklist;
