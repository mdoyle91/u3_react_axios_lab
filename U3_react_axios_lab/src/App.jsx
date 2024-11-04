import { useState, useEffect } from "react";
import "./App.css";
import { BASE_URL } from "./globals"; //Is this necessary if there's no API key or should I have just put the link directly in the axios call below?
import StarshipList from "./components/StarshipList.jsx";
import axios from "axios";

function App() {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    const getStarships = async () => {
      const response = await axios.get(`${BASE_URL}`);
      console.log("Starships:", response.data.results);
      setStarships(response.data.results);
    };

    getStarships();
  }, []);

  return (
    <>
      <div>
        <StarshipList starships={starships} />
      </div>
    </>
  );
}

export default App;
