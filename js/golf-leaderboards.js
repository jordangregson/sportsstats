function golfLeaderboards() {



    const api_url = `https://api.sportsdata.io/golf/v2/json/PlayerSeasonStats/2020?key=a37dd5fb77dd42728240536449917626`;

    fetch(api_url)
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data[0]);
        })
}

golfLeaderboards();