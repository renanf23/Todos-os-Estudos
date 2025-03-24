async function createPokemon(pokemon) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  const element = await response.json();

  const card = document.createElement("div");
  card.classList.add("pokemon");

  const pokemonName = element.name;
  const name = document.createElement("h2");
  name.textContent = pokemonName;

  const img = document.createElement("img");
  img.src = element.sprites.other.dream_world.front_default;
  img.alt = pokemonName;

  card.append(name, img);
  document.querySelector("#pokedex").append(card);
}

async function getPokemons() {
  const response = await fetch("https://pokeapi.co/api/v2/generation/1");
  const pokemons = await response.json();

  pokemons.pokemon_species.forEach((result) => createPokemon(result.name));
}

getPokemons();
