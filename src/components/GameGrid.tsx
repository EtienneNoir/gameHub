import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import { GameQuery } from "../App";
interface Props {
  gameQuery: GameQuery;
}
const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);

  if (error) return null;
  if (isLoading) return <Spinner color="teal.500" size="xl" />;

  return (
    <>
      {error && <Text>{error}</Text>}
      {/* The error is printed if the error state is not empty */}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="10px"
        spacing={6}
      >
        {/* The following goes through each game in the games array and prints each game, its name within a list element, each game is recognized using the game key id*/}
        {data.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
