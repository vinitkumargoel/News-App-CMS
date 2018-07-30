const apis = require('../routers/apis.json');
const fetchWrapper = require('../utils/fetchWrapper.js')
const globalVars = require('../globalVars.json');
var fs = require('fs');
const JIRA = globalVars.JIRA;
const path = require('path');
const directory = './result';


fs.readdir(directory, (err, files) => {
    if (err) throw err;

    for (const file of files) {
        fs.unlink(path.join(directory, file), err => {
            if (err) throw err;
        });
    }
});

let url = apis['user'];
url = JIRA + url + "?username=" + '9003844';
const options = {
    method: "GET",
    headers: {
        "Authorization": `Basic OTAwMzg0NDo5NDQ5MDczOTA2bU0u`
    },
};


const debug = true;

fetchWrapper(debug, directory)(url, options);
