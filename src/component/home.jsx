import {
  Box,
  Typography,
  Button,
  Zoom,
  Slide,
  Divider,
  useTheme,
} from "@mui/material";
import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const HomePage = () => {
  const theme = useTheme();
  return (
    <>
      <section id="home" style={{}} className="homesec show">
        <Box
          sx={{
            display: { xs: "block", md: "flex" },
            alignItems: "center",
            justifyContent: "space-evenly",
            // bgcolor: "red",
            width: "70%",
            mt: { xs: 15, sm: 10, md: 0 },
          }}
        >
          <div className="animate animate2">
            <Zoom in timeout={2000}>
              <Box
                sx={{
                  width: { xs: 250, sm: 280, md: 350 },
                  height: { xs: 250, sm: 280, md: 350 },
                  display: { xs: "block", md: "none" },
                  margin: "0 auto",
                }}
              >
                <img
                  src={"/eaint.jpg"}
                  alt={"my-photo"}
                  style={{
                    borderRadius: "40%",
                    width: "100%",
                    height: "100%",
                  }}
                />
              </Box>
            </Zoom>
          </div>

          <div style={{}} className="animate animate1">
            <Slide
              direction="right"
              in
              mountOnEnter
              unmountOnExit
              timeout={2000}
            >
              <Box sx={{ width: "100%" }}>
                <h1>Hey,I'm</h1>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    color:
                      theme.palette.mode === "dark" ? "secondary.light" : "red",
                    mb: 2,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "20px", sm: "35px" },
                      fontWeight: "bold",
                      fontStyle: "italic",
                    }}
                  >
                    Eaint Myat Noe Min
                  </Typography>
                </Box>

                <Typography sx={{ pr: { xs: 0, md: 10 } }}>
                  I am a fullstack developer from Myanmar. I love to create
                  website and web application for the people to make their lives
                  easier in everything by being online.
                </Typography>
                <a href="/CV-form.pdf">
                  <Button
                    variant="contained"
                    sx={{
                      mt: 2,
                      bgcolor:
                        theme.palette.mode === "dark"
                          ? "secondary.light"
                          : "primary.main",
                      color:
                        theme.palette.mode === "dark"
                          ? "primary.main"
                          : "white",
                    }}
                  >
                    Download CV
                    <ArrowDropDownIcon />
                  </Button>
                </a>
              </Box>
            </Slide>
          </div>

          <div className="animate animate2">
            <Zoom in timeout={2000}>
              <Box
                sx={{
                  width: { xs: 250, md: 350 },
                  height: { xs: 250, md: 350 },
                  display: { xs: "none", md: "block" },
                }}
              >
                <img
                  src={"/eaint.jpg"}
                  alt={"my-photo"}
                  style={{
                    borderRadius: "40%",
                    width: "100%",
                    height: "100%",
                  }}
                />
              </Box>
            </Zoom>
          </div>
        </Box>
      </section>
    </>
  );
};
export default HomePage;
