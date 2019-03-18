const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const firebase = require('firebase');
const passwordHash = require('password-hash');
const axios = require('axios');

const io = require('socket.io')();

let cron = require('node-cron');


var config = {
    apiKey: "AIzaSyDU0TwfdXnT_b4a0MYzBTaEA2dLj3IntEU",
    authDomain: "ow-bet.firebaseapp.com",
    databaseURL: "https://ow-bet.firebaseio.com",
    projectId: "ow-bet",
    storageBucket: "ow-bet.appspot.com",
    messagingSenderId: "274495850394"
};
firebase.initializeApp(config);

function calculBetsUsers(force = false) {
    axios.get('https://api.overwatchleague.com/schedule')
        .then(function (response) {
            let currentUser = [];
            response.data.data.stages.map((stage) => {
                stage.weeks.map((week) => {
                    week.matches.map((match) => {
                        if (match.startDateTS < Date.now()) {
                            if (match.scores[0].value != 0 || match.scores[1].value != 0) {
                                if (match.endDateTS < Date.now() && match.showEndTime == true) {
                                    const Players = firebase.database().ref('/players');
                                    Players.once("value", function (snapshot) {
                                        const playersDB = snapshot.val();
                                        let keysPlayers = Object.keys(playersDB);
                                        keysPlayers.map((pseudo) => {
                                            currentUser[pseudo] = {
                                                score: (currentUser[pseudo]) ? currentUser[pseudo].score : playersDB[pseudo].score
                                            }

                                            if (playersDB[pseudo].bets && playersDB[pseudo].bets[match.id]) {

                                                if (force !== false || playersDB[pseudo].bets[match.id].valid !== true) {


                                                    if (playersDB[pseudo].bets[match.id].resultA != match.scores[0].value || playersDB[pseudo].bets[match.id].resultB != match.scores[1].value) {
                                                        let betsPlayer = firebase.database().ref(`players/${pseudo}/bets/${match.id}`);

                                                        betsPlayer.update({
                                                            valid: false,
                                                            score: 0,
                                                            resultA: match.scores[0].value,
                                                            resultB: match.scores[1].value,
                                                            TeamA: match.competitors[0].abbreviatedName,
                                                            TeamB: match.competitors[1].abbreviatedName
                                                        });
                                                    }
                                                    const winTeam = (match.scores[0].value > match.scores[1].value) ? "A" : "B";
                                                    const winBet = (playersDB[pseudo].bets[match.id].scoreA > playersDB[pseudo].bets[match.id].scoreB) ? "A" : "B";
                                                    let currentScore = 0;
                                                    let type = 'lose';
                                                    if (winTeam == winBet) {
                                                        currentScore += 10;
                                                        type = 'win'
                                                    }
                                                    if (match.scores[0].value == playersDB[pseudo].bets[match.id].scoreA && match.scores[1].value == playersDB[pseudo].bets[match.id].scoreB) {
                                                        currentScore += 10;
                                                        type = 'full'
                                                    }


                                                    if (playersDB[pseudo].bets[match.id].power) {
                                                        console.log(`POWER USED | BY ${pseudo} | ${match.id} | ${match.competitors[0].abbreviatedName} | ${match.competitors[1].abbreviatedName} | score : ${currentScore}`);
                                                        const power = playersDB[pseudo].bets[match.id].power;

                                                        switch (power.type) {
                                                            case 1:
                                                                console.log(power.name);
                                                                type += `Power(${power.name})`
                                                                currentScore = 20;
                                                                break;
                                                            case 2:
                                                                console.log(power.name);
                                                                type += `Power(${power.name})`
                                                                currentScore *= 2;
                                                                break;
                                                            case 3:
                                                                console.log(power.name);
                                                                break;
                                                            case 4:
                                                                console.log(power.name);
                                                                break;
                                                            case 5:
                                                                console.log(power.name);
                                                                break;

                                                            default:
                                                                console.log('Error Power')
                                                                break;
                                                        }



                                                    }
                                                    if (match.competitors[0].abbreviatedName == playersDB[pseudo].loveTeam || match.competitors[1].abbreviatedName == playersDB[pseudo].loveTeam) {
                                                        // MEME SI 0 POINT +10 BUFF ALLSTAR
                                                        // if (currentScore == 0) {
                                                        //     currentScore += 10;
                                                        // }
                                                        type += 'Team'
                                                        currentScore *= 2;
                                                    }
                                                    let betsPlayer = firebase.database().ref(`players/${pseudo}/bets/${match.id}`);
                                                    betsPlayer.update({
                                                        valid: true,
                                                        score: currentScore,
                                                        resultA: match.scores[0].value,
                                                        resultB: match.scores[1].value,
                                                        TeamA: match.competitors[0].abbreviatedName,
                                                        TeamB: match.competitors[1].abbreviatedName,
                                                        dateMatch: match.startDateTS,
                                                        type: type

                                                    });
                                                    currentUser[pseudo].score += currentScore;



                                                }
                                            }

                                        })
                                    }, function (error) {
                                        console.log("Error: " + error.code);
                                    });
                                }
                            }

                        }

                    })


                });
            })
        })
        .catch(function (error) {
            console.log(error);
        });



}


