import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const serviceID = "service_0qekmez";
const templateID = "template_d18vbu3";
const publicKey = "y6dLKX3s_RBpqJMVJ";

const Contact = ({ name }) => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
        .sendForm(serviceID, templateID, form.current, {
            publicKey: publicKey,
        })
        .then(
            () => {
            document.getElementById("contact-form").reset();
            console.log('Email was successfully sent!');
            },
            (error) => {
            console.log('Email was not sent...', error.text);
            },
        );
    }
    return (
        // Contact page
    <article class="content-wrapper">
        <h1>Contact</h1>
        <div class="contact-panel">
            <form id="contact-form" ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" id="fname" name="fname" placeholder="Full name*" required /><br/>
                <label>Email</label>
                <input type="text" id="email" name="email" placeholder="Email address*" required /><br/>
                <label>Subject</label>
                <input type="text" id="subject" name="subject" placeholder="Subject" /><br/>

                <label for="message">What's your message?</label><br/>
                <input type="text" id="message" name="message" placeholder='...' />
                <button type="submit" id="submit" value="Send message" class="btn" >Send message</button>
            </form>
        </div>
    </article>
    );
};

export default Contact;