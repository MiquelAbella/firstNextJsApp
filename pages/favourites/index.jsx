import { Card, Grid } from "@nextui-org/react";
import { useEffect, useState } from "react";

import { Layout } from "../../components/layouts";
import { FavouritePokemons, NoFavourites } from "../../components/ui";
import { pokemons } from "../../utils/localFavourites";

const FavouritesPage = () => {
  const [favouritePokemons, setFavouritePokemons] = useState([]);

  useEffect(() => {
    setFavouritePokemons(pokemons);
  }, []);

  return (
    <Layout title="Pokemons - Favourites">
      {!favouritePokemons ? (
        <NoFavourites />
      ) : (
        <Grid.Container gap={2} direction="row" justify="flex-start">
          {favouritePokemons.map((id) => (
            <FavouritePokemons key={id} id={id} />
          ))}
        </Grid.Container>
      )}
    </Layout>
  );
};

export default FavouritesPage;
