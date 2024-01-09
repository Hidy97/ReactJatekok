import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout.js";
import NoPage from "./pages/NoPage.js";
import Gepel from "./pages/Gepel.js";
import Rendez from "./pages/Rendez.js";
import Valaszto from "./pages/Valaszto.js";
import Jatek from "./pages/Jatek.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Jatek />} />
          <Route path="gepel" element={<Gepel />} />
          <Route path="rendez" element={<Rendez />} />
          <Route path="valaszto" element={<Valaszto />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
