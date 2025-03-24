async function createPokemons(pokemon) {
  const tratado = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  const certo = await tratado.json();

  const card = document.createElement("div");
  card.classList.add("pokemon");

  const pokemonName = certo.name;
  const name = document.createElement("h2");
  name.textContent = pokemonName;

  const img = document.createElement("img");
  img.src = certo.sprites.other.dream_world.front_default;
  img.alt = pokemonName;

  card.append(name, img);
  document.querySelector("#pokedex").append(card);
}

async function getPokemons() {
  const response = await fetch("https://pokeapi.co/api/v2/generation/1");
  const geracao1 = await response.json();

  geracao1.pokemon_species.forEach((result) => createPokemons(result.name));
}

getPokemons();
