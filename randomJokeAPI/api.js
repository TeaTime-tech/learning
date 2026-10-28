const setupDisplay = document.getElementById("setup");
const punchlineDisplay = document.getElementById("punchline");
const btn = document.getElementById("btn");
const url = "https://official-joke-api.appspot.com/random_joke";

const getJoke = () => {
    fetch(url)
    .then(response => response.json())
    .then(item => {
        setupDisplay.textContent = item.setup;
        punchlineDisplay.textContent = item.punchline;
        punchlineDisplay.animate(
            [{ opacity: 0 }, { opacity: 1 }],
            { duration: 6000, easing: "ease", fill: "both" }
        );
    })
    .catch(error => { 
        setupDisplay.textContent = "Couldn't load a joke - try again.";
        console.error(error);
    });
}; 

btn.addEventListener("click", getJoke);

getJoke();