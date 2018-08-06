import { typesToValidate, CONSTANTS } from './commonData';
import urls from './../../../../../js/resources/url.js';
import { getStatusText } from '../../../../../js/resources/content.js';



export const validateData = (data, type) => {
    let result = true;
    switch (type) {
        case 'email':
            let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            result = re.test(data.toLowerCase());
            break;

        default:
            break;
    }
    return result;
}
export const validate = (state, changedElem) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let valid = Object.keys(state.inputFields).every((item) => {
        let field = state.inputFields[item];
        let result = true;
        if (typesToValidate.indexOf(field.type) > -1)
            if (field.show == true) {
                if (field.required == true) {
                    result = field.value.trim() !== '';
                    result = result && validateData(field.value.trim(), field.type);
                }
                else {
                    result = field.value.trim() === '' ? true : validateData(field.value.trim(), field.type);
                }

            }
        return result;
    })
    return valid;
}

export const updateStoreInput = (storeChunk, currentState) => {
    Object.getOwnPropertyNames(storeChunk).map((key) => {
        if (currentState[key] !== undefined) {
            if (currentState[key].value === undefined)
                storeChunk[key] = currentState[key];
            else
                storeChunk[key] = currentState[key].value;
        }
    });
}

export function fetchIssues(jql, startAt, maxResults = CONSTANTS.maxResults){
    const creds = this.props.jiraCreds;
    const url = `${urls.nodeServer}${urls.jiraApi.issues}`;

    window.fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            "Authorization": creds,
        },
        body: JSON.stringify({
            "jql": jql,
            "startAt": startAt,
            maxResults
        })
    })
        .then((response) => {
            if (response.ok)
                return response.json();
            else if (getStatusText(response.status)) {

                this.setState({ open: true, message: getStatusText(response.status) });

            }
            else {
                this.setState({ open: true, message: "An Error occured. Please try again later." });
            }
            throw new Error('Network response was not ok.');
        })
        .then(data => {
            this.props.setIssues(data);

        })
        .catch(error => {
            if (error.message !== 'Network response was not ok.')
                this.setState({ open: true, message: 'An Error occured. Please try again later.' });
            console.log(error);
        })
}