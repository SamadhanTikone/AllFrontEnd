let Jokes = document.querySelector(".jokes");
        let btn = document.querySelector(".button");
        let url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw&type=single";

        let getJoke = ()=>{

            fetch(url)
            .then(data => data.json())
            .then(item => {
                Jokes.textContent= `${item.joke}`
            })
        }