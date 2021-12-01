import emailjs from "emailjs-com";
import React from 'react';

const ContactMe = () => {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_d15zh4d', e.target, 'user_vskqzsv7XkMCO1UXAeigl')
            .then((result) => {
                console.log(result.text);
                window.alert("Your Message Successfully Sent");
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }
    return (
        <div id="contactMe" className="container pt-4">
            <h3>Send me message</h3>
            <form onSubmit={sendEmail}>
                <div className="row pt-3 mx-auto">
                    <div className="col-8 form-group mx-auto">
                        <input type="text" className="form-control" name="name" id="" placeholder="Your Name" />
                    </div>
                    <div className="col-8 pt-2 form-group mx-auto">
                        <input type="email" className="form-control" name="email" id="" placeholder="Your Email" />
                    </div>
                    <div className="col-8 pt-2 form-group mx-auto">
                        <input type="text" className="form-control" name="subject" id="" placeholder="Subject" />
                    </div>
                    <div className="col-8 pt-2 form-group mx-auto">
                        <textarea className="form-control" cols="30" rows="8" name="message" id="" placeholder="Your Message" />
                    </div>
                    <div className="col-8 pt-3 mx-auto">
                        <input type="submit" className="btn btn-info" value="Send Message" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ContactMe;