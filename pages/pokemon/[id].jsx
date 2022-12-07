import React, { useEffect, useState } from "react";

import { Button, Card, Container, Grid, Image, Text } from "@nextui-org/react";
import { Layout } from "../../components/layouts";
import { existInFavourites, getPokemonData, toggleFavourite } from "../../utils";

import confetti from "canvas-confetti";

const PokemonPage = ({ pokemon }) => {
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
  const pokemons151 = [...Array(151)].map((value, index) => `${index + 1}`);

  return {
    paths: pokemons151.map((id) => ({
      params: { id },
    })),
    fallback: false,
  };
};

export const getStaticProps = async (ctx) => {
  const id = ctx.params.id;

  const pokemon = await getPokemonData(id);

  return {
    props: {
      pokemon,
    },
  };
};

export default PokemonPage;
