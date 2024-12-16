import { Badge } from "@chakra-ui/react";

//Prop/argument for receiving a score
interface Props {
  score: number;
}
const CriticsScore = ({ score }: Props) => {
  let color = score > 75 ? "yellow" : score > 60 ? "green" : "";
  return (
    <Badge
      color={color}
      fontSize="14px"
      bgColor="gray.500"
      borderRadius={5}
      paddingX="5px"
    >
      {score}
    </Badge>
  );
};

export default CriticsScore;
