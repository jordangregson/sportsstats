function mlbStandings() {



const api_url = `https://api.sportsdata.io/v3/mlb/scores/json/Standings/2020?key=446721dc7b6d45c4bb874372ee61bfe8`;

fetch(api_url)
    .then(response => {
        return response.json();
    })
    .then(data => {
        
        console.log(data);

        /*AMERICAN LEAGUE*/

        /*AL CENTRAL*/

        /*FIRST AL CENTRAL*/

        var firAlcNameData = data[0].Name;
        var firALCName = document.getElementById("1st-alc-name");
        firALCName.textContent = firAlcNameData;

        var firALCWinsData = data[0].Wins;
        var firALCWins = document.getElementById("1st-alc-wins")
        firALCWins.textContent = firALCWinsData;

        var firALCLossesData = data[0].Losses;
        var firALCLosses = document.getElementById("1st-alc-losses")
        firALCLosses.textContent = firALCLossesData;

        /*SECOND AL CENTRAL*/

        var secAlcNameData = data[1].Name;
        var secALCName = document.getElementById("2nd-alc-name");
        secALCName.textContent = secAlcNameData;

        var winsData = data[1].Wins;
        var wins = document.getElementById("2nd-alc-wins")
        wins.textContent = winsData;

        var firstALCLossesData = data[1].Losses;
        var firstALCLosses = document.getElementById("2nd-alc-losses")
        firstALCLosses.textContent = firstALCLossesData;

        /*THIRD AL CENTRAL*/

        var thirAlcNameData = data[2].Name;
        var thirALCName = document.getElementById("3rd-alc-name");
        thirALCName.textContent = thirAlcNameData;

        var thirALCWinsData = data[2].Wins;
        var thirALCWins = document.getElementById("3rd-alc-wins")
        thirALCWins.textContent = thirALCWinsData;

        var thirALCLossesData = data[2].Losses;
        var thirALCLosses = document.getElementById("3rd-alc-losses")
        thirALCLosses.textContent = thirALCLossesData;

        /*FOURTH AL CENTRAL*/

        var secAlcNameData = data[3].Name;
        var secALCName = document.getElementById("4th-alc-name");
        secALCName.textContent = secAlcNameData;

        var winsData = data[3].Wins;
        var wins = document.getElementById("4th-alc-wins")
        wins.textContent = winsData;

        var firstALCLossesData = data[3].Losses;
        var firstALCLosses = document.getElementById("4th-alc-losses")
        firstALCLosses.textContent = firstALCLossesData;

        /*FIFTH AL CENTRAL*/

        var secAlcNameData = data[4].Name;
        var secALCName = document.getElementById("5th-alc-name");
        secALCName.textContent = secAlcNameData;

        var winsData = data[4].Wins;
        var wins = document.getElementById("5th-alc-wins")
        wins.textContent = winsData;

        var firstALCLossesData = data[4].Losses;
        var firstALCLosses = document.getElementById("5th-alc-losses")
        firstALCLosses.textContent = firstALCLossesData;


        /*AL EAST*/

        /*FIRST AL EAST*/

        var firAlcNameData = data[5].Name;
        var firALCName = document.getElementById("1st-ale-name");
        firALCName.textContent = firAlcNameData;

        var firALCWinsData = data[5].Wins;
        var firALCWins = document.getElementById("1st-ale-wins")
        firALCWins.textContent = firALCWinsData;

        var firALCLossesData = data[5].Losses;
        var firALCLosses = document.getElementById("1st-ale-losses")
        firALCLosses.textContent = firALCLossesData;

        /*SECOND AL EAST*/

        var secAlcNameData = data[6].Name;
        var secALCName = document.getElementById("2nd-ale-name");
        secALCName.textContent = secAlcNameData;

        var winsData = data[6].Wins;
        var wins = document.getElementById("2nd-ale-wins")
        wins.textContent = winsData;

        var firstALCLossesData = data[6].Losses;
        var firstALCLosses = document.getElementById("2nd-ale-losses")
        firstALCLosses.textContent = firstALCLossesData;

        /*THIRD AL EAST*/

        var thirAlcNameData = data[7].Name;
        var thirALCName = document.getElementById("3rd-ale-name");
        thirALCName.textContent = thirAlcNameData;

        var thirALCWinsData = data[7].Wins;
        var thirALCWins = document.getElementById("3rd-ale-wins")
        thirALCWins.textContent = thirALCWinsData;

        var thirALCLossesData = data[7].Losses;
        var thirALCLosses = document.getElementById("3rd-ale-losses")
        thirALCLosses.textContent = thirALCLossesData;

        /*FOURTH AL EAST*/

        var secAlcNameData = data[8].Name;
        var secALCName = document.getElementById("4th-ale-name");
        secALCName.textContent = secAlcNameData;

        var winsData = data[8].Wins;
        var wins = document.getElementById("4th-ale-wins")
        wins.textContent = winsData;

        var firstALCLossesData = data[8].Losses;
        var firstALCLosses = document.getElementById("4th-ale-losses")
        firstALCLosses.textContent = firstALCLossesData;

        /*FIFTH AL EAST*/

        var secAlcNameData = data[9].Name;
        var secALCName = document.getElementById("5th-ale-name");
        secALCName.textContent = secAlcNameData;

        var winsData = data[9].Wins;
        var wins = document.getElementById("5th-ale-wins")
        wins.textContent = winsData;

        var firstALCLossesData = data[9].Losses;
        var firstALCLosses = document.getElementById("5th-ale-losses")
        firstALCLosses.textContent = firstALCLossesData;
        


        /*AL WEST*/

        /*FIRST AL WEST*/

        var firAlcNameData = data[10].Name;
        var firALCName = document.getElementById("1st-alw-name");
        firALCName.textContent = firAlcNameData;

        var winsData = data[10].Wins;
        var firALCWins = document.getElementById("1st-alw-wins")
        firALCWins.textContent = firALCWinsData;

        var firALCLossesData = data[10].Losses;
        var firALCLosses = document.getElementById("1st-alw-losses")
        firALCLosses.textContent = firALCLossesData;

        /*SECOND AL WEST*/

        var secAlcNameData = data[11].Name;
        var secALCName = document.getElementById("2nd-alw-name");
        secALCName.textContent = secAlcNameData;

        var winsData = data[11].Wins;
        var wins = document.getElementById("2nd-alw-wins")
        wins.textContent = winsData;

        var firstALCLossesData = data[11].Losses;
        var firstALCLosses = document.getElementById("2nd-alw-losses")
        firstALCLosses.textContent = firstALCLossesData;

        /*THIRD AL WEST*/

        var thirAlcNameData = data[12].Name;
        var thirALCName = document.getElementById("3rd-alw-name");
        thirALCName.textContent = thirAlcNameData;

        var winsData = data[12].Wins;
        var thirALCWins = document.getElementById("3rd-alw-wins")
        thirALCWins.textContent = thirALCWinsData;

        var thirALCLossesData = data[12].Losses;
        var thirALCLosses = document.getElementById("3rd-alw-losses")
        thirALCLosses.textContent = thirALCLossesData;

        /*FOURTH AL WEST*/

        var secAlcNameData = data[13].Name;
        var secALCName = document.getElementById("4th-alw-name");
        secALCName.textContent = secAlcNameData;

        var winsData = data[13].Wins;
        var wins = document.getElementById("4th-alw-wins")
        wins.textContent = winsData;

        var firstALCLossesData = data[13].Losses;
        var firstALCLosses = document.getElementById("4th-alw-losses")
        firstALCLosses.textContent = firstALCLossesData;

        /*FIFTH AL WEST*/

        var secAlcNameData = data[14].Name;
        var secALCName = document.getElementById("5th-alw-name");
        secALCName.textContent = secAlcNameData;

        var winsData = data[14].Wins;
        var wins = document.getElementById("5th-alw-wins")
        wins.textContent = winsData;

        var firstALCLossesData = data[14].Losses;
        var firstALCLosses = document.getElementById("5th-alw-losses")
        firstALCLosses.textContent = firstALCLossesData;



        /*NATIONAL LEAGUE*/

        /*NL CENTRAL*/

        /*FIRST NL CENTRAL*/

        var firAlcNameData = data[15].Name;
        var firALCName = document.getElementById("1st-nlc-name");
        firALCName.textContent = firAlcNameData;

        var winsData = data[15].Wins;
        var firALCWins = document.getElementById("1st-nlc-wins")
        firALCWins.textContent = firALCWinsData;

        var firALCLossesData = data[15].Losses;
        var firALCLosses = document.getElementById("1st-nlc-losses")
        firALCLosses.textContent = firALCLossesData;

        /*SECOND NL CENTRAL*/

        var secAlcNameData = data[16].Name;
        var secALCName = document.getElementById("2nd-nlc-name");
        secALCName.textContent = secAlcNameData;

        var winsData = data[16].Wins;
        var wins = document.getElementById("2nd-nlc-wins")
        wins.textContent = winsData;

        var firstALCLossesData = data[16].Losses;
        var firstALCLosses = document.getElementById("2nd-nlc-losses")
        firstALCLosses.textContent = firstALCLossesData;

        /*THIRD NL CENTRAL*/

        var thirAlcNameData = data[17].Name;
        var thirALCName = document.getElementById("3rd-nlc-name");
        thirALCName.textContent = thirAlcNameData;

        var winsData = data[17].Wins;
        var thirALCWins = document.getElementById("3rd-nlc-wins")
        thirALCWins.textContent = thirALCWinsData;

        var thirALCLossesData = data[17].Losses;
        var thirALCLosses = document.getElementById("3rd-nlc-losses")
        thirALCLosses.textContent = thirALCLossesData;

        /*FOURTH NL CENTRAL*/

        var secAlcNameData = data[18].Name;
        var secALCName = document.getElementById("4th-nlc-name");
        secALCName.textContent = secAlcNameData;

        var winsData = data[18].Wins;
        var wins = document.getElementById("4th-nlc-wins")
        wins.textContent = winsData;

        var firstALCLossesData = data[18].Losses;
        var firstALCLosses = document.getElementById("4th-nlc-losses")
        firstALCLosses.textContent = firstALCLossesData;

        /*FIFTH NL CENTRAL*/

        var secAlcNameData = data[19].Name;
        var secALCName = document.getElementById("5th-nlc-name");
        secALCName.textContent = secAlcNameData;

        var winsData = data[19].Wins;
        var wins = document.getElementById("5th-nlc-wins")
        wins.textContent = winsData;

        var firstALCLossesData = data[19].Losses;
        var firstALCLosses = document.getElementById("5th-nlc-losses")
        firstALCLosses.textContent = firstALCLossesData;


        /*NL EAST*/

        /*FIRST NL EAST*/

        var winsData = data[20].Name;
        var firNLCName = document.getElementById("1st-nle-name");
        firNLCName.textContent = winsData;

        var winsData = data[20].Wins;
        var wins = document.getElementById("1st-nle-wins")
        wins.textContent = winsData;

        var firNLCLossesData = data[20].Losses;
        var firNLCLosses = document.getElementById("1st-nle-losses")
        firNLCLosses.textContent = firNLCLossesData;

        /*SECOND NL EAST*/

        var secNlcNameData = data[21].Name;
        var secNLCName = document.getElementById("2nd-nle-name");
        secNLCName.textContent = secNlcNameData;

        var winsData = data[21].Wins;
        var firstNLCWins = document.getElementById("2nd-nle-wins")
        firstNLCWins.textContent = winsData;

        var firstALCLossesData = data[21].Losses;
        var firstALCLosses = document.getElementById("2nd-nle-losses")
        firstALCLosses.textContent = firstALCLossesData;

        /*THIRD NL EAST*/

        var thirAlcNameData = data[22].Name;
        var thirALCName = document.getElementById("3rd-nle-name");
        thirALCName.textContent = thirAlcNameData;

        var thirALCWinsData = data[22].Wins;
        var thirALCWins = document.getElementById("3rd-nle-wins")
        thirALCWins.textContent = thirALCWinsData;

        var thirALCLossesData = data[22].Losses;
        var thirALCLosses = document.getElementById("3rd-nle-losses")
        thirALCLosses.textContent = thirALCLossesData;

        /*FOURTH NL EAST*/

        var secAlcNameData = data[23].Name;
        var secALCName = document.getElementById("4th-nle-name");
        secALCName.textContent = secAlcNameData;

        var winsData = data[23].Wins;
        var wins = document.getElementById("4th-nle-wins")
        wins.textContent = winsData;

        var firstALCLossesData = data[23].Losses;
        var firstALCLosses = document.getElementById("4th-nle-losses")
        firstALCLosses.textContent = firstALCLossesData;

        /*FIFTH NL EAST*/

        var secAlcNameData = data[24].Name;
        var secALCName = document.getElementById("5th-nle-name");
        secALCName.textContent = secAlcNameData;

        var winsData = data[24].Wins;
        var wins = document.getElementById("5th-nle-wins")
        wins.textContent = winsData;

        var firstALCLossesData = data[24].Losses;
        var firstALCLosses = document.getElementById("5th-nle-losses")
        firstALCLosses.textContent = firstALCLossesData;
        


        /*NL WEST*/

        /*FIRST NL WEST*/

        var firAlcNameData = data[25].Name;
        var firALCName = document.getElementById("1st-nlw-name");
        firALCName.textContent = firAlcNameData;

        var firALCWinsData = data[25].Wins;
        var firALCWins = document.getElementById("1st-nlw-wins")
        firALCWins.textContent = firALCWinsData;

        var firALCLossesData = data[25].Losses;
        var firALCLosses = document.getElementById("1st-nlw-losses")
        firALCLosses.textContent = firALCLossesData;

        /*SECOND NL WEST*/

        var secAlcNameData = data[26].Name;
        var secALCName = document.getElementById("2nd-nlw-name");
        secALCName.textContent = secAlcNameData;

        var winsData = data[26].Wins;
        var wins = document.getElementById("2nd-nlw-wins")
        wins.textContent = winsData;

        var firstALCLossesData = data[26].Losses;
        var firstALCLosses = document.getElementById("2nd-nlw-losses")
        firstALCLosses.textContent = firstALCLossesData;

        /*THIRD NL WEST*/

        var thirAlcNameData = data[27].Name;
        var thirALCName = document.getElementById("3rd-nlw-name");
        thirALCName.textContent = thirAlcNameData;

        var thirALCWinsData = data[27].Wins;
        var thirALCWins = document.getElementById("3rd-nlw-wins")
        thirALCWins.textContent = thirALCWinsData;

        var thirALCLossesData = data[27].Losses;
        var thirALCLosses = document.getElementById("3rd-nlw-losses")
        thirALCLosses.textContent = thirALCLossesData;

        /*FOURTH NL WEST*/

        var secAlcNameData = data[28].Name;
        var secALCName = document.getElementById("4th-nlw-name");
        secALCName.textContent = secAlcNameData;

        var winsData = data[28].Wins;
        var wins = document.getElementById("4th-nlw-wins")
        wins.textContent = winsData;

        var firstALCLossesData = data[28].Losses;
        var firstALCLosses = document.getElementById("4th-nlw-losses")
        firstALCLosses.textContent = firstALCLossesData;

        /*FIFTH NL WEST*/

        var secAlcNameData = data[29].Name;
        var secALCName = document.getElementById("5th-nlw-name");
        secALCName.textContent = secAlcNameData;

        var winsData = data[29].Wins;
        var wins = document.getElementById("5th-nlw-wins")
        wins.textContent = winsData;

        var firstALCLossesData = data[29].Losses;
        var firstALCLosses = document.getElementById("5th-nlw-losses")
        firstALCLosses.textContent = firstALCLossesData;

    })
}

mlbStandings();