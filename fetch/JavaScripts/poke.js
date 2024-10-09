const url = "https://pokeapi.co/api/v2/pokemon"; // General endpoint

let results = null;

async function getPokemon(url) {
    const response = await fetch(url);
    
    if (response.ok) {
        const data = await response.json();  // Convert the response to JSON
        doStuff(data);  // Handle the returned data
    } else {
        console.error("Failed to fetch data");
    }
}

function doStuff(data) {
    results = data;
    console.log("first: ", results);  // Data gets logged here after the fetch completes
}

getPokemon(url);

console.log("second: ", results);  // This runs first before the async fetch completes
