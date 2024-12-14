import { Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";

const GameGrid = () => {
  const { games, error } = useGames();
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
