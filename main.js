// URL del archivo JSON
const url = './poke.json';
const form = document.getElementById('form')
const pokeName = document.getElementById('pokeName');
const results = document.getElementById('results');
const resultsImg = document.getElementById('resultsImg');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const { value } = pokeName;
    if (!value) return

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('No se pudo obtener los datos.');
            }
            return response.json(); // Convierte la respuesta a JSON
        })
        .then(data => {
            // Filtra el objeto con nombre "Ivysaur"
            const pokemon = data.find(pokemon => pokemon.name === value);

            if (pokemon) {
                console.log("Datos de "+value+": ");
                console.log(pokemon);
                results.innerHTML = JSON.stringify(pokemon, null, 2);
                resultsImg.src = pokemon.ThumbnailImage
            } else {
                console.log(value+" no encontrado en el array.");
            }
        })
        .catch(error => {
            console.error('Ocurrió un error: ' + error);
        });


})