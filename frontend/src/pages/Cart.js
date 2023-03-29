import Cartitems from "@/Componants/Cartitems";
import Layout from "@/Componants/Layout";
import { Button, Divider, IconButton, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Cart = ({ title }) => {
  const { SelectedProducts } = useSelector((state) => state.Cart);

  let totalPrice = 0;

  return (
    <Layout title="Cart">
      <Box sx={{ minHeight: "90vh" }}>
        <Box sx={{ width: "100%", height: "90px", bgcolor: "black" }} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Cartitems />
        </Box>

        {SelectedProducts.length > 0 && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Paper
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: { xs: "350px", md: "700px" },
                border: "1px solid green",
                p: "10px",
                m: "20px 0",
              }}
            >
              <Typography
                variant="h4"
                color="initial"
                sx={{ fontSize: { xs: "24px", md: "30px" } }}
              >
                Total Price :
              </Typography>
              {SelectedProducts.map((item) => {
                totalPrice += item.price * item.quantity;
              })}
               <Typography
                    variant="h4"
                    color="initial"
                    sx={{ fontSize: { xs: "24px", md: "30px" } }}
                  >
                    {" "}
                    ${totalPrice}
                  </Typography>
            </Paper>
            <Divider />
            <Button sx={{ bgcolor: "red", color: "white", mb: "30px" }}>
              CheckOut
            </Button>
          </Box>
        )}

        {SelectedProducts.length === 0 && (
          <Box
            sx={{
              minHeight: "50vh",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography variant="h4">The Cart Is Empty</Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography variant="h6" mr="5px">
                Return to The
              </Typography>
              <Link href="/Menu">Menu</Link>
            </Box>
          </Box>
        )}
      </Box>
    </Layout>
  );
};

export default Cart;
