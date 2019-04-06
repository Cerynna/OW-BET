const axios = require('axios');
const fs = require('fs');

axios.get('https://api.overwatchleague.com/schedule')
    .then(function (response) {
        const stages = response.data.data.stages;
        const json = stages.map(stage => {
            return {
                id: stage.id,
                name: stage.name,
                start: (stage.matches[0].startDateTS / 1000),
                end: (stage.matches[stage.matches.length - 1].endDateTS / 1000),
                matches: stage.matches.map(match => {
                    return match.id;
                })
            }
        });
        console.log(json);
        fs.writeFile("matches.json", JSON.stringify(json));


    })
    .catch(function (error) {
        console.log(error);
    });