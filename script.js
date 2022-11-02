const buttons = document.querySelectorAll('li button');
const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';
const pokemonName = document.querySelector('#name');
const img = document.querySelector('#img');

buttons.forEach(button => {
    button.addEventListener('click', (evt) => {
        evt.preventDefault();

        const url = baseUrl + evt.target.dataset.name;
        
        function createPokemon(data){
            pokemonName.innerText = data.name.toUpperCase();
            img.src = data.sprites.other["official-artwork"].front_default
        }

        fetch(url)
            .then(response => response.json())
            .then((data) => {
                createPokemon(data);
            });
    });
});

