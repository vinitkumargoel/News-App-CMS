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
