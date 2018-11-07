import emailValidator from 'email-validator';

function ValidateContactForm(name, email, message) {
    let formErrors = {name: '', email: '', message: ''};
    if (name.length === 0) {
        formErrors.name = "PLEASE, ENTER YOUR NAME";
    }
    if (message.length === 0) {
        formErrors.message = "PLEASE, ENTER YOUR MESSAGE";
    }
    if(email.length === 0){
        formErrors.email = "PLEASE, ENTER YOUR EMAIL";
    }
    if(email.length !== 0){
        if (!emailValidator.validate(email)) {
            formErrors.email = "PLEASE, ENTER VALID EMAIL";
        }
    }

    return formErrors;
}

export default ValidateContactForm;