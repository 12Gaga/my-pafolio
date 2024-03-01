import { Box, Tab, useTheme } from "@mui/material";
const tabs = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "skill",
    title: "Skills",
  },
  {
    id: "project",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const scrollToSection = (Id) => {
  const section = document.getElementById(Id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};
const Titles = () => {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          display: { xs: "flex", md: "block" },
          flexDirection: "column",
          width: { xs: 200, md: "auto" },
        }}
      >
        {tabs.map((item) => {
          return (
            <Tab
              key={item.title}
              label={item.title}
              sx={{
                color:
                  theme.palette.mode === "dark" ? "secondary.light" : "white",
                fontSize: { md: "13px", lg: "15px" },
              }}
              onClick={() => scrollToSection(item.id)}
            />
          );
        })}
      </Box>
    </>
  );
};
export default Titles;
