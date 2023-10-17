import React from "react";

import { Link, useParams } from "react-router-dom";

import classNames from "classnames";

import DashLine from "./DashLine";

const Album = ({ url, order, title, date, className, albumId }) => {
  const { artistId } = useParams();
  return (
    <div
      className={classNames(
        "relative flex justify-start p-5 group ",
        {
          "!flex-row-reverse": order === 2,
        },
        className
      )}
    >
      <DashLine order={order} />
      <div
        className={classNames(
          `p-5 z-10 mb-20 shadow-md max-w-3xl  bg-spotifyContainer transition-all duration-200 ease-in-out shadow-spotifyContainer border-solid border-2 border-spotifyContainer hover:border-spotifyGreen hover:bg-spotifyHover  w-fit flex items-center rounded-md`,
          {
            "!flex-row-reverse": order === 2,
          }
        )}
      >
        <div className="min-w-1/3">
          <div
            className="w-32 h-32 lg:w-40 lg:h-40 bg-center bg-cover rounded"
            style={{ backgroundImage: `url(${url})` }}
          ></div>
        </div>
        <div className="text-gray-300 flex flex-col flex-wrap mx-10">
          <h2 className="font-semibold text-2xl text-gray-300 line-clamp-1">
            {title}
          </h2>
          <p className="text-base font-medium">
            Release date: <span className="font-normal">{date}</span>
          </p>
          <Link
            to={`/tracklist/${artistId}/${albumId}`}
            className="text-sm font-normal cursor-pointer text-spotifyGreen hover:underline"
          >
            View tracklist
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Album;
