import { useRef } from "react";

import { useNavigate } from "react-router-dom";

import axios from "axios";

import useAlbums from "../hooks/useAlbums";

import Button from "./Button";
import Modal from "./Modal";

const InputArtist = () => {
  const { setArtist, token, err, setErr, isOpen, setIsOpen } = useAlbums();
  const inputRef = useRef();
  const navigate = useNavigate();
  const handleConfirm = async () => {
    try {
      const artistResponse = await axios
        .get(
          `https://api.spotify.com/v1/search?q=${encodeURIComponent(
            inputRef.current.value
          )}&type=artist`,
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        )
        .catch((err) => console.log(err.response ? err.response.data : err));

      const artists = artistResponse.data.artists.items;
      if (artists.length === 0) {
        setErr("No artists found with that name.");
        setIsOpen(true);
        console.log(err);
        return;
      }

      const selectedArtist = artists[0];
      setArtist(selectedArtist);
      navigate(`/albums/${selectedArtist.id}`);
    } catch (error) {
      console.error("Error during the fetching process:", error);
    }
  };

  return (
    <div className="flex flex-col pt-28 items-center min-h-screen">
      <div className="flex flex-col items-center ">
        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
          {err}
        </Modal>
        <h1 className="text-6xl font-light text-gray-400 text-center mb-10 uppercase">
          Down the melody lane
        </h1>
        <div className="w-1/2 h-1  bg-spotifyGreen rounded"></div>
      </div>
      <div className="p-5 bg-spotifyContainer flex flex-col justify-center items-center rounded border-2 border-spotifyContainer hover:border-spotifyGreen/50 w-1/2 lg:w-1/4 h-40 mt-20 transition-all duration-200 ease-in">
        <div className="flex flex-wrap flex-col justify-center items-center gap-y-2">
          <h2
            className="text-lg font-normal 
           text-gray-300"
          >
            Enter an artist name:
          </h2>
          <div className="rounded">
            <input
              ref={inputRef}
              className="rounded pl-2 text-md outline-none border-2 transition-colors duration-150 ease-in-out focus:border-spotifyGreen"
              placeholder="Artist name"
            />
          </div>
        </div>
        <div className="mt-4">
          <Button handleClick={() => handleConfirm()} text={"Confirm"} />
        </div>
      </div>
    </div>
  );
};

export default InputArtist;
