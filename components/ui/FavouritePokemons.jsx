import { Card, Grid } from "@nextui-org/react";
import Link from "next/link";

export const FavouritePokemons = ({ id }) => {
  return (
    <Grid xs={6} sm={3} md={2} xl={1}>
      <Card isHoverable isPressable css={{ padding: 10 }}>
        <Link href={`/pokemon/${id}`}>
          <Card.Image
            height={140}
            width={"100%"}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
          />
        </Link>
      </Card>
    </Grid>
  );
};
