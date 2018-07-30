const messages = {
    401:"Invalid JIRA credentials",
    404:"User doesn't exist",
    403:"Forbidden! Try logging into JIRA and come back."
}

export function getStatusText(statusCode){
    return messages[statusCode];
}