function calculScoreUser(user = "Hystérias") {

    const Players = firebase.database().ref(`/players/${user}`);
    Players.once("value", function (snapshot) {

        const userDB = snapshot.val();
        const bets = userDB.bets;
        if (bets) {
            let keysBets = Object.keys(bets);
            let currentScore = {
                total: 0,
                win: 0,
                lose: 0,
                totalBets: 0
            }

            keysBets.map((key) => {
                if (bets[key].valid) {
                    axios.get(`https://api.overwatchleague.com/matches/${key}`)
                        .then((res) => {
                            // console.log(bets[key]);
                            bets[key].date = res.data.endDate;
                            currentScore.total += bets[key].score;

                            const winTeam = (bets[key].resultA > bets[key].resultB) ? "A" : "B";
                            const winBet = (bets[key].scoreA > bets[key].scoreB) ? "A" : "B";

                            if (winTeam == winBet) {
                                currentScore.win += 1;
                            } else {
                                currentScore.lose += 1;
                            }
                            currentScore.totalBets += 1;
                            userDB.bets = bets;
                            userDB.score = currentScore;
                            Players.update(userDB);

                        })
                        .catch((error) => {
                            console.log(error);
                        })

                }
            })
        }


    })

}

cron.schedule('0,15,30,45 */1 * * 3-7', () => {
    let date = new Date();
    console.log('CRON BETS');
    console.log({
        ts: date.getTime(),
        day: date.getDate(),
        month: date.getMonth() + 1,
        year: date.getFullYear(),
        hours: date.getHours(),
        min: date.getMinutes(),

    });
    calculBetsUsers();
    let updateDB = firebase.database().ref(`update/${Date.now()}`);

    updateDB.update({
        ts: date.getTime(),
        day: date.getDate(),
        month: date.getMonth() + 1,
        year: date.getFullYear(),
        hours: date.getHours(),
        min: date.getMinutes(),

    });
});

cron.schedule('0,15,30,45 */1 * * 3-7', () => {
    let date = new Date();
    console.log('CRON SCORE');
    console.log({
        ts: date.getTime(),
        day: date.getDate(),
        month: date.getMonth() + 1,
        year: date.getFullYear(),
        hours: date.getHours(),
        min: date.getMinutes(),

    });
    const PlayerDB = firebase.database().ref(`/players`);

    PlayerDB.once("value", function (snapshot) {
        let keysUser = Object.keys(snapshot.val());
        // console.log(keysUser);
        keysUser.map((user) => {
            calculScoreUser(user);
        })
    })
});


const app = express();

app.use(express.static(path.join(__dirname, '/build')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/api/getPlayersRanking', (req, res) => {
    var Players = firebase.database().ref('/players');

    Players.once("value", function (snapshot) {
        const players = snapshot.val();
        keysPlayers = Object.keys(players);

        let arrayPlayers = keysPlayers.map((pseudo) => {
            delete players[pseudo].mdp;
            delete players[pseudo].mail;
            return players[pseudo];
        })
        arrayPlayers = arrayPlayers.filter((player) => {

            return player.status >= 1 && player.status !== 9;
        })
        arrayPlayers = arrayPlayers.sort(function (a, b) {
            var textA = a.name.toUpperCase();
            var textB = b.name.toUpperCase();
            return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        });
        arrayPlayers = arrayPlayers.sort(function (a, b) {
            const totalA = a.score.total || 0;
            const totalB = b.score.total || 0;

            return totalB - totalA;
        })
        res.json(arrayPlayers);
    }, function (error) {
        console.log("Error: " + error.code);
    });


});


app.get('/api/getHome', (req, res) => {
    var Home = firebase.database().ref('/Home');

    Home.once("value", function (snapshot) {
        res.json(snapshot.val());
    }, function (error) {
        console.log("Error: " + error.code);
    });


});

