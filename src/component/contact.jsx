import { Box, Button, TextField, Typography, useTheme } from "@mui/material";
import React from "react";
import TelegramIcon from "@mui/icons-material/Telegram";

const ContactPage = () => {
  const theme = useTheme();
  return (
    <>
      <section id="contact" className="contactsec">
        <div
          className="animate"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{ fontSize: "35px", mb: 3, mt: { md: 5, lg: 3 } }}
            color={"secondary.light"}
          >
            Contact Me
          </Typography>
        </div>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
            alignItems: "center",
          }}
        >
          <TextField
            sx={{
              width: { xs: 300, sm: 500 },
              border: theme.palette.mode === "dark" ? 1 : 0,
              borderRadius: 1,
              borderColor: "secondary.light",
            }}
            placeholder="Frist Name"
            className="animate contact"
            style={{ "--i": 1 }}
          />
          <TextField
            sx={{
              width: { xs: 300, sm: 500 },
              border: theme.palette.mode === "dark" ? 1 : 0,
              borderRadius: 1,
              borderColor: "secondary.light",
            }}
            placeholder="Last Name"
            className="animate contact"
            style={{ "--i": 2 }}
          />
          <TextField
            sx={{
              width: { xs: 300, sm: 500 },
              border: theme.palette.mode === "dark" ? 1 : 0,
              borderRadius: 1,
              borderColor: "secondary.light",
            }}
            placeholder="E-mail"
            type="email"
            className="animate contact"
            style={{ "--i": 3 }}
          />
          <TextField
            sx={{
              width: { xs: 300, sm: 500 },
              border: theme.palette.mode === "dark" ? 1 : 0,
              borderRadius: 1,
              borderColor: "secondary.light",
            }}
            placeholder="Phone"
            className="animate contact"
            style={{ "--i": 4 }}
          />
          <TextField
            sx={{
              width: { xs: 300, sm: 500 },
              border: theme.palette.mode === "dark" ? 1 : 0,
              borderRadius: 1,
              borderColor: "secondary.light",
            }}
            placeholder="Your Message"
            className="animate contact"
            style={{ "--i": 5 }}
          />
        </Box>
        <div className="animate contact1" style={{ "--i": 6 }}>
          <Button
            variant="contained"
            sx={{
              mt: 3,
              bgcolor:
                theme.palette.mode === "dark"
                  ? "secondary.light"
                  : "primary.main",
              color: theme.palette.mode === "dark" ? "primary.main" : "white",
            }}
            onClick={() => {
              const contacts = document.querySelector(".contact");
              console.log(contacts);
            }}
          >
            Send me
            <TelegramIcon sx={{ ml: 1 }} />
          </Button>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
