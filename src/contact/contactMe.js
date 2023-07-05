import React, { useRef } from "react";
import Box from "@mui/material/Box";
import emailjs from "@emailjs/browser";
import TextField from "@mui/material/TextField";
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
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
      ref={form}
      onSubmit={sendEmail}
    >
      <TextField
        id="outlined-basic"
        label="name"
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
        label="Multiline"
        name="message"
        multiline
        rows={4}
      />
      <input type="submit" value="Send" />
    </Box>
  );
};
