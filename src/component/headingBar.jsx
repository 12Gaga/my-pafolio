import { Box, Drawer } from "@mui/material";
import React from "react";
import { useState } from "react";
import Titles from "./title";
import MenuIcon from "@mui/icons-material/Menu";
import LightDark from "./light-dark";

const Heading = ({ mode, setmode }) => {
  const [open, setOpen] = useState(false);

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
          <MenuIcon sx={{ fontSize: "30px" }} onClick={() => setOpen(true)} />
        </Box>
      </Box>
      <Drawer anchor={"right"} open={open} onClose={() => setOpen(false)}>
        <Titles />
        <LightDark mode={mode} setmode={setmode} />
      </Drawer>
    </>
  );
};
export default Heading;
