const button = document.querySelector("button");
const ul = document.querySelector("UL");

button.addEventListener('click', ()=>{
    addNewJoke();
} )

const addNewJoke = async () => {
    const jokeText = await getJoke();
    const newLI = document.createElement("LI");
    newLI.append(jokeText);
    ul.append(newLI);
};

const getJoke = async()=>{
    try {
        const config = { headers: { Accept: "application/json" } };
        const res = await axios.get("https://icanhazdadjoke.com/", config);
        console.log(res)
        return res.data.joke;
    } catch (e) {
        return "NO JOKES AVAILABLE! SORRY :(";
    }  
}
