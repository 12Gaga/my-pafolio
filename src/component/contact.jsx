import {
  Box,
  Button,
  TextField,
  TextareaAutosize,
  Typography,
  useTheme,
} from "@mui/material";
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
            sx={{ fontSize: "35px", mt: { xs: 8, md: 10 } }}
            color={"secondary.light"}
          >
            Contact Me
          </Typography>
        </div>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
            alignItems: "center",
          }}
        >
          <div className="animate contact">
            <Typography color={"secondary.light"}>First Name</Typography>
            <TextField
              sx={{
                width: { xs: 300, sm: 500 },
                border: theme.palette.mode === "dark" ? 1 : 0,
                borderRadius: 1,
                borderColor: "secondary.light",
              }}
              placeholder="First Name"
              className="animate contact"
              style={{ "--i": 1 }}
            />
          </div>

          <div className="animate contact">
            <Typography color={"secondary.light"}>Last Name</Typography>
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
          </div>

          <div className="animate contact">
            <Typography color={"secondary.light"}>E-mail</Typography>
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
          </div>

          <div className="animate contact">
            <Typography color={"secondary.light"}>Phone</Typography>
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
          </div>

          <div className="animate contact">
            <Box sx={{ width: { xs: 300, sm: 500 } }}>
              <Typography color={"secondary.light"}>Your Message</Typography>
              <textarea
                style={{
                  width: "100%",
                  backgroundColor: "transparent",
                  color: theme.palette.mode === "dark" ? "white" : "black",
                  borderColor:
                    theme.palette.mode === "dark" ? "#0ef" : "#dad9d9",
                  borderRadius: 5,
                  fontSize: "15px",
                  "--i": 5,
                }}
                rows={8}
                placeholder="Write here"
                className="animate contact"
              ></textarea>
            </Box>
          </div>
        </Box>
        <div className="animate contact1" style={{ "--i": 6 }}>
          <Button
            variant="contained"
            sx={{
              mt: 1,
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
