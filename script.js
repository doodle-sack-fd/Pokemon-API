const buttons = document.querySelectorAll('li button');
const btnClick = document.querySelector('.click')
const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';
const pokemonName = document.querySelector('#name');
const img = document.querySelector('#img');
const hp = document.querySelector('#hp');

buttons.forEach(button => {
    button.addEventListener('click', (evt) => {
        evt.preventDefault();

        const url = baseUrl + evt.target.dataset.name;

        function createPokemon(data) {
            pokemonName.innerText = data.name.toUpperCase();
            img.src = data.sprites.other["official-artwork"].front_default;
            hp.innerText = `HP  ${data.base_experience}`;
            btnClick.addEventListener('click', () => {
                img.src = data.sprites.back_default;
            });
        }

        fetch(url)
            .then(response => response.json())
            .then((data) => {
                console.log(data);
                createPokemon(data);
            });
    });
});

