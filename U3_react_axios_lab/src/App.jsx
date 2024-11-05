import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { BASE_URL } from "./globals";
import StarshipList from "./components/StarshipList.jsx";
import PlanetList from "./components/PlanetList.jsx";
import FilmList from "./components/FilmList.jsx";
import CharacterList from "./components/CharacterList.jsx";
import StarshipPage from "./components/StarshipPage.jsx";
import Nav from "./components/Nav.jsx";
import axios from "axios";

function App() {
  const [starships, setStarships] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [films, setFilms] = useState([]);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const getStarships = async () => {
      const response = await axios.get(`${BASE_URL}`);
      setStarships(response.data.results);
      console.log("Starships Data:", response.data.results);
    };
    getStarships();

    const getPlanets = async () => {
      const response = await axios.get(`https://swapi.dev/api/planets`);
      setPlanets(response.data.results);
    };
    getPlanets();

    const getFilms = async () => {
      const response = await axios.get(`https://swapi.dev/api/films`);
      setFilms(response.data.results);
    };
    getFilms();

    const getCharacters = async () => {
      const response = await axios.get(`https://swapi.dev/api/people`);
      setCharacters(response.data.results);
    };
    getCharacters();
  }, []);

  return (
    <>
      <Nav />
      {console.log("Starships in App:", starships)}
      <Routes>
        <Route path="/" element={<h1>Starships Home Page!</h1>} />
        <Route
          path="/starships/:starshipId"
          element={<StarshipPage starships={starships} />}
        />
        <Route
          path="/starships"
          element={<StarshipList starships={starships} />}
        />
        <Route path="/planets" element={<PlanetList planets={planets} />} />
        <Route path="/films" element={<FilmList films={films} />} />
        <Route
          path="/characters"
          element={<CharacterList characters={characters} />}
        />
      </Routes>
    </>
  );
}

export default App;
