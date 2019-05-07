const firebase = require('firebase');
const axios = require('axios');
const sleep = require('sleep');

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

const PlayerDB = firebase.database().ref(`/players`);


const test = Stages.find((stage) => {

    return Date.now() / 1000 < stage.start;



});


PlayerDB.once("value").then((snapshot) => {
    let keysUser = Object.keys(snapshot.val());
    const players = snapshot.val();

    keysUser.forEach((login) => {
        // console.log(players[login].bets);
        if (players[login].bets) {
            let keysBets = Object.keys(players[login].bets);
            keysBets.map((idMatch) => {
                idMatch = parseInt(idMatch);
                // console.log(test.matches);
                const lol = test.matches.find((idMatchStage) => {
                    // console.log(idMatchStage, idMatch);
                    return idMatchStage == idMatch;
                })
                console.log('lol',lol);
            })
        }
    })

    // console.log(keysUser);

    // console.log(keysUser);
    // keysUser.forEach((user) => {
    //     console.log(user);
    //     if (players[user].bets) {
    //         const keyMatchs = Object.keys(players[user].bets);
    //         let count = 0;
    //         let test = keyMatchs.map(async(idMatch) => {
    //             // if (matchMemory.indexOf(idMatch) < 0) {
    //             //     // console.log(idMatch);
    //             //     matchMemory.push(idMatch);

    //             //     count += 1;
    //             //     let res = await axios.get(`https://api.overwatchleague.com/matches/${idMatch}`);
    //             //     let { data } = await res.data;
    //             //     // console.log(data);
    //             //     return data;




    //             // }
    //         });
    //         // console.log(test);
    //     }


    // })


});







// axios.get(`https://api.overwatchleague.com/matches/${idMatch}`)
//     .then((res) => {
//         console.log(res.data.endDate);
//         console.log(count);
//         // // console.log(bets[key].stage.id);
//         // bets[key].date = res.data.endDate;

//         // const winTeam = (bets[key].resultA > bets[key].resultB) ? "A" : "B";
//         // const winBet = (bets[key].scoreA > bets[key].scoreB) ? "A" : "B";

//         // currentScore.stages[bets[key].stage.id].total += bets[key].score
//         // currentScore.total += bets[key].score;

//         // if (winTeam == winBet) {
//         //     currentScore.win += 1;
//         //     currentScore.stages[bets[key].stage.id].win += 1
//         // } else {
//         //     currentScore.lose += 1;
//         //     currentScore.stages[bets[key].stage.id].lose += 1
//         // }
//         // currentScore.totalBets += 1;
//         // currentScore.stages[bets[key].stage.id].totalBets += 1




//         // userDB.bets = bets;
//         // userDB.score = currentScore;
//         // Players.update(userDB);

//     })
//     .catch((error) => {
//         console.log(error);
//     })