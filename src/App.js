import logo from "./logo.svg";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import "./App.css";

import { Divider } from "@mui/material";
import { useEffect, useState } from "react";
import Heading from "./component/headingBar";
import HomePage from "./component/home";
import About from "./component/about";
import SkillPage from "./component/skill";
import ProjectPage from "./component/project";
import ContactPage from "./component/contact";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material/styles";
import { getToTheme } from "./utils/theme";
import { CssBaseline } from "@mui/material";
function App() {
  const [mode, setMode] = useState(false);
  const modeType = mode ? "dark" : "light";
  console.log("modeType", modeType);
  const theme = createTheme(getToTheme(modeType));
  useEffect(() => {
    let sections = document.querySelectorAll("section");
    console.log(sections);
    window.onscroll = () => {
      sections.forEach((sec) => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        if (top >= offset && top < offset + height) {
          sec.classList.add("show");
        } else {
          sec.classList.remove("show");
        }
      });
    };
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Heading setmode={setMode} mode={mode} />
      <HomePage />
      <Divider></Divider>
      <About />
      <Divider></Divider>
      <SkillPage />
      <Divider></Divider>
      <ProjectPage />
      <Divider></Divider>
      <ContactPage />
    </ThemeProvider>
  );
}

export default App;
