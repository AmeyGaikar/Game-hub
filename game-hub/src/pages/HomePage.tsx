import GameGrid from '../components/GameGrid'
import GameHeading from '../components/GameHeading'
import GenreList from '../components/GenreList'
import PlatformSelector from '../components/PlatformSelector'
import SortSelector from '../components/SortSelector'
import { Grid, Show, GridItem, Box, Flex } from '@chakra-ui/react'

const HomePage = () => {
  return (
          <Grid
        templateAreas={{
          base: `"main"`,
          lg: ` "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            <GenreList/>
          </GridItem>
        </Show>
        <GridItem area="main">
          <Box paddingLeft={2}>
            <GameHeading />
            <Flex gap={5} marginBottom={5}>
              <SortSelector />
              <PlatformSelector />
            </Flex>
          </Box>
          <GameGrid/>
        </GridItem>
      </Grid>
  )
}

export default HomePage