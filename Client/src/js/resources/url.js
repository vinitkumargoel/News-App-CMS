const urls = (function () {
    let obj = {};
    if (process.env.NODE_ENV === 'development') {
        obj["nodeServer"] = "http://localhost:3003";
    }
    else {
        obj["nodeServer"] = window.location.host;
    }
    const jiraApi = {
        projects: "/jira/projects",
        user: "/jira/user",
        issues: "/jira/issues",
        issue: "/jira/issue/<issueId>"
    };
    obj.jiraApi = jiraApi;
    return obj;
})();

export default urls;