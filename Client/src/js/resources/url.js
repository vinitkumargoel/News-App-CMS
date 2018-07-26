const urls = (function(){
    if(process.env.NODE_ENV=== 'development'){
        return {
            "nodeServer":"http://localhost:3003",
            "jiraApi":{
                "projects":"/projects"
            }
        }
    }
    else{
        return {
            "nodeServer":window.location.host
        }
    }
})();

export default urls;