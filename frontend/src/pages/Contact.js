import Layout from "@/Componants/Layout";
import { Box } from "@mui/material";
import { Button, Typography } from "@mui/material";
import React from "react";

const Contact = ({ title }) => {
  return (
    <Layout title="Contact">
      <Box sx={{ width: "100%", height: "90px", bgcolor: "black" }} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          minHeight: "90vh",
        }}
      >
        <Typography sx={{ mt: "20px" }} variant="h4">
          Contact Us
        </Typography>
        <Typography variant="h5" sx={{ textAlign: "center", p: "10px" }}>
          HotLine : +11187
        </Typography>
        <Typography variant="h6" sx={{ textAlign: "center", p: "10px" }}>
          This is where you'll find all the answers you need.
        </Typography>

        <Button variant="contained" sx={{bgcolor : "red"}}  disableElevation>
          Contact Support Now
        </Button>
      </Box>
    </Layout>
  );
};

export default Contact;
