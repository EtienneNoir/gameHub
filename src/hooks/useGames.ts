import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

const useGames = () => {
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
    const controller = new AbortController(); // to signal the cancellation of a fetch or other asynchronous operation
    apiClient
      .get<FetchGamesHTTResponse>("/games", { signal: controller.signal }) // the signal, controller allows the fetch request to be cancelled if necessary
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        // This ix executed if an error is detected
        if (err instanceof CanceledError) return; // no error message is given if it is a CanceledError
        setError(err.message);
      });
    return () => controller.abort(); // a clean up function to prevent an ongoing requests once the component unmounts/is removed to prevent memory leaks
  }, []); // The empty array is used to ensire that the data is only fetched once from the API

  return { games, error };
};

export default useGames;
