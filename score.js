const firebase = require('firebase');
const axios = require('axios');
const cron = require('node-cron');
const fs = require('fs');


const Stages = JSON.parse(fs.readFileSync('matches.json', 'utf8'));

var config = {
    apiKey: "AIzaSyDU0TwfdXnT_b4a0MYzBTaEA2dLj3IntEU",
    authDomain: "ow-bet.firebaseapp.com",
    databaseURL: "https://ow-bet.firebaseio.com",
    projectId: "ow-bet",
    storageBucket: "ow-bet.appspot.com",
    messagingSenderId: "274495850394"
};
firebase.initializeApp(config);
const dataBase = firebase.database();

const PlayerDB = dataBase.ref(`/players`);

let currentStage = Stages.find((stage) => {
    return Date.now() / 1000 < stage.end
}) || Stages[0];

// currentStage = Stages[1];
// console.log(currentStage);

console.log('SCORE INIT');

cron.schedule('0 0 * * 1', () => {
    console.log('Change currentStage');
    currentStage = Stages.find((stage) => {
        return Date.now() / 1000 < stage.end
    }) || Stages[0];
});

cron.schedule('*/30 * * * *', () => {
    console.log('CALCULE BETS CRON');
    CalculBets(true);
    setTimeout(()=>{
        console.log('CALCULE TOTAL CRON');
        CalculeTotal();
    }, 10000)
});


CalculBets(true);
    setTimeout(()=>{
        console.log('CALCULE TOTAL CRON');
        CalculeTotal();
    }, 10000)

function CalculBets(force = false) {
    PlayerDB.once("value").then((snapshot) => {
        let keysUser = Object.keys(snapshot.val());
        
        const playersSnap = snapshot.val();
        const Players = [];
        const arrayMatches = [];
        keysUser.forEach((login) => {
            if (!Players[login]) {
                Players[login] = {};
                Players[login].bets = {};
                Players[login].loveTeam = playersSnap[login].loveTeam;
            }
            if (playersSnap[login].bets) {

                let keysBets = Object.keys(playersSnap[login].bets);
                keysBets.map((idMatch) => {
                    idMatch = parseInt(idMatch);
                    if (currentStage.matches.find((match) => {
                        return match.id === idMatch;
                    })) {
                            
                        if (force) {
                            if (!Players[login].bets[idMatch]) {
                                Players[login].bets[idMatch] = {};
                            }
                            Players[login].bets[idMatch] = playersSnap[login].bets[idMatch];
                            if (arrayMatches.indexOf(idMatch) < 0) {
                                arrayMatches.push(idMatch);
                            }
                        } else {
                            if (playersSnap[login].bets[idMatch].valid !== true) {
                                if (!Players[login].bets[idMatch]) {
                                    Players[login].bets[idMatch] = {};
                                }
                                Players[login].bets[idMatch] = playersSnap[login].bets[idMatch];
                                if (arrayMatches.indexOf(idMatch) < 0) {
                                    arrayMatches.push(idMatch);
                                }
                            }
                        }
                    }
                })
            }
        })
        console.log(arrayMatches)
        arrayMatches.map(async (idMatch) => {
            console.log('MATCH : ', idMatch);
            await axios.get(`https://api.overwatchleague.com/matches/${idMatch}`)
                .then(function (response) {
                    if (response.data.actualStartDate) {
                        Object.keys(Players).map((player) => {
                            if (Object.keys(Players[player].bets).find((idMatchPlayer) => {
                                    idMatchPlayer = parseInt(idMatchPlayer);
                                    return idMatchPlayer === idMatch;
                                })) {
                                console.log('PLAYER : ', player);
                                const power = Players[player].bets[idMatch].power || false;

                                const newData = CalculScore({
                                    TeamA: response.data.competitors[0].abbreviatedName,
                                    TeamB: response.data.competitors[1].abbreviatedName,
                                    resultA: response.data.scores[0].value,
                                    resultB: response.data.scores[1].value,
                                    date: response.data.actualStartDate,
                                    stage: {
                                        id: currentStage.id,
                                        name: currentStage.name
                                    },
                                    scoreA: Players[player].bets[idMatch].scoreA,
                                    scoreB: Players[player].bets[idMatch].scoreB,
                                    valid: true,
                                    score: 0,
                                    type: 'lose',
                                }, Players[player].loveTeam, power)
                                dataBase.ref(`/players/${player}/bets/${idMatch}`).update(newData);

                            }

                        })

                    }


                })
                .catch(function (error) {
                    console.log(error);
                })
        })

    });
}



function CalculeTotal() {
    PlayerDB.once("value").then((snapshot) => {

        const Players = snapshot.val()

        Object.keys(snapshot.val()).map((login) => {
            let currentScore = {
                total: 0,
                win: 0,
                lose: 0,
                totalBets: 0,
                stages: {
                    0: {
                        total: 0,
                        win: 0,
                        lose: 0,
                        totalBets: 0,
                    },
                    1: {
                        total: 0,
                        win: 0,
                        lose: 0,
                        totalBets: 0,
                    },
                    2: {
                        total: 0,
                        win: 0,
                        lose: 0,
                        totalBets: 0,
                    },
                    3: {
                        total: 0,
                        win: 0,
                        lose: 0,
                        totalBets: 0,
                    }
                }
            };
            if (Players[login].bets)
                Object.keys(Players[login].bets).map((idMatch) => {
                    if (Players[login].bets[idMatch].valid) {
                        currentScore.totalBets += 1;
                        currentScore.total += Players[login].bets[idMatch].score;

                        let type = Players[login].bets[idMatch].type.split('-');
                        (type[0] === 'win' || type[0] === 'P1' || type[0] === 'full') ? currentScore.win += 1: currentScore.lose += 1;

                        currentScore.stages[Players[login].bets[idMatch].stage.id].total += Players[login].bets[idMatch].score;
                        currentScore.stages[Players[login].bets[idMatch].stage.id].totalBets += 1;
                        (type[0] === 'win' || type[0] === 'P1' || type[0] === 'full') ? currentScore.stages[Players[login].bets[idMatch].stage.id].win += 1: currentScore.stages[Players[login].bets[idMatch].stage.id].lose += 1;

                    }
                })
            dataBase.ref(`/players/${login}/score`).update(currentScore);
            console.log(login, currentScore);
        })
    })
}


function CalculScore(data, loveTeam, power) {

    const teamWin = (data.resultA > data.resultB) ? data.TeamA : data.TeamB;
    const teamWinProno = (data.scoreA > data.scoreB) ? data.TeamA : data.TeamB;
    if (teamWin === teamWinProno) {
        data.score += 10;
        data.type = 'win';
        if (data.scoreA === data.resultA && data.scoreB === data.resultB) {
            data.score += 10;
            data.type = 'full';
        }
    }
    if (power) {
        switch (power.type) {
            case 1:
                data.type += `-P${power.type}`;
                data.score = 20;
                break;
            case 2:
                data.type += `-P${power.type}`;
                data.score *= 2;
                break;
            case 3:
                data.type += `-P${power.type}`;
                data.score = (data.score > 0) ? data.score + 20 : -20;
                break;

            default:
                console.log('Error Power')
                break;
        }
    }
    if (loveTeam)
        if (data.TeamA == loveTeam || data.TeamB == loveTeam) {
            data.score *= 2;
            data.type += '-Team'
        }
    console.log('CalculScore', data);
    return data;
}


// CalculBets(false);

// CalculeTotal();