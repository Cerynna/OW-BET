const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const firebase = require('firebase');
const passwordHash = require('password-hash');
const axios = require('axios');

const fs = require('fs');

const Stages = JSON.parse(fs.readFileSync('matches.json', 'utf8'));
const Powers = JSON.parse(fs.readFileSync('Powers.json', 'utf8'));


function findInJSON(matchId) {
    const test = Stages.map((stage) => {
        const lol = stage.matches.find((match) => {
            return match == matchId
        }) || null;

        return (lol !== null) ? {
            name: stage.name,
            id: stage.id
        } : null;

    })
    return test.find((la) => {
        return la != null
    })
}


var config = {
    apiKey: "AIzaSyDU0TwfdXnT_b4a0MYzBTaEA2dLj3IntEU",
    authDomain: "ow-bet.firebaseapp.com",
    databaseURL: "https://ow-bet.firebaseio.com",
    projectId: "ow-bet",
    storageBucket: "ow-bet.appspot.com",
    messagingSenderId: "274495850394"
};
firebase.initializeApp(config);



// cron.schedule('*/45 * * * *', () => {
//     console.log('CRON BETS');
//     allCalcule();
// });

// allCalcule();

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
            // const totalA = a.score.total || 0;
            // const totalB = b.score.total || 0;
            const totalA = (a.score.stages) ? a.score.stages[2].total : 0 || 0;
            const totalB = (b.score.stages) ? b.score.stages[2].total : 0 || 0;
            return totalB - totalA;
        })

        res.json(arrayPlayers);
    }, function (error) {
        console.log("Error: " + error.code);
    });


});
app.get('/api/Stages', (req, res) => {
    const Stages = JSON.parse(fs.readFileSync('matches.json', 'utf8'));
    res.json(Stages);

});
app.get('/api/allTeams', (req, res) => {
    fs.readdir('./build/imgs/teams', (err, files) => {
        res.json(files);
        // files.forEach(file => {
        //   console.log(file);
        // });
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
                    {
                        link: 'beta-open',
                        type: 3,
                        name: "Clutsh",
                    },
                    {
                        link: 'beta-close',
                        type: 3,
                        name: "Clutsh",
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

app.get('/api/getPlayerBet/:idPlayer/:idMatch', (req, res) => {
    var Player = firebase.database().ref(`/players/${req.params.idPlayer}/bets/${req.params.idMatch}`);
    Player.once("value", function (snapshot) {
        const user = snapshot.val();
        if (user != null) {
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

});
app.get('/api/power/remove/:idPlayer/:idMatch', (req, res) => {
    var Player = firebase.database().ref(`/players/${req.params.idPlayer}/bets/${req.params.idMatch}`);
    var PowerPlayer = firebase.database().ref(`/players/${req.params.idPlayer}/power`);
    Player.once("value", function (snapshot) {
        const bet = snapshot.val();
        if (bet != null) {
            let dateUse = snapshot.child('power').child('date').child('use').val()

            PowerPlayer.once('value', (snapshot) => {
                snapshot.forEach((data) => {
                    let dateUsePower = data.child("date").child('use').val()
                    if (dateUsePower === dateUse) {
                        console.log(dateUse)

                        console.log()
                    }
                })
                // console.log(snapshot.val());
            })

            delete bet.power;
            Player.set(bet);
            console.log(bet);
            res.json(true);
        } else {
            // res.json({
            //     login: req.params.idPlayer,
            //     error: "Problème avec la Base de donnée le site est en Béta :D"
            // })
        }

    }, function (error) {
        console.log("Error: " + error.code);
    });






    // res.json(true);

})

app.get('/api/power', (req, res) => {
    const Powers = JSON.parse(fs.readFileSync('Powers.json', 'utf8'));
    res.json(Powers);

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
    const playerBets = firebase.database().ref(`players/${user.login}/bets`);
    const playersRef = firebase.database().ref(`players/${user.login}/bets/${idMatch}`);

    axios.get(`https://api.overwatchleague.com/matches/${idMatch}`).then((response) => {
        if (response.data.startDate > Date.now() || user.status === 9) {
            if (!isNaN(scoreA) && !isNaN(scoreB)) {
                playersRef.update({
                    scoreA: scoreA,
                    scoreB: scoreB
                });
            }

            playerBets.once("value", function (snapshot) {
                res.json(snapshot.val())
            }, function (error) {
                console.log("Error: " + error.code);
            });
        }
    }).catch((error) => {
        // console.log(error);
        playersRef.update({
            scoreA: parseInt(scoreA, 10) || 0,
            scoreB: parseInt(scoreB, 10) || 0,
            error: 'NOT FOUND',
        });
    })
})

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
    const index = path.join(__dirname, '/build/index.html');
    res.sendFile(path.join(index));
});


const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);