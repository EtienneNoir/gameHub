import { Card, CardBody, Image, Heading, Box, HStack } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformiconList from "./PlatformiconList";
import CriticsScore from "./CriticsScore";
import getCroppedImageUrl from "../services/image-url";
import Emoji from "./Emoji";

interface Props {
  // passing a game object to this componet
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card
      boxShadow="dark-lg"
      bgColor="gray.700"
      borderRadius={10}
      overflow={"hidden"}
    >
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody padding="20px">
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformiconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticsScore score={game.metacritic} />
        </HStack>
        <Heading as="h1" fontSize="2xl">
          {game.name}
          <Emoji rating={game.rating_top} />
        </Heading>
      </CardBody>
    </Card>
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
