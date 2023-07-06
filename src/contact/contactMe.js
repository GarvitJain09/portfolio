import React, { useRef } from "react";
import Box from "@mui/material/Box";
import emailjs from "@emailjs/browser";
import TextField from "@mui/material/TextField";
import { Button, Container } from "@mui/material";

export const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_sch589e",
        "template_87g8phk",
        form.current,
        "VfyjVQjqfPdlLFB3w"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Container maxWidth="xl">
      <section id="contactMe">
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
          ref={form}
          onSubmit={sendEmail}
          className="displayFlex"
        >
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            name="user_name"
          />
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            name="user_email"
          />
          <TextField
            id="outlined-multiline-static"
            label="Message"
            name="message"
            multiline
            rows={4}
          />
          <Button type="submit" value="send" variant="contained">
            Send Email
          </Button>
        </Box>
      </section>
    </Container>
  );
};