app.post('/api/getPowersUser', (req, res) => {
    var Powers = firebase.database().ref(`/players/${req.body.user}/power`);

    Powers.once("value", function (snapshot) {
        res.json(snapshot.val());
    }, function (error) {
        console.log("Error: " + error.code);
    });


});
app.post('/api/usePower', (req, res) => {
    console.log(req.body)
    var Powers = firebase.database().ref(`/players/${req.body.user}/power/${req.body.spell}`)
    firebase.database().ref(`/players/${req.body.user}/power/${req.body.spell}/date`).update({
        use: Date.now(),
    });;
    var Bet = firebase.database().ref(`/players/${req.body.user}/bets/${req.body.idMatch}`);


    Powers.once("value", function (snapshot) {
        console.log(snapshot.val());
        Bet.update({
            power: snapshot.val(),
        });
    }, function (error) {
        console.log("Error: " + error.code);
    });
    Bet.once("value", function (snapshot) {
        console.log(snapshot.val());
    }, function (error) {
        console.log("Error: " + error.code);
    });
    res.json(true);


});

app.post('/api/loveTeam', (req, res) => {
    var playersRef = firebase.database().ref(`players/${req.body.user}`);
    playersRef.update({
        loveTeam: req.body.teamId
    });


    var Player = firebase.database().ref(`players/${req.body.user}`);

    Player.once("value", function (snapshot) {
        res.json(snapshot.val());
    }, function (error) {
        console.log("Error: " + error.code);
    });
})
app.post('/api/sendAchievement', (req, res) => {

    const {
        user,
        achievement
    } = req.body;
    const playerDB = firebase.database().ref(`/players/${user}/achievement/${achievement}`);
    playerDB.update({
        date: Date.now(),
        valid: true
    });
})



app.post('/api/login', (req, res) => {
    const player = {
        login: req.body.login,
        pass: req.body.pass
    };

    const playerDB = firebase.database().ref(`/players/${player.login}`);
    playerDB.once("value", function (snapshot) {
        if (snapshot.val() != null) {
            player.snap = snapshot.val();
            player.snap.login = player.login;
            if (passwordHash.verify(player.pass, player.snap.mdp)) {
                playerDB.update({
                    lastLogin: Date.now(),
                });
                const powers = [{
                        link: 'bets-0',
                        type: 1,
                        name: "Fix Score",
                    },
                    {
                        link: 'bets-1',
                        type: 1,
                        name: "Fix Score",
                    },
                    {
                        link: 'bets-2',
                        type: 1,
                        name: "Fix Score",
                    },
                    {
                        link: 'bets-3',
                        type: 1,
                        name: "Fix Score",
                    },
                    {
                        link: 'bets-4',
                        type: 1,
                        name: "Fix Score",
                    },
                    {
                        link: 'bets-5',
                        type: 1,
                        name: "Fix Score",
                    },
                    {
                        link: 'bets-6',
                        type: 1,
                        name: "Fix Score",
                    },
                    {
                        link: 'bets-6',
                        type: 1,
                        name: "Fix Score",
                    },
                    {
                        link: 'fullTeam-1',
                        type: 2,
                        name: "x2",
                    },
                    {
                        link: 'fullTeam-2',
                        type: 2,
                        name: "x2",
                    },
                ]
                if (player.snap.achievement) {
                    powers.forEach((power) => {
                        player.snap.power = (player.snap.power) ? player.snap.power : [];

                        if (!player.snap.power[power.link]) {
                            if (player.snap.achievement[power.link]) {
                                player.snap.power[power.link] = {
                                    name: power.name,
                                    type: power.type,
                                    date: {
                                        give: Date.now(),
                                        use: 0,
                                    },
                                };
                            }
                        }
                    })



                }

                if (player.power) {
                    playerDB.update({
                        power: player.snap.power,
                    });
                } else {
                    playerDB.set(player.snap);
                }
                console.log('ALL POWER', player.snap.power);


                res.json({
                    status: true,
                    message: `Bienvenue ${player.login}, tu vas maintenant etre redirigé vers la Home`,
                    data: player.snap
                });
            } else {
                res.json({
                    status: false,
                    message: "Password faux !"
                })
            }

        } else {
            res.json({
                status: false,
                message: "Inscrit toi plutot !"
            })
        }
    }, function (error) {
        console.log("Error: " + error.code);
    });
})

