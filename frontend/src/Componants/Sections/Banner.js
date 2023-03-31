import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <Box sx={{ width: "100%", height: { xs: "600px", md: "100vh" } }}>
      <Image
        style={{ width: "100%", height: "100%" }}
        width="2000"
        height="2000"
        src="/b1.jpg"
        alt="banner"
      />
        <Box
          sx={{
            position: "absolute",
            zIndex: "1",
            top: { xs: "100px", md: `calc(50vh - 85px)` },
            left: { xs: "20px", md: "100px" },
            right: { xs: "20px" },
            color: "white",
            width: { xs: "fit-content", md: "500px" },
            height: { xs: "400px", md: "170px" },
            display : "flex",
            flexDirection : " column" ,
          }}
        >
          <h1 style={{ fontSize: "48px", marginBottom: "5px" }} className="title">
            Hello From FoodEase App
          </h1>
          <Typography variant="p">
          FoodEase is a place where customers can order a variety of food items and have them prepared fresh and ready to eat. This type of shop may offer a range of different foods, such as sandwiches, wraps, Fries, pizza, and more, depending on the specific menu.
          </Typography>
          <Button
            sx={{bgcolor: "green", mt: "10px" , width : "fit-content" }}
            variant="contained"
          >
            Order Now
          </Button>
        </Box>
    </Box>
  );
};

export default Banner;
