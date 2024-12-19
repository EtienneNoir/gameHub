import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenre";
import PLatformSelector from "./components/PLatformSelector";
import { Platform } from "./hooks/useGames";

const App = () => {
  const [selectedGenre, setselectedGenre] = useState<Genre | null>(null);

  const [selectedPlatform, setselectedPlatform] = useState<Platform | null>(
    null
  );

  return (
    <Grid
      // Defining a layout for mobile devices and one for larger devices

      templateAreas={{
        base: `"nav" "main"`,
        lg: '"nav nav" "aside main"', // Screens wider than 1024 px
      }}
      templateColumns={{
        base: "1fr",
        large: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            selectedGenre={selectedGenre}
            onSelectGenre={(genre) => setselectedGenre(genre)}
          ></GenreList>
        </GridItem>
      </Show>
      <GridItem area="main">
        <PLatformSelector
          selectedPlatform={selectedPlatform}
          onSelectPlatform={(platform) => setselectedPlatform(platform)}
        />
        <GameGrid
          selectedPlatform={selectedPlatform}
          selectedGenre={selectedGenre}
        />
      </GridItem>
    </Grid>
  );
};

export default App;
