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
            response: '',
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
                response: res.message,
                name: '',
                email: '',
                message: ''
            });
            setTimeout(() => {
                this.setState({response: ''});
            }, 6000);
        }
    };

    render() {
        return (
            <Base>
                <div className="main contact-content">
                    <h1><Translate id="content.contact.headline">Contact</Translate></h1>
                    <div className="contacts">
                        <div className="contact-item">
                            <span className="bold"><Translate id="content.contact.booking">Bookings:</Translate></span>
                            <span>plakalnietzsche@gmail.com</span>
                        </div>
                        <div className="contact-item">
                            <span className="bold"><Translate id="content.contact.phone">Phone:</Translate></span>
                            <span>(+38) 099 522 03 46</span>
                        </div>
                    </div>
                    <form onSubmit={this.sendForm} className="contact-form">
                        <input type="text" placeholder="Name" name="name" autoComplete="off"
                               value={this.state.name} onChange={this.handleChange}
                               className={this.state.nameValid ? '' : 'error'}/>
                        <input type="text" placeholder="Email" name="email" autoComplete="off"
                               value={this.state.email} onChange={this.handleChange}
                               className={this.state.emailValid ? '' : 'error'}/>
                        <input type="text" placeholder="Message" name="message" autoComplete="off"
                               value={this.state.message} onChange={this.handleChange}
                               className={this.state.messageValid ? '' : 'error'}/>
                        <button type="submit" className="send"><Translate id="content.contact.btn-send">Send</Translate>
                        </button>
                        <p className="result">{this.state.response}</p>
                        <p className="result error">{this.state.formErrors.name}</p>
                        <p className="result error">{this.state.formErrors.email}</p>
                        <p className="result error">{this.state.formErrors.message}</p>
                    </form>
                </div>
            </Base>
        )
    }
}

export default Contact;