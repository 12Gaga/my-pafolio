import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";
import LinkIcon from "@mui/icons-material/Link";
const projects = [
  {
    url: "https://noeimo-cake-shop.vercel.app/",
    name: "Noeimo Cake Shop",
    img: "/noeimo.png",
    description: "HTML,CSS,JS Only Front-End",
    note1: `This is my first project using only HTML, CSS, and JavaScript. 
    I worked on it with a team for my IT computing diploma final test. It showcases menus, ordering, and contacting a cake shop, along with customer ratings.
     I faced challenges with functions and displaying ordered menus, but I overcame them by reviewing lessons and using arrays, objects, and local storage.`,
  },

  {
    url: "https://mini-commerce-app.vercel.app/",
    name: "Mini-Commerce",
    img: "/mini-commerce.png",
    description: "Next js (Client Side)",
    note1: `In my first Next.js project, It included a database.
     This project is like an Amazon website. I used Swiper to display ads with motion slides.
      I faced challenges with APIs, routes, database connections, data transfer, and rendering, but managed to overcome them in the end.`,
  },
  {
    url: "https://foodie-pos-topaz.vercel.app/",
    name: "Foodie POS",
    img: "foodie-pos.png",
    description: "Next js TypeScript Full Stack",
    note1: `This is my second Next.js project .
    It is a POS website with admin and client sides. 
    I had some challenges displaying ordered data from the database, but I solved it with complex functions.
     Additionally, I also got some  issues with NextAuth for sign in/sign out, but I resolved it by adding a Gmail account as a test user in NextAuth..
    `,
  },
  {
    url: "https://shwebo-dawma.vercel.app/",
    name: "Cigarette",
    img: "cheroot.png",
    description: "Next js TypeScript Full Stack",
    note1: `My first job project as a freelancer. 
    It's not like selling website. It included only admin side.
     It showcase the data of agents and the data of remain woods of cigarette industry.
      I had to solve date-related issues using new Date() and date properties, and I used tableRef() to address printing problems.
      Also had internal server error where server connect to the database. So I wrote dbTest API to know what the error was.
    `,
  },
];

const ProjectPage = () => {
  const [note, setNote] = useState("");
  const clicking = document.querySelector(".clicked");
  return (
    <>
      <section id="project" className="projectsec">
        <div
          className="animate"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontSize: "35px" }} color={"secondary.main"}>
            My Projects
          </Typography>
          <Typography sx={{ fontSize: "17px", mb: { xs: 1, sm: 4 } }}>
            My Creations
          </Typography>
        </div>

        <Swiper
          direction={"vertical"}
          slidesPerView={1}
          spaceBetween={30}
          mousewheel={true}
          pagination={{
            clickable: true,
          }}
          modules={[Mousewheel, Pagination]}
          className="mySwiper"
        >
          {projects.map((item) => {
            return (
              <SwiperSlide key={item.name}>
                <Box sx={{ display: { xs: "block", sm: "flex" } }}>
                  <Box sx={{ mt: { xs: 1, sm: 4 } }}>
                    <Typography
                      sx={{
                        height: "50px",
                        ml: 3,
                        fontSize: "16px",
                        fontWeight: "bold",
                      }}
                      color={"secondary.main"}
                    >
                      {item.description}
                    </Typography>
                    <Box
                      sx={{
                        position: "relative",
                        width: 250,
                        height: 250,
                        overflow: "hidden",
                        ml: 3,
                      }}
                    >
                      <Box
                        sx={{
                          width: "100%",
                          height: "100%",
                        }}
                      >
                        <img
                          src={item.img}
                          alt={"project-photo"}
                          className="img"
                          style={{
                            transition: "all ease-in-out 0.5s",
                            width: "100%",
                            height: "100%",
                          }}
                        />
                      </Box>
                      <Box
                        sx={{
                          position: "absolute",
                          bottom: 0,
                          bgcolor: "rgba(0, 238, 255, 0.32)",
                          width: "100%",
                          height: 40,
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <a href={item.url} style={{ textDecoration: "none" }}>
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <LinkIcon
                              sx={{ color: "black", rotate: "-50deg", mr: 1 }}
                            />
                            <Typography
                              sx={{ color: "black", fontWeight: "bold" }}
                            >
                              {item.name}
                            </Typography>
                          </Box>
                        </a>
                      </Box>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      ml: { sm: 2, md: 6, lg: 8 },
                      mt: { sm: 8 },
                    }}
                  >
                    <ul>
                      <li>{item.note1}</li>
                    </ul>
                  </Box>
                </Box>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </>
  );
};
export default ProjectPage;
