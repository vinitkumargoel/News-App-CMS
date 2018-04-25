import { typesToValidate } from './commonData';

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