import { planetVariants } from "@/utils/Motions";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <motion.div 
      variants={planetVariants("left")}>
        <Box
          sx={{
            width: { xs: "350px", md: "500px" },
            heigth: { xs: "350px", md: "500px" },
          }}
        >
          <Image
            width="1000"
            height="1000"
            src="/About.png"
            style={{ width: "100%", height: "100%" }}
          />
        </Box>
      </motion.div>

      <Box sx={{ width: { xs: "350px", md: "500px" } }}>
        <h1 className="title" style={{ color: " black", textAlign: "center" }}>
          We Are Feane
        </h1>
        <Typography
          variant="h6"
          sx={{ textAlign: { xs: "center", md: "start" } }}
        >
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
        </Typography>
      </Box>
    </Box>
  );
};

export default About;
