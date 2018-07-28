const fetch = require('node-fetch');
var fs = require('fs');

function fetchWrapper(debug = false, directory = './result') {
    return (url,options,res=null) => {
        fetch(url, options)
        .then((response) => {
            if (response.ok) {
                let data = response.json();
                if (debug) {
                    console.log('okay');
                    fs.writeFile(`${directory}/initialRes.json`, JSON.stringify(response), 'utf8');
                    console.log('writing final res');
                    fs.writeFile(`${directory}/finalRes.json`, JSON.stringify(data), 'utf8');
                }
                else {
                    res.status(response.status).json(data);
                }
            }
            else {
                debug && console.log('not okay', JSON.stringify((({ status, statusText }) => ({ status, statusText }))(response)));
                res.status(response.status).json(data);
            }
        })
        .catch(error => {
            if (debug) {
                console.log(error);
                fs.writeFile(`${directory}/error`, error, 'utf8');
            }
            else {
                res.status(502).json(error);
            }
        })
    };
}
module.exports = fetchWrapper;