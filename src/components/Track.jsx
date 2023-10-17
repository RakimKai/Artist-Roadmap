import { useState } from "react";

import { Link } from "react-router-dom";

import PlayButton from "./PlayButton";

const Track = ({ order, artistNames, title, duration, external }) => {
  const [hover, setHover] = useState(false);

  const msToMinutesAndSeconds = (ms) => {
    let minutes = Math.floor(ms / 60000);
    let seconds = Math.floor((ms % 60000) / 1000);
    seconds = (seconds < 10 ? "0" : "") + seconds;
    return minutes + ":" + seconds;
  };

  return (
    <Link to={external} target="_blank">
      <div className="group border-b border-gray-400 rounded ">
        <div
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className="flex justify-between h-14 px-5 py-3 border-solid border-2 border-spotifyContainer items-center text-gray-300 rounded hover:bg-spotifyHover  hover:border-spotifyGreen transition-all duration-200 ease-in-out"
        >
          <div className="flex items-center gap-3">
            <h2 className="text-spotifyGreen/50 text-sm lg:text-base">
              {hover ? <PlayButton /> : order}
            </h2>
            <div className="lg:ml-2">
              <h2 className="text-gray-100 font-semibold line-clamp-1">
                {title}
              </h2>
              <p className="text-sm line-clamp-1">
                {artistNames.map((artist, index) => {
                  return index === artistNames.length - 1
                    ? artist.name
                    : artist.name + ", ";
                })}
              </p>
            </div>
          </div>
          <div>
            <p className="text-spotifyGreen/50 text-sm lg:text-base">
              {msToMinutesAndSeconds(duration)}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Track;
