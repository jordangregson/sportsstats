function mlbStandings() {



const api_url = `https://api.sportsdata.io/v3/mlb/scores/json/Standings/2020?key=446721dc7b6d45c4bb874372ee61bfe8`;

fetch(api_url)
    .then(response => {
        return response.json();
    })
    .then(data => {
        
        console.log(data);

        
        for (var a = 0; a < data.length; a++) {
        
            var league = data[a].League;
            var division = data[a].Division;
            var name = data[a].Name;
            var wins = data[a].Wins;
            var losses = data[a].Losses;

            if(division == "East" && league == "NL") {
                console.log(name + " " + wins + " " + losses);

                var teamName = document.getElementById("1st-alc-name");
                var teamWins = document.getElementById("1st-alc-wins");
                var teamLosses = document.getElementById("1st-alc-losses");

                teamName.textContent = name;
            }

        }
        
    })
}

mlbStandings();