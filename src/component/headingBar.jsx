import { Box, Drawer, Typography, useTheme } from "@mui/material";
import React from "react";
import { useState } from "react";
import Titles from "./title";
import MenuIcon from "@mui/icons-material/Menu";
import LightDark from "./light-dark";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
const Heading = ({ mode, setmode }) => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "fixed",
          top: 0,
          bgcolor: "primary.dark",
          zIndex: 4,
          height: { xs: 60, sm: "auto" },
        }}
      >
        <Box
          sx={{
            pl: { xs: 2, md: 15 },
            width: { xs: 80, sm: 100, md: 200 },
            height: { xs: 50, sm: 60, md: 80 },
          }}
        >
          <img
            src={"/girl.png"}
            alt={"gril"}
            style={{ width: "100%", height: "100%" }}
          />
        </Box>

        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <Titles />
        </Box>
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <LightDark mode={mode} setmode={setmode} />
        </Box>

        <Box sx={{ display: { xs: "block", md: "none" }, mr: 5 }}>
          <MenuIcon
            sx={{ fontSize: "30px", color: "white" }}
            onClick={() => setOpen(true)}
          />
        </Box>
      </Box>
      <Drawer anchor={"right"} open={open} onClose={() => setOpen(false)}>
        <Titles />
        <LightDark mode={mode} setmode={setmode} />
      </Drawer>
      <Box
        sx={{
          position: "fixed",
          bottom: 0,
          left: { xs: "32%", sm: "42%", md: "46%" },
          display: "flex",
          bgcolor:
            theme.palette.mode === "dark" ? "secondary.light" : "#367166",
          p: 0.5,
        }}
      >
        <Box className="dropdown">
          <LocalPhoneIcon
            sx={{
              color: theme.palette.mode === "dark" ? "black" : "white",
            }}
          />
          <div
            className="drop drop-phone"
            style={{ backgroundColor: "primary" }}
          >
            <Typography sx={{ fontSize: 17 }}>09973232912</Typography>
          </div>
        </Box>
        <Box className="dropdown" sx={{ mx: 2 }}>
          <EmailIcon
            sx={{
              color: theme.palette.mode === "dark" ? "black" : "white",
            }}
          />
          <div
            className="drop drop-email"
            style={{ backgroundColor: "primary" }}
          >
            <Typography sx={{ fontSize: 17 }}>
              eaintmyatnoemin11@gmail.com
            </Typography>
          </div>
        </Box>

        <Box className="dropdown">
          <a href=" https://www.linkedin.com/in/eaintmyatnoemin11">
            <LinkedInIcon
              sx={{
                color: theme.palette.mode === "dark" ? "black" : "white",
              }}
              className="linkedinHover"
            />
          </a>
          <div
            className="drop drop-linkedin"
            style={{ backgroundColor: "primary" }}
          >
            <Typography sx={{ fontSize: 17 }}>
              https://www.linkedin.com/in/eaintmyatnoemin11
            </Typography>
          </div>
        </Box>

        <Box className="dropdown" sx={{ mx: 2 }}>
          <GitHubIcon
            sx={{
              color: theme.palette.mode === "dark" ? "black" : "white",
            }}
          />

          <div
            className="drop drop-github"
            style={{ backgroundColor: "primary" }}
          >
            <Typography sx={{ fontSize: 17 }}>12Gaga</Typography>
          </div>
        </Box>
      </Box>
    </>
  );
};
export default Heading;
