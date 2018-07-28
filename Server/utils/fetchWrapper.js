const fetch = require('node-fetch');
var fs = require('fs');

function fetchWrapper(debug = false, directory = './result') {
    return (url, options, res = null) => {
        fetch('https://jira.devops.lloydsbanking.com/rest/api/2/project?expand=lead', {
            method: "GET",
            headers: {
                "Authorization": `Basic OTAwMzg0NDo5NDQ5MDczOTA2bU0u`
            },
        })
            .then((response) => {
                if (response.ok) {
                    if (debug) {
                        console.log('okay');
                        fs.writeFile(`${directory}/initialRes.json`, JSON.stringify(response), 'utf8');
                    }
                    return response.json();
                }
                else {
                    debug && console.log('not okay', JSON.stringify((({ status, statusText }) => ({ status, statusText }))(response)));
                    throw new Error(`Network response was not ok. code :${response.status} message :${response.statusText}`);
                }
            })
            .then(data => {
                if (debug) {

                    console.log('writing final res');
                    fs.writeFile(`${directory}/finalRes.json`, JSON.stringify(data), 'utf8');
                }
                else {
                    res.status(response.status).json(data);
                }
            })
            .catch(error => {
                if (debug) {
                    console.log(error);
                    fs.writeFile(`${directory}/error`, error, 'utf8');
                }
                else {
                    res.status(response.status).json({ errorText: response.statusText });
                }
            })
    };
}
module.exports = fetchWrapper;