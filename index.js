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

console.log(__dirname);


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
app.use(express.static('client/build'));
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({
    extended: true
})); // support encoded bodies

// An api endpoint that returns a short list of items
app.get('/api/getList', (req, res) => {
    var list = ["item1", "item2", "item3"];
    res.json(list);
    console.log('Sent list of items');
});
app.post('/api/login', (req, res) => {
    const player = {
        login: req.body.login,
        pass: req.body.pass
    };
    
    const playerDB = firebase.database().ref(`/players/${player.login}`);
    playerDB.once("value", function (snapshot) {
        if (snapshot.val() != null) {
            player.snap = snapshot.val();
            if (passwordHash.verify(player.pass, player.snap.mdp)) {
                login = true;
                const playersRef = firebase.database().ref(`/players/${player.login}`);
                playersRef.update({
                    lastLogin: Date.now(),
                });
                res.json({
                    status: true,
                    message: "Tu va etre redirigé",
                    data: snapshot.val()
                });
            } else {
                res.json({
                    status: false,
                    message: "Pseudo ou Password faux !"
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


app.post('/api/signIn', (req, res) => {
    console.log(req.body);
    const player = {
        name: req.body.login,
        score: 0,
        mail: "",
        mdp: passwordHash.generate(req.body.pass),
        status: 1,
        lastLogin: 0,
        bets:{}
        
    };
    
    
    const playerDB = firebase.database().ref(`/players/${player.name}`);
    playerDB.once("value", function (snapshot) {
        if (snapshot.val() == null) {
            
            var playersRef = firebase.database().ref(`/players/${player.name}`);
            playersRef.update (player);
            
                res.json({
                    status: true,
                    message: `GO ${player.name} !`,
                    data: player
                })
                
            } else {
                res.json({
                    status: false,
                    message: `Tu essayer d'usurpé l'identité de ${player.login} !`
                })
            }
        }, function (error) {
            console.log("Error: " + error.code);
        });
        
    })
    app.post('/api/sendBet', (req, res) => {
        console.log(req.body);
        const scoreA = parseInt(req.body.scoreA) ;
        const scoreB = parseInt(req.body.scoreB);
        const idMatch = parseInt(req.body.idMatch);
        const user = req.body.user;
        
        
        if(isNaN(scoreA) || isNaN(scoreB)){
            console.log("HUM PAS DE CHIFFRE")
        }else{
            var playersRef = firebase.database().ref(`players/${user.name}/bets/${idMatch}`);
            playersRef.update ({
                scoreA: scoreA,
                scoreB: scoreB
            });
        }
        
        var playerBets = firebase.database().ref(`players/${user.name}/bets`);
        
        playerBets.once("value", function(snapshot) {
            res.json(snapshot.val())
        }, function (error) {
            console.log("Error: " + error.code);
        });
        
    })
    
    // Handles any requests that don't match the ones above
    app.get('*', (req, res) => {
        res.sendFile('client/build/index.html', { root: __dirname });
    });
    
    const port = process.env.PORT || 5000;
    app.listen(port);
    
    console.log('App is listening on port ' + port);