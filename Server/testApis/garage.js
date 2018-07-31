//use this file for any repair works and welding or filing.


let project = {
        "expand": "description,lead,url,projectKeys",
        "self": "https://jira.devops.lloydsbanking.com/rest/api/2/project/10104",
        "id": "10104",
        "key": "WG",
        "lead": {
            "self": "https://jira.devops.lloydsbanking.com/rest/api/2/user?username=9892108",
            "key": "harry.fletcher",
            "name": "9892108",
            "avatarUrls": {
                "48x48": "https://secure.gravatar.com/avatar/bde97b0ca63916a57d3329957fac1fe2?d=mm&s=48",
                "24x24": "https://secure.gravatar.com/avatar/bde97b0ca63916a57d3329957fac1fe2?d=mm&s=24",
                "16x16": "https://secure.gravatar.com/avatar/bde97b0ca63916a57d3329957fac1fe2?d=mm&s=16",
                "32x32": "https://secure.gravatar.com/avatar/bde97b0ca63916a57d3329957fac1fe2?d=mm&s=32"
            },
            "displayName": "Harry Fletcher",
            "active": true
        },
        "name": "Working Group",
        "avatarUrls": {
            "48x48": "https://jira.devops.lloydsbanking.com/secure/projectavatar?pid=10104&avatarId=10011",
            "24x24": "https://jira.devops.lloydsbanking.com/secure/projectavatar?size=small&pid=10104&avatarId=10011",
            "16x16": "https://jira.devops.lloydsbanking.com/secure/projectavatar?size=xsmall&pid=10104&avatarId=10011",
            "32x32": "https://jira.devops.lloydsbanking.com/secure/projectavatar?size=medium&pid=10104&avatarId=10011"
        },
        "projectCategory": {
            "self": "https://jira.devops.lloydsbanking.com/rest/api/2/projectCategory/10201",
            "id": "10201",
            "name": "Uncategorised",
            "description": ""
        },
        "projectTypeKey": "software"
    };

   // {
//     text: 'Jenny Hess',
//     value: 'Jenny Hess',
//     image: { avatar: true, src: '/images/avatar/small/jenny.jpg' },
//   }
let result = (({ id:key, name:text, avatarUrls:{"32x32":image} }) => ({value:`${key}:${text}`, key, text, image:{avatar:true,src:image} }))(project);

console.log(JSON.stringify(result));