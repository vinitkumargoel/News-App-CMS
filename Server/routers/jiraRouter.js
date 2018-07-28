const express = require('express')
const router = express.Router();
const fetch = require('../utils/fetchWrapper')();
const apis = require('./apis.json');
const globalVars = require('../globalVars.json');
const JIRA = globalVars.JIRA;
const bodyParser = require('body-parser');
const _ = require('lodash');

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now(), ' Calling Jira route: ', req.path);
    next();
})


router.get('/issues', function (req, res) {
    const creds = req.get('Authorization');
    let url = apis['issues'];
    let body = _.pick(req.body, ['jql','startAt','maxResults','fields']);
    
    fetch(JIRA + url, {
        method: "POST",
        headers: {
            "Authorization": creds
        },
        body:body
    }, res);
})
router.put('/issue/:issueId', function (req, res) {
    const creds = req.get('Authorization');
    const issueId = req.params.issueId;
    let url = apis['issue'].replace('<issueIdOrKey>',issueId );
    let body = req.body.data;
    fetch(JIRA + url, {
        method: "POST",
        headers: {
            "Authorization": creds
        },
        body:body
    }, res);
})
router.get('/issue/:issueId', function (req, res) {
    const creds = req.get('Authorization');
    const issueId = req.params.issueId;
    let url = apis['issue'].replace('<issueIdOrKey>',issueId );
    fetch(JIRA + url, {
        method: "GET",
        headers: {
            "Authorization": creds
        },
    }, res);
})

router.get('/projects', function (req, res) {
    const creds = req.get('Authorization');
    let url = apis['projects'];
    url += '?expand=lead';
    fetch(JIRA + url, {
        method: "POST",
        headers: {
            "Authorization": creds
        },
    }, res);
})

router.get('/user', function (req, res) {
    const creds = req.get('Authorization');
    let url = apis['user']
    fetch(JIRA + url, {
        method: "GET",
        headers: {
            "Authorization": creds
        },
    }, res);
})


module.exports = router;