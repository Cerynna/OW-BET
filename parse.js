const axios = require('axios');
const fs = require('fs');
const cron = require('node-cron');

console.log('PARSE INIT');

cron.schedule('*/30 * * * *', () => {
    console.log('PARSE MATCHES CRON');
    getMatches();
});
getMatches();

function getMatches() {
    axios.get('https://api.overwatchleague.com/schedule')
        .then(function (response) {
            const stages = response.data.data.stages;
            const json = stages.map(stage => {
                return {
                    id: stage.id,
                    name: stage.name,
                    start: (stage.matches[0] && stage.matches[0].startDateTS) ? (stage.matches[0].startDateTS / 1000) : false,
                    end: (stage.matches[stage.matches.length - 1] && stage.matches[stage.matches.length - 1].endDateTS) ? (stage.matches[stage.matches.length - 1].endDateTS / 1000) : false,
                    matches: stage.matches.map(match => {
                        return {
                            id: match.id,
                            TeamA: (match.competitors[0]) ? match.competitors[0].abbreviatedName : '???',
                            TeamB: (match.competitors[1]) ? match.competitors[1].abbreviatedName : '???',
                            scoreA: match.scores[0].value || 0,
                            scoreB: match.scores[1].value || 0,
                            close: (match.actualEndDate) ? true : false,
                            end: (match.actualEndDate) ? match.actualEndDate : false,
                            start: (match.startDateTS) ? match.startDateTS / 1000 : false,
                            subEvents: {

                                name: stage.weeks.map((week) => {
                                    if (week.matches.find((map) => {
                                            return map.id === match.id;
                                        })) {
                                        return week.name;
                                    }
                                }).filter(function (item, index, array) {
                                    return item;
                                }).join(),
                                id: stage.weeks.map((week) => {
                                    if (week.matches.find((map) => {
                                            return map.id === match.id;
                                        })) {
                                        return week.name;
                                    }
                                }).filter(function (item) {
                                    return item;
                                }).join().split(' ')[1] - 1,
                            },

                        };
                    })
                }
            });

            json.sort((a, b) => {
                const keyA = new Date(a.start),
                    keyB = new Date(b.start);
                if (keyA < keyB) return -1;
                if (keyA > keyB) return 1;
                return 0;
            });


            // console.log(json);
            fs.writeFile("matches.json", JSON.stringify(json));


        })
        .catch(function (error) {
            console.log(error);
        });
}