const express = require('express')
const router = express.Router();
const fetch = require('../utils/fetchWrapper')();
const apis = require('./apis.json');
const globalVars = require('../globalVars.json');
const JIRA = globalVars.JIRA;
const bodyParser = require('body-parser');

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now(), ' Calling Jira route: ', req.path);
    next();
})
// define the home page route
router.get('/projects', function (req, res) {
    const creds  = req.get('Authorization');
    let url = apis[req.path];
    url += '?expand=lead';
    fetch(JIRA + url, {
        method: "POST",
        headers: {
            "Authorization": creds
        },
    },res);
})

module.exports = router;