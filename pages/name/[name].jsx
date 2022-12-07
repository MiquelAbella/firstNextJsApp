import React, { useEffect, useState } from "react";

import { Button, Card, Container, Grid, Image, Text } from "@nextui-org/react";
import { Layout } from "../../components/layouts";
import {
  existInFavourites,
  getPokemonData,
  toggleFavourite,
} from "../../utils";

import confetti from "canvas-confetti";

const PokemonByNamePage = ({ pokemon }) => {
  const [isInFavourites, setIsInFavourites] = useState(null);

  useEffect(() => {
    setIsInFavourites(existInFavourites(pokemon.id));
  }, [pokemon.id]);

  const onToggleFavourite = () => {
    toggleFavourite(pokemon.id);
    setIsInFavourites(!isInFavourites);

    if (!isInFavourites) {
      confetti({
        zIndex: 999,
        particleCount: 500,
        spread: 160,
        angle: -100,
        origin: {
          x: 1,
          y: 0,
        },
      });
    }
  };

  return (
    <Layout title={pokemon.name}>
      <Grid.Container css={{ magrinTop: "5px" }} gap={2}>
        <Grid xs={12} sm={4}>
          <Card isHoverable css={{ padding: "30px" }}>
            <Card.Body>
              <Card.Image
                src={
                  pokemon.sprites.other?.dream_world.front_default ||
                  "/no-image.png"
                }
                alt={pokemon.name}
                width="100%"
                height={200}
              />
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header
              css={{ display: "flex", justifyContent: "space-between" }}
            >
              <Text h1 transform="capitalize">
                {pokemon.name}
              </Text>
              <Button color="gradient" onPress={onToggleFavourite}>
                {isInFavourites ? "Favourite!" : "Save to favourites"}
              </Button>
            </Card.Header>
            <Card.Body>
              <Text size={30}>Sprites:</Text>
              <Container direction="row" display="flex" gap={0}>
                <Image
                  alt={pokemon.name}
                  src={pokemon.sprites.front_default}
                  width={100}
                  height={100}
                />
                <Image
                  alt={pokemon.name}
                  src={pokemon.sprites.back_default}
                  width={100}
                  height={100}
                />
                <Image
                  alt={pokemon.name}
                  src={pokemon.sprites.front_shiny}
                  width={100}
                  height={100}
                />
                <Image
                  alt={pokemon.name}
                  src={pokemon.sprites.back_shiny}
                  width={100}
                  height={100}
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  );
};

export const getStaticPaths = async (ctx) => {
  const pokemons = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
  const pokemonsArray = await pokemons.json();
  const results = pokemonsArray.results;
  return {
    paths: results.map((pokemon) => ({
      params: { name: pokemon.name },
    })),
    fallback: false,
  };
};

export const getStaticProps = async (ctx) => {
  const name = ctx.params.name;

  const pokemon = await getPokemonData(name);

  return {
    props: {
      pokemon,
    },
  };
};

export default PokemonByNamePage;
