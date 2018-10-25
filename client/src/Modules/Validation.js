import emailValidator from 'email-validator';

function ValidateContactForm(name, email, message) {
    let formErrors = {name: '', email: '', message: ''};
    if (name.length === 0) {
        formErrors.name = "Name can't be empty.";
    }
    if (message.length === 0) {
        formErrors.message = "Message can't be empty.";
    }
    if(email.length === 0){
        formErrors.email = "Email can't be empty.";
    }
    if(email.length !== 0){
        if (!emailValidator.validate(email)) {
            formErrors.email = "Email is invalid.";
        }
    }

    return formErrors;
}

export default ValidateContactForm;