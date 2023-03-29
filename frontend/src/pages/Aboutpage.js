import Layout from "@/Componants/Layout";
import About from "@/Componants/Sections/About";
import { Box } from "@mui/system";
import React from "react";

const Aboutpage = () => {
  return (
    <Layout title="About">
      <Box sx={{ width: "100%", height: "90px", bgcolor: "black" }} />
    <Box sx={{minHeight : "75vh" , display : "flex" , justifyContent : "center" , alignItems : "center"}}>
    <About />
    </Box>
    </Layout>
  );
};

export default Aboutpage;
