import { Image, Spacer, Text, Link } from "@nextui-org/react";
import NextLink from "next/link";

export const NavBar = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: "0px 20px",
        backgroundColor: "rgb(90,90,90)",
      }}
    >
      <Image
        src={
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
        }
        alt="app icon"
        width={70}
        height={70}
      />
      <NextLink href="/" passHref>
        <Text color="white" h2>
          Pokemon
        </Text>
      </NextLink>

      <Spacer css={{ flex: 1 }} />

      <NextLink href="/favourites">
        <Text color="white" h3>
          Favourites
        </Text>
      </NextLink>
    </div>
  );
};
