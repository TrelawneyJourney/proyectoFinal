import { SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";
import useGames from "./useGame";

function Games() {
  const { data, isLoading } = useGames();
  return (
    <SimpleGrid p={"20px"} columns={[2, null, 3]} spacing="40px">
      {isLoading && "Cargando..."}
      {data?.map((game) => (
        <GameCard key={game.gameID} game={game} />
      ))}
    </SimpleGrid>
  );
}

export default Games;
