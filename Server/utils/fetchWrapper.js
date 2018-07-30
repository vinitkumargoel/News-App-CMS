const fetch = require('node-fetch');
var fs = require('fs');

function fetchWrapper(debug = false, directory = __dirname + '/result') {
    return (url, options, res = null) => {
        fetch(url, options)
            .then((response) => {
                if (response.ok) {
                    if (debug) {
                        console.log('okay2');
                        fs.writeFile(`${directory}/initialRes.json`, JSON.stringify(response), 'utf8');
                    }
                    return response.json();
                }
                else {
                    console.log('okay');
                    debug && console.log('not okay', JSON.stringify((({ status, statusText }) => ({ status, statusText }))(response)));
                    res.status(response.status).json({ errorText: response.statusText });
                    throw new Error('Network response was not ok.');
                }
            })
            .then(data => {
                if (debug) {
                    console.log('writing final res');
                    fs.writeFile(`${directory}/finalRes.json`, JSON.stringify(data), 'utf8');
                }
                else {
                    res.status(200).json(data);
                }
            })
            .catch(error => {
                if (debug) {
                    fs.writeFile(`${directory}/error`, error, 'utf8');
                }
                else {
                    res.status(404).json({ errorText: "Network Error" });

                }
            })
    };
}
module.exports = fetchWrapper;