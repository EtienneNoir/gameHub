import { Card, CardBody, Image, Heading, Box, HStack } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformiconList from "./PlatformiconList";
import CriticsScore from "./CriticsScore";

interface Props {
  // passing a game object to this componet
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Box boxShadow="dark-lg" rounded="md" bg="#4A5568">
      <Card bgColor="#4A5568" borderRadius={10} overflow={"hidden"}>
        <Image src={game.background_image} />
        <CardBody padding="20px">
          <Heading as="h1" fontSize="2xl">
            {game.name}
          </Heading>
          <HStack justifyContent="space-between">
            <PlatformiconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <CriticsScore score={game.metacritic} />
          </HStack>
        </CardBody>
      </Card>
    </Box>
  );
};

export default GameCard;

{
  /**<Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </Card> */
}
