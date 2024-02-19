/* // Module to fetch Chuck Norris jokes
const chuckNorrisJokesModule = (function () {
    // Function to fetch a random Chuck Norris joke
    async function fetchJoke() {
        try {
            const response = await fetch('https://api.chucknorris.io/jokes/random');
            const data = await response.json();
            return data.value;
        } catch (error) {
            console.error('Error fetching Chuck Norris joke:', error);
            return 'Failed to fetch Chuck Norris joke';
        }
    }

    return {
        fetchJoke
    };
})();

// Main code
document.addEventListener('DOMContentLoaded', () => {
    const jokeContainer = document.getElementById('joke-container');
    const getJokeBtn = document.getElementById('get-joke-btn');

    getJokeBtn.addEventListener('click', async () => {
        const jokeText = await chuckNorrisJokesModule.fetchJoke();
        displayJoke(jokeText);
    });

    function displayJoke(jokeText) {
        const jokeTextElement = document.createElement('p');
        jokeTextElement.id = 'joke-text';
        jokeTextElement.textContent = jokeText;

        const existingJokeTextElement = document.getElementById('joke-text');
        if (existingJokeTextElement) {
            existingJokeTextElement.remove();
        }

        jokeContainer.appendChild(jokeTextElement);
    }
});
 */

// Module to fetch Star Wars character information
const starWarsModule = (function () {
    async function fetchCharacter(name) {
        try {
            const response = await fetch(`https://swapi.dev/api/people/?search=${name}`);
            const data = await response.json();
            return data.results[0];
        } catch (error) {
            console.error('Error fetching character:', error);
            return null;
        }
    }

    return {
        fetchCharacter
    };
})();

// Main code
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-btn');
    const suggestionsList = document.getElementById('suggestions');
    const characterDetails = document.getElementById('character-details');

    searchInput.addEventListener('input', async () => {
        const searchText = searchInput.value.trim();
        if (searchText === '') {
            suggestionsList.innerHTML = '';
            return;
        }

        const suggestions = await getSuggestions(searchText);
        displaySuggestions(suggestions);
    });

    async function getSuggestions(searchText) {
        try {
            const response = await fetch(`https://swapi.dev/api/people/?search=${searchText}`);
            const data = await response.json();
            return data.results.map(result => result.name);
        } catch (error) {
            console.error('Error fetching suggestions:', error);
            return [];
        }
    }

    function displaySuggestions(suggestions) {
        suggestionsList.innerHTML = '';
        suggestions.forEach(suggestion => {
            const listItem = document.createElement('li');
            listItem.textContent = suggestion;
            listItem.addEventListener('click', () => {
                searchInput.value = suggestion;
                suggestionsList.innerHTML = '';
            });
            suggestionsList.appendChild(listItem);
        });
    }

    searchButton.addEventListener('click', async () => {
        const characterName = searchInput.value.trim();
        if (characterName !== '') {
            const character = await starWarsModule.fetchCharacter(characterName);
            displayCharacter(character);
        } else {
            characterDetails.innerHTML = '<p>Please enter a character name</p>';
        }
    });

    function displayCharacter(character) {
        if (character) {
            characterDetails.innerHTML = `
                <h2>${character.name}</h2>
                <p><strong>Birth Year:</strong> ${character.birth_year}</p>
                <p><strong>Gender:</strong> ${character.gender}</p>
                <p><strong>Height:</strong> ${character.height} cm</p>
                <p><strong>Mass:</strong> ${character.mass} kg</p>
            `;
        } else {
            characterDetails.innerHTML = '<p>Character not found</p>';
        }
    }
});
