import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";

// Characteristics of the inidividual games
interface Game {
  id: number;
  name: string;
}

// storage of the retrieved games and a varible to indicate the number of games fetched
interface FetchGamesHTTResponse {
  count: number;
  results: Game[];
}
{
  /*
   * games is a state varibale that will hold the array of games fetched from the API, it is initially set to an empty array
   * The setGames function is used to update the games state
   * The error state variable is used to store error messages which is initially set to an empty string
   * The setError function is used to update the error state - for example providing it with a different state or value
   */
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  {
    /*
     * The following hook is used to fetch the data from the API
     * The get request is used to fetch the data, and each individual game is instantiated as a FetchGamesHTTResponse
     * Then executes when the API request is successful
     * res.data.results extracts the array of games results from the API response and stores it in the games state using the setGames function
     * catch is only execued once the API request fails, it captures the error message generated and updates the error state using the setError function
     */
  }
  useEffect(() => {
    apiClient
      .get<FetchGamesHTTResponse>("/games")
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err.message));
  }, []); // The empty array is used to ensire that the data is only fetched once from the API
  return (
    <>
      {error && <Text>{error}</Text>}
      {/* The error is printed if the error state is not empty */}
      <ul>
        {/* The following goes through each game in the games array and prints each game, its name within a list element, each game is recognized using the game key id*/}
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
