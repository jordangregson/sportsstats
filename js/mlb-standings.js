const api_url = `https://api.sportsdata.io/v3/mlb/scores/json/Standings/2020?key=446721dc7b6d45c4bb874372ee61bfe8`;

fetch(api_url)
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data.Season);
    })