import { Box, Button } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";

const MenuBar = ({ setCategory }) => {
  const MenuLink = [
    { title: "All", to: "" },
    { title: "Burger", to: "Burger" },
    { title: "Pizza", to: "Pizza" },
    { title: "Pasta", to: "Pasta" },
    { title: "Fries", to: "Fries" },
  ];

  const [Active, setActive] = useState("All");
  const [Color, setColor] = useState("#EEE");

  return (
    <Box>
      <Box sx={{ textAlign: "center" }}>
        <h1 className="title" style={{ color: "white" , fontWeight : "700"}}>
          Our Menu
        </h1>
        <Box>
          {MenuLink.map((item) => (
            <Button
              onClick={(eo) => {
                setCategory(item.to);
              }}
              key={item.title}
              sx={{
                color: "black",
                fontWeight : "600" ,
                bgcolor: Color,
                borderRadius: "10px",
                m: "5px",
              }}
            >
              {item.title}
            </Button>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default MenuBar;
