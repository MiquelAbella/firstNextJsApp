import { Grid } from "@nextui-org/react";

import { Layout } from "../components/layouts";
import { PokemonCard } from "../components/pokemon";

export default function HomePage({ pokemons }) {
  return (
    <>
      <Layout title="Pokemon List">
        <Grid.Container gap={2} justify="flex-start">
          {pokemons.map((pokemon) => (
           <PokemonCard key={pokemon.id} pokemon={pokemon}/>
          ))}
        </Grid.Container>
      </Layout>
    </>
  );
}

export const getStaticProps = async (ctx) => {
  const response = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=151"
  ).then((resp) => {
    const data = resp.json();
    return data;
  });

  const pokemons = response.results.map((poke, i) => ({
    ...poke,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      i + 1
    }.svg`,
  }));

  return {
    props: {
      pokemons,
    },
  };
};
