import React from "react";
import "../styles/Form.css"

export default function ContactForm () {
    return (<section id="contact-section">
    <div className="contact-section__form">
        <h3>Contact</h3>
        <p>
            To make this a smooth process, it would be very
            appreciated if you could describe in as much detail as
            possible the:
        </p>
        <ul>
            <li>[Purpose of Work]</li>
            <li>[Content of Work]</li>
            <li>[Deadline]</li>
        </ul>
        <form action="http://formspree.io/jasonluxie@gmail.com">
            <div className="contact-section__boxes">
                <label for=""></label>
                <input
                    className="form-input"
                    type="text"
                    placeholder="Name"
                    required
                />
            </div>
            <div className="contact-section__boxes">
                <label for=""></label>
                <input
                    className="form-input"
                    type="email"
                    placeholder="Email"
                    required
                />
            </div>
            <div className="contact-section__boxes">
                <label for=""></label>
                <input
                    className="form-input"
                    type="date"
                    placeholder="Deadline"
                    required
                />
            </div>
            <div
                className="contact-section__boxes"
                id="contact-section__message"
            >
                <label for=""></label>
                <textarea
                    className="form-input"
                    type="text"
                    placeholder="Message"
                    required
                ></textarea>
            </div>
            <button className="contact-section__submit" type="button">
                SUBMIT
            </button>
        </form>
    </div>
</section>)
}