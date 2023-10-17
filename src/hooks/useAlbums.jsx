import React, { useContext } from "react";
import AlbumsContext from "../context/AlbumsProvider";

const useAlbums = () => useContext(AlbumsContext);
export default useAlbums;
