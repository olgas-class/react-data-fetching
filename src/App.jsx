import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CharactersList from "./pages/characters/CharactersList";
import GuestLayout from "./layouts/GuestLayout";
import Page404 from "./pages/Page404";
import ShowCaracter from "./pages/characters/ShowCharacter";
import EpisodesList from "./pages/episodes/EpisodesList";
import ShowEpisode from "./pages/episodes/ShowEpisode";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<GuestLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/personaggi">
            <Route path="" element={<CharactersList />} />
            <Route path=":id" element={<ShowCaracter />} />
          </Route>
          <Route path="/episodi">
            <Route path="" element={<EpisodesList />} />
            <Route path=":id" element={<ShowEpisode />} />
          </Route>
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
