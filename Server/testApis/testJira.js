const apis = require('../routers/apis.json');
const fetchWrapper = require('../utils/fetchWrapper.js')
const globalVars = require('../globalVars.json');
var fs = require('fs');
const JIRA = globalVars.JIRA;
const path = require('path');
const _ = require('lodash');
const directory = './result';

const files = fs.readdirSync(directory);
console.log(JSON.stringify(files))
files.forEach((file) => {
    fs.unlinkSync(path.join(directory, file));
});

// let url = apis['user'];
// url = JIRA + url + "?username=" + '9003844';
// const options = {
//     method: "GET",
//     headers: {
//         "Authorization": `Basic OTAwMzg0NDo5NDQ5MDczOTA2bU0u`
//     },
// };
let body = {
    jql: 'project = 11923 AND (issuetype = Story OR issuetype = "Technical Story") AND "Story Points" is EMPTY',
    maxResults: 1
}
let url = apis['issues'];
body = _.pick(body, ['jql', 'startAt', 'maxResults', 'fields']);

url = JIRA + url+'?';
Object.getOwnPropertyNames(body).forEach((key)=>{
    url = url  + `${key}=${body[key]}&`
})
url = encodeURI(url)
const content_type = "application/json";
const options = {
    method: "GET",
    headers: {
        "Authorization": "Basic OTAwMzg0NDo5NDQ5MDczOTA2bU0u",
        "Content-Type": content_type
    },
};


const debug = true;

fetchWrapper(debug, directory)(url, options);
