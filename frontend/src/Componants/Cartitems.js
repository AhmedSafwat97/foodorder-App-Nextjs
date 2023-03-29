import React from "react";
import { Delete } from "@mui/icons-material";
import { Badge, Button, Divider, IconButton, Paper, Typography } from "@mui/material";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/material";
import { decrement, DeleteItem, increment } from "@/Redux/Cartslice";
import Link from "next/link";

const Cartitems = () => {
  const { SelectedProducts } = useSelector((state) => state.Cart);
  const dispatch = useDispatch();

  console.log(SelectedProducts);
  return (
    <Box>
     {SelectedProducts.length > 0 &&
     <>
      <Typography sx={{ m: "30px 0" }} variant="h4">
            Cart
          </Typography>
      {SelectedProducts.map((Product) => {
        return (
          <Paper
          key={Product.id}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: { xs: "350px", md: "700px" },
            border: "1px solid green",
            p: "10px",
          }}
          >
          <img className="cart-img" src={Product.imageLink} alt="" />
          <Typography
            variant="h4"
            color="initial"
            sx={{
              p: "0 10px",
              width: "100px",
              fontSize: { xs: "24px", md: "24px" },
            }}
          >
            {Product.Name}
          </Typography>
          <Typography
            variant="h4"
            color="initial"
            sx={{ fontSize: { xs: "24px", md: "30px" } }}
          >
            ${Product.price}
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <IconButton
              sx={{ m: "0 10px" }}
              onClick={() => {
                dispatch(decrement(Product));
              }}
            >
              -
            </IconButton>

            <Badge badgeContent={Product.quantity} color="primary"/>

            <IconButton
              sx={{ m: "0 10px" }}
              onClick={() => {
                dispatch(increment(Product));

              }}
            >
              +
            </IconButton>
          </Box>{" "}
          <Typography
            variant="h4"
            color="initial"
            sx={{ fontSize: { xs: "24px", md: "30px" } }}
          >
            ${Number(Product.price) * Number(Product.quantity)}
          </Typography>
          <IconButton onClick={() => {dispatch(DeleteItem(Product))}} sx={{ m: "0 10px" }}>
            <Delete />
          </IconButton>
         </Paper>
      )
        
      })}
     
     
     </>
     
     
     }
      <Divider />
    </Box>
  );
};

export default Cartitems;
