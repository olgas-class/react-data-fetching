import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CharactersList from "./pages/characters/CharactersList";
import GuestLayout from "./layouts/GuestLayout";
import Page404 from "./pages/Page404";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<GuestLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/personaggi" element={<CharactersList />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
