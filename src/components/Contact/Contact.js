import * as React from "react";
import { AiOutlineMail } from "react-icons/ai";
import {useRef} from "react"
import emailjs from "emailjs-com";
import { Typography, Button } from "@mui/material";
import './contact.css'

export default function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_g1b9yab",
        "template_1bxrqeq",
        form.current,
        "4RoyTHq0SyFzvujAb"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
      }

  return (
    <div id="Contact">
        <Typography
          variant="h3"
          align="center"
          color="text.secondary"
          paragraph
        >
          Contact Me
        </Typography>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className="contact__option-icon" />
            <h3>Email</h3>
            <h4>takaraktruong@gmail.com</h4>
            <a href="mailto:takaraktruong@gmail.com">Send a message</a>
          </article>
        </div>
        {/* End of contact options */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <Button type="submit" className="send-button" variant="outlined">
            Send Message
          </Button>
        </form>
      </div>
    </div>
  );
}
