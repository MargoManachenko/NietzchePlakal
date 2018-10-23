import React from 'react';
import Base from '../Components/Base';

const Contact = () => (
        <Base>
            <div className="main contact-content">
                <h1>Contact</h1>
                <div className="contacts">
                    <div className="contact-item">
                        <span className="bold">Bookings:</span>
                        <span>plakalnietzsche@gmail.com</span>
                    </div>
                    <div className="contact-item">
                        <span className="bold">Phone:</span>
                        <span>(+38) 099 522 03 46</span>
                    </div>
                </div>
                <form className="contact-form">
                    <input type="text" placeholder="Name"/>
                    <input type="email" placeholder="Email"/>
                    <input type="text" placeholder="Message"/>
                    <button className="send">Send</button>
                </form>
            </div>
        </Base>
);

export default Contact;