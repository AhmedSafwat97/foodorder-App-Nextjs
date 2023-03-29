import Layout from "@/Componants/Layout";
import MenuSwiper from "@/Componants/Sections/MenuSwiper";
import MenuSwiper2 from "@/Componants/Sections/MenuSwiper2";
import MenuSwiper3 from "@/Componants/Sections/MenuSwiper3";
import MenuSwiper4 from "@/Componants/Sections/MenuSwiper4";
import TheMenu from "@/Componants/Sections/TheMenu";
import { Box } from "@mui/material";
import React from "react";

const Menu = ({ title }) => {
  return (
    <Layout title="Menu">
      <Box sx={{ width: "100%", height: "90px", bgcolor: "black" }} />
      <h1 className="title" style={{ color: "black" , textAlign : "center" , marginTop : "30px" }}>
        Our Menu
        </h1>
      <MenuSwiper />
      <MenuSwiper2 />
      <MenuSwiper3 />
      <MenuSwiper4 />

    </Layout>
  );
};

export default Menu;
