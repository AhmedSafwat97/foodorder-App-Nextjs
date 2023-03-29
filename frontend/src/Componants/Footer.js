import React from "react";
import Image from "next/image";
import { Box, Button, IconButton, Typography } from "@mui/material";
import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";

const Footer = () => {
  const socials = [
    { icon: <Facebook />, name: "fb" },
    { icon: <Twitter />, name: "twitter" },
    { icon: <Instagram />, name: "insta" },
    { icon: <YouTube />, name: "youtube" },
  ];

  return (
 
        <Box sx={{ display: "flex", flexDirection: " column" , bgcolor : "#242424" }}>
          <Box sx={{ marginBottom: "10px", height: "2px", bgcolor: "green" }} />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              p : "30px",
              gap: "4",
            }}
          >
            <h4
            className="title"
              style={{ fontWeight: "800", fontSize: "24px" , color : "white"}}
            >
              FoodEase
            </h4>
            <Typography variant="p" sx={{color : "white"}}>
              Copyright © 2022 - 2023 FoodEase. All rights reserved.
            </Typography>

            <Box sx={{ display: "flex", ml : "10px" }}>
              {socials.map((social) => (
                <Box key={social.name} alt={social.name}>
                  <IconButton sx={{ width: "24px", height: "24px" , color : "white"}}>
                    {social.icon}
                  </IconButton>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
  );
};

export default Footer;
