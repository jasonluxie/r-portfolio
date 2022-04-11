import React from "react";
import "../styles/Form.css"

export default function ContactForm () {
    return (<section id="contact-section">
    <div className="contact-section__form">
        <h3>Contact</h3>
        <p>
            Please fill out the forllowing form to contact me, I'll get back to you as soon as I can! To make this a smooth process, it would be very
            appreciated if you could describe in as much detail in the "Message" section the:
        </p>
        <ul>
            <li>[Purpose of Work]</li>
            <li>[Content of Work]</li>
        </ul>
        <form action="https://formspree.io/f/myyoneon" method="POST">
            <div className="contact-section__boxes">
                <input
                    className="form-input"
                    type="text"
                    placeholder="Name"
                    name="Name"
                    required
                />
            </div>
            <div className="contact-section__boxes">
                <input
                    className="form-input"
                    type="email"
                    placeholder="Your Email"
                    name="Email"
                    required
                />
            </div>
            <div className="contact-section__boxes">
                <input
                    className="form-input"
                    type="date"
                    placeholder="Deadline"
                    name="Deadline"
                    required
                />
            </div>
            <div
                className="contact-section__boxes"
                id="contact-section__message"
            >
                <textarea
                    className="form-input"
                    type="text"
                    placeholder="Message"
                    Name="Message"
                    required
                ></textarea>
            </div>
            <button className="contact-section__submit" type="submit">
                SUBMIT
            </button>
        </form>
    </div>
</section>)
}