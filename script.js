// script.js

const apiUrl = "http://localhost:3000/api/items";

// Function to fetch all Pokemons and display them
async function getPokemons() {
    const response = await fetch(apiUrl);
    const pokemons = await response.json();
    displayPokemons(pokemons);
}

// Function to display Pokemons on the page
// displayPokemons function in script.js
function displayPokemons(pokemons) {
    const pokemonList = document.getElementById("pokemonList");
    pokemonList.innerHTML = "";
    pokemons.forEach(pokemon => {
        const pokemonDiv = document.createElement("div");
        pokemonDiv.className = "pokemon";
        pokemonDiv.innerHTML = `
            <h3>${pokemon.Name} (Pokedex #${pokemon.PokedexNum})</h3>
            <p>Type: ${pokemon.Type} | Gen: ${pokemon.Gen}</p>
            <button class="edit" onclick="editPokemon('${pokemon._id}')">Edit</button>
            <button class="delete" onclick="deletePokemon('${pokemon._id}')">Delete</button>
        `;
        pokemonList.appendChild(pokemonDiv);
    });
}



// Function to add a new Pokemon
async function addPokemon(name, type, gen, pokedexNum) {
    await fetch(apiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ Name: name, Type: type, Gen: gen, PokedexNum: pokedexNum })
    });
    getPokemons(); // Refresh list
}

// Handle form submission
document.getElementById("pokemonForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const type = document.getElementById("type").value;
    const gen = document.getElementById("gen").value;
    const pokedexNum = document.getElementById("pokedexNum").value;
    addPokemon(name, type, gen, pokedexNum);
    document.getElementById("pokemonForm").reset(); // Clear form fields
});

// Function to delete a Pokemon
async function deletePokemon(id) {
    await fetch(`${apiUrl}/${id}`, { method: "DELETE" });
    getPokemons(); // Refresh list
}

// Function to edit a Pokemon
async function editPokemon(id) {
    const name = prompt("Enter new Name:");
    const type = prompt("Enter new Type:");
    const gen = prompt("Enter new Generation:");
    const pokedexNum = prompt("Enter new Pokedex Number:");
    if (name && type && gen && pokedexNum) {
        await fetch(`${apiUrl}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ Name: name, Type: type, Gen: parseInt(gen), PokedexNum: parseInt(pokedexNum) })
        });
        getPokemons(); // Refresh list
    }
}

// Load all Pokemons on page load
getPokemons();
