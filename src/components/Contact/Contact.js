import * as React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { Typography, Button } from "@mui/material";
import "./contact.css";

export default function Contact() {
  const [send, setSend] = useState(false)
  const form = useRef();

  // useEffect(() => {
  //   setSend(false);
  // }, [])
  

  const sendEmail = (e) => {
    e.preventDefault();
    setSend(true);
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
  };

  return (
    <div id="Contact" className="anchor">
      <div className="container ">
        <Typography
          variant="h3"
          align="center"
          color="text.secondary"
          paragraph
        >
          Contact Me
        </Typography>
        <div className="container contact__container">
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              rows="7"
              placeholder="Your Message"
              required
            ></textarea>
            <Button type="submit" className="send-button" variant="outlined">
              Send Message
            </Button>
            {send !== false ? <p id="thankYou">Thank you!</p> : <p></p>}
          </form>
        </div>
      </div>
    </div>
  );
}
