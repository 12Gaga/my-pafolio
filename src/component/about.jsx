import { Box, Slide, Typography, Button, Zoom, useTheme } from "@mui/material";
import React from "react";

import { useState, useEffect } from "react";
const About = () => {
  const theme = useTheme();
  return (
    <section id="about" className="aboutsec">
      <div className="animate">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mb: { xs: 1, md: 5 },
          }}
        >
          <Typography sx={{ fontSize: "35px" }} color={"secondary.light"}>
            About Me
          </Typography>
          <Typography sx={{ fontSize: "17px" }}>My introduction</Typography>
        </Box>
      </div>

      <Box
        sx={{
          display: { xs: "block", md: "flex" },
          alignItems: "center",
          justifyContent: "center",
          width: "70%",
        }}
      >
        <div className="animate animate1">
          <Box
            sx={{
              width: { xs: 280, md: 400 },
              height: { xs: 280, md: 400 },
              border: "1px solid",
              borderColor:
                theme.palette.mode === "dark" ? "secondary.main" : "#121212",
              borderRadius: "0px 20px 0px 20px",
              display: "flex",
              justifyContentL: "center",
              m: { xs: "0 auto", md: 0 },
            }}
          >
            <Box
              sx={{
                width: { xs: 250, md: 350 },
                height: { xs: 250, md: 350 },
                margin: " auto",
              }}
            >
              <img
                src={"/me2.jpg"}
                alt={"my-photo"}
                style={{ width: "100%", height: "100%" }}
              />
            </Box>
          </Box>
        </div>

        <div className="animate animate2" style={{ width: "100%" }}>
          <Box sx={{ pl: { md: 5 }, mt: { xs: 2 } }}>
            <Typography
              sx={{ fontSize: { xs: "13px", sm: "18px", md: "20px" } }}
              color={"secondary.light"}
            >
              This is who I am, a fullstack developer who has experience in
              website and wed application and also the one who with passion for
              creating interesting,beautiful and dynamit websites by providing
              with clean codes. I like creating web application using
              technologies like React,Nextjs,Mui,Redux,Postgresql.
            </Typography>
          </Box>
        </div>
      </Box>
    </section>
  );
};
export default About;
