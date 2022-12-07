export const getPokemonData = async(param) =>{
    // const name = ctx.params.name;

    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${param}`);
    const data = await resp.json();
  
    return {
      id: data.id,
      name: data.name,
      sprites: data.sprites,
    };
}