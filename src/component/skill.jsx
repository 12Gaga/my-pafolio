import { Box, Typography, Avatar } from "@mui/material";
import React from "react";
const languages = [
  {
    img: "/html.png",
    name: "HTML",
    skill: "Advance",
    delay: 0,
  },
  {
    img: "/css.png",
    name: "CSS",
    skill: "Intermediate",
    delay: 1,
  },
  {
    img: "/js.png",
    name: "JS",
    skill: "Advance",
    delay: 2,
  },
  {
    img: "/react.png",
    name: "React",
    skill: "Intermediate",
    delay: 3,
  },
  {
    img: "/nodejs.png",
    name: "NodeJs",
    skill: "Beginner",
    delay: 4,
  },
  {
    img: "/nextjs.png",
    name: "NextJs",
    skill: "Intermediate",
    delay: 5,
  },
  {
    img: "/postgres.png",
    name: "Postgesql",
    skill: "Beginner",
    delay: 6,
  },
  {
    img: "/redux.png",
    name: "Redux",
    skill: "Beginner",
    delay: 7,
  },
  {
    img: "/graphql.png",
    name: "Graphql",
    skill: "Beginner",
    delay: 8,
  },
];
var r = document.querySelector(":root");
const SkillPage = () => {
  return (
    <>
      <section id="skill" className="skillsec">
        <div className="animate">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              mt: { xs: 10, sm: 0 },
            }}
          >
            <Typography sx={{ fontSize: "35px" }} color={"secondary.light"}>
              My Skills
            </Typography>
            <Typography sx={{ fontSize: "17px" }}>My Knowledge</Typography>
          </Box>
        </div>

        <Box
          sx={{
            width: "90%",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}
        >
          {languages.map((item) => (
            <div
              key={item.name}
              className="animate skill"
              style={{ "--i": item.delay }}
            >
              <Box
                sx={{
                  width: 300,
                  height: { xs: 70, md: 80, lg: 100 },
                  mr: 5,

                  border: "2px solid",
                  borderColor: "secondary.light",
                  display: "flex",
                  alignItems: "center",
                  borderRadius: 4,
                  m: " auto",
                  mt: { xs: 1, sm: 2, lg: 4 },
                }}
              >
                <Avatar
                  sx={{
                    width: 50,
                    height: 50,
                    ml: 4,
                    bgcolor: "white",
                  }}
                >
                  <img
                    src={item.img}
                    alt={""}
                    style={{
                      width: "80%",
                      height: "80%",
                    }}
                  />
                </Avatar>

                <Box sx={{ pl: 5 }}>
                  <Typography>{item.name}</Typography>
                  <Typography>{item.skill}</Typography>
                </Box>
              </Box>
            </div>
          ))}
        </Box>
      </section>
    </>
  );
};
export default SkillPage;
