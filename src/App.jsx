import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import InputArtist from "./components/InputArtist";
import Albums from "./components/Albums";
import Tracklist from "./components/Tracklist";

const App = () => {
  return (
    <div className="min-h-screen bg-spotifyBg">
      <Router>
        <Routes>
          <Route path="/" element={<InputArtist />} />
          <Route path="/albums/:artistId" element={<Albums />} />
          <Route path="/tracklist/:artistId/:albumId" element={<Tracklist />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
