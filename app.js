newFunction();

function fetchPokemon() {
    function getPokemonUrl(id) {
        return `https://pokeapi.co/api/v2/pokemon/${id}`;
    }

    const pokemonPromises = [];

    for (let i = 1; i <= 898; i++) {
        pokemonPromises.push(fetch(getPokemonUrl(i)).then(response => response.json()));
    }

    Promise.all(pokemonPromises)
        .then((pokemons) => {
                console.log(pokemons);

                const lisPokemons = pokemons.reduce((accumulator, pokemon) => {
                    const types = pokemon.types.map(typeInfo => typeInfo.type.name);

                    accumulator += `
                <li class="card ${types[0]}">
                <img class="card-image" alt="${pokemon.name}" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" />
                <h2 class="card-title">${pokemon.id}. ${pokemon.name}</h2>
                <p class="card-subtitke">${types.join(' | ')}</p>
                </li>
                `;

                    return accumulator;
                }, '');

                const ul = document.querySelector('[data-js="pokedex"]');

                ul.innerHTML = lisPokemons;
            });
}

fetchPokemon()

function newFunction() {
    var audio = new Audio('https://diwalker.github.io/pokedex/media/opening.mp3');
    audio.addEventListener('canplaythrough', function () {
        audio.play();
    });
}

function limpar() {
                $('.pokedex li').show();
            }
            function filtrar() {
                var termo = $('#pesquisa').val().toUpperCase();
                $('.pokedex li').each(function() { 
                   if($(this).html().toUpperCase().indexOf(termo) === -1) {
                       $(this).hide();
                   }
                });
            }
