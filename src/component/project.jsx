import { Box, Typography } from "@mui/material";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Pagination } from "swiper/modules";

const projects = [
  // {
  //   url: "",
  //   name: "Noeimo Cake Shop",
  //   img: "",
  //   description: "HTML,CSS,JS Only Front-End",
  // },
  // {
  //   url: "",
  //   name: "Tik Tok Clone App",
  //   img: "",
  //   description: "Nextjs (Client side)",
  // },
  {
    url: "https://mini-commerce-app.vercel.app/",
    name: "Mini-Commerce",
    img: "/mini-commerce.png",
    description: "Nextjs (Client side)",
  },
  {
    url: "https://foodie-pos-delta.vercel.app/",
    name: "Foodie POS",
    img: "foodie-pos.png",
    description: "Nextjs TypeScript Full Stack",
  },
];

const ProjectPage = () => {
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
          <Typography sx={{ fontSize: "17px" }}>My Creations</Typography>
        </div>

        <Swiper
          className="animate animate1 mySwiper"
          spaceBetween={50}
          slidesPerView={1}
          effect={"cube"}
          grabCursor={true}
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }}
          pagination={true}
          modules={[EffectCube, Pagination]}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {projects.map((item) => {
            return (
              <SwiperSlide key={item.name}>
                <Box sx={{ mt: 4 }}>
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
                      <a href={item.url}>
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
                      </a>
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
                      <Typography sx={{ color: "black", fontWeight: "bold" }}>
                        {item.name}
                      </Typography>
                    </Box>
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
