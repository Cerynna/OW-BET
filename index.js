const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const firebase = require('firebase');
const passwordHash = require('password-hash');


var config = {
    apiKey: "AIzaSyDU0TwfdXnT_b4a0MYzBTaEA2dLj3IntEU",
    authDomain: "ow-bet.firebaseapp.com",
    databaseURL: "https://ow-bet.firebaseio.com",
    projectId: "ow-bet",
    storageBucket: "ow-bet.appspot.com",
    messagingSenderId: "274495850394"
};
firebase.initializeApp(config);


// Update DATA
// var playersRef = firebase.database().ref("players/");
// playersRef.update ({
//     Hystérias: {
//         name: "Hystérias",
//         score: 0,
//         mail: "cerynna@gmail.com",
//         mdp: passwordHash.generate('0478876681'),
//         status: 9,
//         lastLogin: 0,
//         bets:{}
//     }
// });


// Read DATA
// var Players = firebase.database().ref('/players');

// Players.on("value", function(snapshot) {
//     console.log(snapshot.val());
// }, function (error) {
//     console.log("Error: " + error.code);
// });


const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, '/build')));
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({
    extended: true
})); // support encoded bodies

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


        arrayPlayers = arrayPlayers.sort(function (a, b) {
            var textA = a.name.toUpperCase();
            var textB = b.name.toUpperCase();
            return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        });
        arrayPlayers = arrayPlayers.sort(function (a, b) {
            return b.score - a.score;
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

app.post('/api/loveTeam', (req, res) => {
    console.log(req.body.user);
    console.log(req.body.teamId);

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
                login = true;
                const playersRef = firebase.database().ref(`/players/${player.login}`);
                playersRef.update({
                    lastLogin: Date.now(),
                });
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

app.post('/api/updatePlayer', (req, res) => {
    const user = req.body.user;


    let newMDP = user.mdp.match(/sha1\$/);

    const playersRef = firebase.database().ref(`/players/${user.login}`);

    if (newMDP != null) {
        playersRef.update(user);
        res.json({
            redirect: false,
            message: 'Profil Modifier',
            user: user
        });
    } else {
        console.log('NEW PASS');
        const newPass = passwordHash.generate(user.mdp);
        user.mdp = newPass;
        playersRef.update(user);
        res.json({
            redirect: true,
            message: 'Profil modifié, tu va etre redirigé',
            user: user
        });
    }


    // const player = {
    //     name: req.body.login,
    //     score: 0,
    //     mail: "",
    //     mdp: passwordHash.generate(req.body.pass),
    //     status: 1,
    //     lastLogin: 0,
    //     bets:{}

    // };



})

app.post('/api/signIn', (req, res) => {
    console.log(req.body);
    const player = {
        name: req.body.login,
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
    console.log(req.body);
    const scoreA = parseInt(req.body.scoreA);
    const scoreB = parseInt(req.body.scoreB);
    const idMatch = parseInt(req.body.idMatch);
    const user = req.body.user;


    if (!isNaN(scoreA) || !isNaN(scoreB)) {
        var playersRef = firebase.database().ref(`players/${user.name}/bets/${idMatch}`);
        playersRef.update({
            scoreA: scoreA,
            scoreB: scoreB
        });
    }

    var playerBets = firebase.database().ref(`players/${user.name}/bets`);
    playerBets.once("value", function (snapshot) {
        res.json(snapshot.val())
    }, function (error) {
        console.log("Error: " + error.code);
    });

})

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
    const index = path.join(__dirname, '/build/index.html');
    res.sendFile(path.join(index));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);