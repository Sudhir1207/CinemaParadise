import MovieCard from "./components/MovieCard";
import "./App.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Favorites from "./pages/Favorites";

function App() {
  return (
    <>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