app.get('/api/getPlayer/:idPlayer', (req, res) => {
    var Player = firebase.database().ref(`/players/${req.params.idPlayer}`);
    Player.once("value", function (snapshot) {
        const user = snapshot.val();
        if (user != null) {
            delete user.mdp;

            res.json(user)
        } else {
            res.json({
                login: req.params.idPlayer,
                error: "Problème avec la Base de donnée le site est en Béta :D"
            })
        }

    }, function (error) {
        console.log("Error: " + error.code);
    });

})

app.post('/api/updatePlayer', (req, res) => {
    const user = req.body.user;
    let newMDP = (user.mdp) ? user.mdp : null;
    const playersRef = firebase.database().ref(`/players/${user.login}`);
    if (newMDP == null) {
        playersRef.update(user);
        res.json({
            redirect: false,
            message: 'Profil Modifier',
            user: user
        });
    } else {
        const newPass = passwordHash.generate(user.mdp);
        user.mdp = newPass;
        playersRef.update(user);
        res.json({
            redirect: true,
            message: 'Profil modifié, tu va etre redirigé',
            user: user
        });
    }
})

app.post('/api/signIn', (req, res) => {
    const player = {
        inscript: Date.now(),
        name: req.body.login,
        login: req.body.login,
        score: 0,
        mail: "",
        mdp: passwordHash.generate(req.body.pass),
        status: 1,
        lastLogin: 0,
        bets: {}

    };

    const playerDB = firebase.database().ref(`/players/${player.name}`);
    playerDB.once("value", function (snapshot) {
        if (snapshot.val() == null) {

            var playersRef = firebase.database().ref(`/players/${player.name}`);
            playersRef.update(player);

            res.json({
                status: true,
                message: `Bienvenue ${player.name}, tu es maintenant inscrit et connecté au site !`,
                data: player
            })

        } else {
            res.json({
                status: false,
                message: `Le Pseudo ${player.name} est déja utilisé !`
            })
        }
    }, function (error) {
        console.log("Error: " + error.code);
    });

})
app.post('/api/sendBet', (req, res) => {
    const scoreA = parseInt(req.body.scoreA);
    const scoreB = parseInt(req.body.scoreB);
    const idMatch = parseInt(req.body.idMatch);
    const user = req.body.user;
    console.log(req.body.idMatch, user.login);

    axios.get(`https://api.overwatchleague.com/matches/${idMatch}`).then((response) => {
        if (response.data.startDate > Date.now() || user.status === 9) {
            if (!isNaN(scoreA) && !isNaN(scoreB)) {
                var playersRef = firebase.database().ref(`players/${user.login}/bets/${idMatch}`);
                playersRef.update({
                    scoreA: scoreA,
                    scoreB: scoreB
                });
            }
            var playerBets = firebase.database().ref(`players/${user.login}/bets`);
            playerBets.once("value", function (snapshot) {
                res.json(snapshot.val())
            }, function (error) {
                console.log("Error: " + error.code);
            });
        }
    }).catch((error) => {
        console.log(error)
    })
})

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
    const index = path.join(__dirname, '/build/index.html');
    res.sendFile(path.join(index));
});

const userList = [];

io.on('connection', function (socket) {
    let currentUser;
    socket.on('sendLogin', (user) => {
        const verifUserList = userList.find((current) => {
            return current.login == user.login;
        }) || null;
        if (verifUserList == null) {
            userList.push(user);
            currentUser = user;
        }
        io.emit('newUser', userList);
        chatMessage = firebase.database().ref('/chat/');
        chatMessage.on("value", function (snapshot) {
            io.emit('newMessages', snapshot.val())
        }, function (error) {
            console.log("Error: " + error.code);
        });
    });

    // socket.on('login', (user) => {
    //     if (userIO == null) {
    //         userIO = user;
    //     }

    // })

    socket.on('sendMessage', (message, user) => {
        if (message != null && message != "") {
            console.log('NEW MESSAGE CHAT');
            var updateChat = firebase.database().ref(`/chat/${Date.now()}`);
            updateChat.update({
                user: user,
                date: Date.now(),
                message: message
            });
        }
    });

    socket.on('disconnect', function (event) {
        let newListUsers = null;
        if (currentUser != null) {
            newListUsers = userList.map((user) => {
                return user.name !== currentUser.name;
            })
        }

    });
});
const port = process.env.PORT || 5000;
io.listen(port + 1);
app.listen(port);

console.log('App is listening on port ' + port);