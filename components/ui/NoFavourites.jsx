import { Container, Image, Text } from "@nextui-org/react"

export const NoFavourites = () => {
  return (
    <Container
    css={{
      display: "flex",
      flexDirection: "column",
      height: "calc(100vh-100px)",
      alignItems: "center",
      justifyContent: "center",
      alignSelf: "center",
    }}
  >
    <Text h1>No favourites</Text>
    <Image
      alt="no favourites img"
      src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
    />
  </Container>
  )
}
