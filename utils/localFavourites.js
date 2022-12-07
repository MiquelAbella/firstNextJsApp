const toggleFavourite = (id) => {
  let favourites = JSON.parse(localStorage.getItem("favourites") || "[]");

  if (favourites.includes(id)) {
    favourites = favourites.filter((pokeId) => pokeId !== id);
  } else {
    favourites.push(id);
  }
  localStorage.setItem("favourites", JSON.stringify(favourites));
};

const existInFavourites = (id) => {
  let favourites = JSON.parse(localStorage.getItem("favourites") || "[]");

  return favourites.includes(id);
};

const pokemons = () => {
  return JSON.parse(localStorage.getItem("favourites") || "[]");
};

export { toggleFavourite, existInFavourites, pokemons };
