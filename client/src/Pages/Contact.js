import React from 'react';
import {Translate} from 'react-localize-redux';
import ValidateContactForm from '../Modules/Validation';
import Base from '../Components/Base';

class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            responseSuccess: false,
            responseMessage: '',
            nameValid: true,
            emailValid: true,
            messageValid: true,
            formErrors: {name: '', email: '', message: ''}
        };

        this.handleChange = this.handleChange.bind(this);
        this.sendForm = this.sendForm.bind(this);
    }

    handleChange = (e) => {
        let itemValid = e.target.name + 'Valid';
        this.setState({
            [ e.target.name ]: e.target.value,
            [ itemValid ]: true
        });
    };

    sendForm = async (e) => {
        e.preventDefault();
        const {name, email, message} = this.state;
        this.setState({
            formErrors: {name: '', email: '', message: ''}
        });

        let validationResult = ValidateContactForm(name, email, message);

        let nameValid = !validationResult.name;
        let emailValid = !validationResult.email;
        let messageValid = !validationResult.message;
        let isError = false;
        if (!nameValid || !emailValid || !messageValid) {
            isError = true;
            this.setState({
                formErrors: validationResult,
                nameValid: nameValid,
                emailValid: emailValid,
                messageValid: messageValid
            })
        }
        if (!isError) {
            console.log(isError, ' isError');
            const response = await fetch('/api/contact', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    message: message
                })
            });
            const res = await response.json();
            this.setState({
                responseMessage: res.message,
                responseSuccess: res.success,
                name: '',
                email: '',
                message: ''
            });
        }
    };

    render() {
        if (this.state.responseMessage) {
            if (this.state.responseSuccess) {
                return (
                    <Base>
                        <div className="main contact-content">
                            <h1><Translate id="content.contact.headline">Contact</Translate></h1>
                            <div className="contact-form-response">
                                <h2>YOUR MESSAGE HAS BEEN SUCCESFULLY SENT.</h2>
                                <h3>WE WILL CONTACT YOU SHORTLY </h3>
                            </div>
                        </div>
                    </Base>
                )
            }
            else {
        return (
            <Base>
                <div className="main contact-content">
                    <h1><Translate id="content.contact.headline">Contact</Translate></h1>
                    <div className="contact-form-response">
                        <h2>Some error occurred.</h2>
                        <h3>Try sending the request later </h3>
                    </div>
                </div>
            </Base>
        )
            }
        }
        else {
            return (
                <Base>
                    <div className="main contact-content">
                        <h1><Translate id="content.contact.headline">Contact</Translate></h1>
                        <div className="contacts">
                            <div className="contact-item">
                                <span className="bold"><Translate
                                    id="content.contact.booking">Bookings:</Translate></span>
                                <span className="bold"><Translate id="content.contact.phone">Phone:</Translate></span>

                            </div>
                            <div className="contact-item">
                                <span>plakalnietzsche@gmail.com</span>
                                <span>(+38) 099 522 03 46</span>
                            </div>

                        </div>
                        <form onSubmit={this.sendForm} className="contact-form">
                            <div className="input-block">
                                <input type="text" placeholder="Name" name="name" autoComplete="off"
                                       value={this.state.name} onChange={this.handleChange}
                                       className={this.state.nameValid ? '' : 'error'}/> <br/>
                                <p className="result error">{this.state.formErrors.name}</p>
                            </div>
                            <div className="input-block">
                                <input type="text" placeholder="Email" name="email" autoComplete="off"
                                       value={this.state.email} onChange={this.handleChange}
                                       className={this.state.emailValid ? '' : 'error'}/> <br/>
                                <p className="result error">{this.state.formErrors.email}</p>
                            </div>
                            <div className="input-block">
                                <input type="text" placeholder="Message" name="message" autoComplete="off"
                                       value={this.state.message} onChange={this.handleChange}
                                       className={this.state.messageValid ? '' : 'error'}/> <br/>
                                <p className="result error">{this.state.formErrors.message}</p>
                            </div>
                            <button type="submit" className="send"><Translate
                                id="content.contact.btn-send">Send</Translate>
                            </button>
                        </form>
                    </div>
                </Base>
            )
        }

    }
}

export default Contact;