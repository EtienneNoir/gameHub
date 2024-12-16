import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Heading,
  Center,
  Box,
} from "@chakra-ui/react";
import { Game } from "../hooks/useGames";

interface Props {
  // passing a game object to this componet
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Box boxShadow="dark-lg" rounded="md" bg="#4A5568">
      <Card bgColor={"#4A5568"} borderRadius={10} overflow={"hidden"}>
        <Image src={game.background_image} />
        <CardBody>
          <Center>
            {" "}
            <Heading fontSize="2xl">{game.name}</Heading>{" "}
          </Center>
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
